"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function QuoteForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your request. Please email us directly.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your request has been sent. Redirecting to products...");
      window.setTimeout(() => {
        router.push("/products");
      }, 1600);
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <input className="field" name="Your Name" placeholder="Your Name" required />
      <input className="field" type="email" name="Your Email" placeholder="Your Email" required />
      <input className="field" name="Company Name" placeholder="Company Name" required />
      <input className="field" name="Company Website / URL" placeholder="Company Website / URL" />
      <input className="field" name="Shipping Destination Country" placeholder="Shipping Destination Country" required />
      <input className="field" name="Quantity (PCS)" placeholder="Quantity (PCS)" required />
      <textarea className="field full" name="Requirements" placeholder="Tell us your requirements..." />
      <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Submit Now"}
      </button>
      {message ? (
        <p className={`form-status is-visible ${status === "error" ? "is-error" : ""}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
