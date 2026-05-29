export function HeroProducts() {
  return (
    <div className="product-stage" aria-hidden="true">
      <div className="mug" />
      <div className="tumbler" />
      <div className="bottle green" />
      <div className="bottle" />
      <div className="bottle steel" />
      <div className="bottle blush" />
    </div>
  );
}

export function MiniProducts({ type = "bottles" }) {
  const content = {
    bottles: (
      <>
        <span className="mini-product" />
        <span className="mini-product green" />
      </>
    ),
    tumblers: (
      <>
        <span className="mini-product short" />
        <span className="mini-product short white" />
      </>
    ),
    mugs: <span className="mini-product wide" />,
    kids: (
      <>
        <span className="mini-product blush" />
        <span className="mini-product" />
      </>
    ),
    accessories: (
      <>
        <span className="mini-cap" />
        <span className="mini-cap" />
        <span className="mini-cap" />
      </>
    ),
  };

  return <div className="product-visual">{content[type]}</div>;
}
