import { useState } from "react";
import { Badge, CtaPair, Icon, Title } from "./ui";
import { faqData } from "../data/site";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container faq-grid">
        <div className="reveal">
          <Badge>{faqData.label}</Badge><Title a={faqData.a} b={faqData.b} /><p className="sub">{faqData.sub}</p>
          <CtaPair />
        </div>
        <div className="acc reveal">
          {faqData.items.map(([q, a], i) => (
            <div className={`acc-item ${open === i ? "open" : ""}`} key={q}>
              <h3><button id={`q${i}`} aria-expanded={open === i} aria-controls={`a${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q}</span><span className="acc-ic"><Icon n={open === i ? "x" : "plus"} size={16} /></span></button></h3>
              <div className="acc-body" id={`a${i}`} role="region" aria-labelledby={`q${i}`}><div><p>{a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
