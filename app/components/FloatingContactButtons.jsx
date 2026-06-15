const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/8615102106279",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12.1 3.2a8.7 8.7 0 0 0-7.4 13.2l-1 4.4 4.5-1a8.7 8.7 0 1 0 3.9-16.6Zm0 15.7a7 7 0 0 1-3.5-.9l-.3-.2-2.7.6.6-2.6-.2-.3a7 7 0 1 1 6.1 3.4Zm4-5.2c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.1-.5 0-.3-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.5l.4-.4c.1-.1.2-.2.3-.4.1-.1.1-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:shservice@oxylifediary.com",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 5.5h15A2.5 2.5 0 0 1 22 8v8a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16V8a2.5 2.5 0 0 1 2.5-2.5Zm.2 2 7.3 5.2 7.3-5.2H4.7Zm15.3 2-7.4 5.3a1 1 0 0 1-1.2 0L4 9.5V16c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V9.5Z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+8615102106279",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M7 2.8 9.8 2c.8-.2 1.6.2 1.9 1l1.2 2.8c.3.7.1 1.5-.5 2l-1.5 1.2a12.2 12.2 0 0 0 4.1 4.1l1.2-1.5c.5-.6 1.3-.8 2-.5l2.8 1.2c.8.3 1.2 1.1 1 1.9l-.8 2.8c-.2.8-.9 1.3-1.7 1.3A17.5 17.5 0 0 1 4.7 4.5c0-.8.5-1.5 1.3-1.7Zm.1 2A15.5 15.5 0 0 0 19.2 17l.7-2.6-2.5-1.1-1.7 2a1 1 0 0 1-1.2.2 14.2 14.2 0 0 1-6-6 1 1 0 0 1 .2-1.2l2-1.7L9.6 4.1 7.1 4.8Z" />
      </svg>
    ),
  },
];

export function FloatingContactButtons() {
  return (
    <div className="floating-contact-buttons" aria-label="Quick contact links">
      {contacts.map((contact) => (
        <a
          className="floating-contact-link"
          href={contact.href}
          key={contact.label}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={contact.label}
          title={contact.label}
        >
          {contact.icon}
        </a>
      ))}
    </div>
  );
}
