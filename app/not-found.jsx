import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>This product or page could not be found.</h1>
          <p>
            The URL may have changed during product verification. Browse the
            verified collections or send your sourcing brief for a recommendation.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/products">
              Browse Products
            </Link>
            <Link className="btn btn-outline" href="/contact">
              Request a Recommendation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
