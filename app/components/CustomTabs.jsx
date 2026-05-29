"use client";

import { useState } from "react";

const panels = {
  cml: ["wide", "short white", "", "green", "blush"],
  lid: ["cap", "cap", "cap", "wide", "short"],
  logo: ["", "short", "wide", "green", "white"],
};

export function CustomTabs() {
  const [active, setActive] = useState("cml");

  return (
    <>
      <div className="tabs" role="tablist">
        <button
          className={`tab-button ${active === "cml" ? "is-active" : ""}`}
          type="button"
          onClick={() => setActive("cml")}
        >
          CML
        </button>
        <button
          className={`tab-button ${active === "lid" ? "is-active" : ""}`}
          type="button"
          onClick={() => setActive("lid")}
        >
          Lid Design
        </button>
        <button
          className={`tab-button ${active === "logo" ? "is-active" : ""}`}
          type="button"
          onClick={() => setActive("logo")}
        >
          Logo & Branding
        </button>
      </div>
      <div className="custom-row">
        {panels[active].map((item, index) => (
          <div className="custom-item" key={`${active}-${index}`}>
            {item === "cap" ? (
              <span className="mini-cap" />
            ) : (
              <span className={`mini-product ${item}`} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
