"use client";

import { useState } from "react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <>
      <form className="quote-form" onSubmit={handleSubmit}>
        <input className="field" name="name" placeholder="Your Name" required />
        <input className="field" name="company" placeholder="Company Name" required />
        <input className="field" type="email" name="email" placeholder="Your Email" required />
        <input className="field" name="phone" placeholder="Tel/WhatsApp" />
        <select className="field" name="category" required defaultValue="">
          <option value="">Product Category</option>
          <option>Insulated Bottles</option>
          <option>Tumblers</option>
          <option>Coffee Mugs</option>
          <option>Kids Bottles</option>
          <option>Accessories</option>
        </select>
        <input className="field" name="quantity" placeholder="Quantity (PCS)" required />
        <textarea className="field full" name="message" placeholder="Tell us your requirements..." />
        <button className="btn btn-primary" type="submit">
          Submit Now
        </button>
      </form>
      <div className={`form-status ${sent ? "is-visible" : ""}`}>
        Thank you. Our export team will review your request and respond within 24 hours.
      </div>
    </>
  );
}
