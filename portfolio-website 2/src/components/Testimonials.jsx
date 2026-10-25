import { Badge, CtaPair, Icon } from "./ui";
import { bring } from "../data/site";

export default function Testimonials() {
  const list = [...bring.cards, ...bring.cards];
  return (
    <section id="testimonials" className="section">
      <div className="container t-grid">
        <div className="reveal">
          <Badge>{bring.label}</Badge>
          <h2 className="title">{bring.title}</h2>
          <p className="sub">{bring.sub}</p>
          <div className="stats">{bring.stats.map(([n, l]) => <div className="card stat" key={n}><b>{n}</b><span>{l}</span></div>)}</div>
          <CtaPair />
        </div>
        <div className="t-list reveal" role="region" aria-label="Professional strengths">
          <div className="t-track">
            {list.map(([t, d, ic], i) => (
              <figure className="card t-card" key={i} aria-hidden={i >= bring.cards.length}>
                <figcaption><span className="avatar ic"><Icon n={ic} size={22} /></span><div><b>{t}</b></div></figcaption>
                <blockquote>{d}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
