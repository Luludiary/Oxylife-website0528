import socialLinks from "../config/socialLinks.json";

const icons = {
  Facebook: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14.2 8.1V6.8c0-.7.2-1.1 1.2-1.1h1.8V2.5c-.9-.1-1.8-.2-2.7-.2-2.8 0-4.7 1.7-4.7 4.9v.9H6.9v3.6h2.9v9.9h4.1v-9.9h3l.5-3.6h-3.2Z" />
    </svg>
  ),
  Instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8.1 2.5h7.8c3.1 0 5.6 2.5 5.6 5.6v7.8c0 3.1-2.5 5.6-5.6 5.6H8.1c-3.1 0-5.6-2.5-5.6-5.6V8.1c0-3.1 2.5-5.6 5.6-5.6Zm0 3.4c-1.2 0-2.2 1-2.2 2.2v7.8c0 1.2 1 2.2 2.2 2.2h7.8c1.2 0 2.2-1 2.2-2.2V8.1c0-1.2-1-2.2-2.2-2.2H8.1Zm3.9 2.5a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2Zm0 2.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm4.1-2.9a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" />
    </svg>
  ),
  LinkedIn: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.5 8.8H2.9v12.3h3.6V8.8ZM4.7 2.9a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm9 11.1c0-1.5.7-2.4 2-2.4 1.2 0 1.8.8 1.8 2.4v7.1h3.6v-7.7c0-3.3-1.8-4.9-4.3-4.9-2 0-2.9 1.1-3.4 1.9V8.8H10v12.3h3.7V14Z" />
    </svg>
  ),
};

export function SocialLinks({ variant = "footer" }) {
  return (
    <div className={`social-links social-links-${variant}`}>
      {socialLinks.map((item) => (
        <a
          className="social-link"
          href={item.url}
          key={item.platform}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open OXYDIARY on ${item.platform}`}
          title={item.platform}
        >
          {icons[item.platform]}
        </a>
      ))}
    </div>
  );
}
