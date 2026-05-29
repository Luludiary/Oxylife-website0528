import whatsapp from "../config/whatsapp.json";

export function WhatsAppButton() {
  const href = `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`;

  return (
    <a
      className="whatsapp-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact OXYDIARY on WhatsApp"
      title="WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12.1 3.2a8.7 8.7 0 0 0-7.4 13.2l-1 4.4 4.5-1a8.7 8.7 0 1 0 3.9-16.6Zm0 15.7a7 7 0 0 1-3.5-.9l-.3-.2-2.7.6.6-2.6-.2-.3a7 7 0 1 1 6.1 3.4Zm4-5.2c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.1-.5 0-.3-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.5l.4-.4c.1-.1.2-.2.3-.4.1-.1.1-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
