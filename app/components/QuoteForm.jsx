export function QuoteForm() {
  return (
    <form
      className="quote-form"
      action="https://formsubmit.co/shservice@oxylifediary.com"
      method="POST"
    >
      <input type="hidden" name="_subject" value="OXYDIARY Request a Quote" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_autoresponse" value="Thank you. Our export team will review your request and respond within 24 hours." />
      <input className="field" name="Your Name" placeholder="Your Name" required />
      <input className="field" type="email" name="Your Email" placeholder="Your Email" required />
      <input className="field" name="Company Name" placeholder="Company Name" required />
      <input className="field" name="Company Website / URL" placeholder="Company Website / URL" />
      <input className="field" name="Shipping Destination Country" placeholder="Shipping Destination Country" required />
      <input className="field" name="Quantity (PCS)" placeholder="Quantity (PCS)" required />
      <textarea className="field full" name="Requirements" placeholder="Tell us your requirements..." />
      <button className="btn btn-primary" type="submit">
        Submit Now
      </button>
    </form>
  );
}
