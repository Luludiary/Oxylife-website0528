import { NextResponse } from "next/server";

const quoteRecipient = "shservice@oxylifediary.com";

function cleanValue(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return cleanValue(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatRows(fields) {
  return fields
    .map(([label, value]) => {
      const safeValue = escapeHtml(value) || "-";
      return `
        <tr>
          <td style="padding:10px 12px;border:1px solid #dbe5ec;font-weight:700;background:#f6fafc;">${label}</td>
          <td style="padding:10px 12px;border:1px solid #dbe5ec;">${safeValue}</td>
        </tr>
      `;
    })
    .join("");
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = cleanValue(body["Your Name"]);
  const email = cleanValue(body["Your Email"]);
  const company = cleanValue(body["Company Name"]);
  const website = cleanValue(body["Company Website / URL"]);
  const destination = cleanValue(body["Shipping Destination Country"]);
  const quantity = cleanValue(body["Quantity (PCS)"]);
  const requirements = cleanValue(body.Requirements);

  if (!name || !email || !company || !destination || !quantity) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Please add RESEND_API_KEY in Vercel." },
      { status: 500 },
    );
  }

  const fields = [
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["Company Website / URL", website],
    ["Shipping Destination Country", destination],
    ["Quantity (PCS)", quantity],
    ["Requirements", requirements],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#092139;line-height:1.55;">
      <h2 style="margin:0 0 14px;color:#082b49;">New OXYDIARY Request a Quote</h2>
      <p style="margin:0 0 18px;color:#5b6c78;">A buyer submitted the website quote form.</p>
      <table style="border-collapse:collapse;width:100%;max-width:720px;font-size:14px;">
        ${formatRows(fields)}
      </table>
    </div>
  `;

  const text = fields.map(([label, value]) => `${label}: ${value || "-"}`).join("\n");
  const from = process.env.QUOTE_FROM_EMAIL || "OXYDIARY Website <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [quoteRecipient],
      reply_to: email,
      subject: `OXYDIARY Request a Quote - ${company}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { error: `Email service failed: ${errorText}` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
