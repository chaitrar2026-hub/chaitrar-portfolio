import { useRef } from "react";
import { Badge, CtaPair, Icon, Img } from "./ui";
import { projects } from "../data/site";

export function Tile({ p, className = "" }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <a ref={ref} onMouseMove={move} className={`tile ${className}`} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} — view case study on Behance (opens in a new tab)`}>
      <div className="tile-img"><Img k={p.img} alt={`${p.title} cover`} /></div>
      <span className="tile-arrow"><Icon n="arrow" /></span>
      {p.desc && <span className="sr-only">{p.desc}</span>}
      <span className="cursor-pill" aria-hidden="true">View project</span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="hero-section" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-in d1"><Badge>Product Designer | UI/UX Designer</Badge></div>
          <h1 className="hero-in d2">Chaitra R <a className="round-arrow" href="#profile" aria-label="Scroll to profile"><Icon n="arrow" /></a></h1>
          <p className="hero-in d3">I design intuitive digital experiences that turn complex problems into simple, meaningful solutions!</p>
          <div className="hero-in d4"><CtaPair hero /></div>
        </div>
        <div className="hero-cards" aria-hidden="false">
          <div className="qcard q1">" Every great design begins with an even better story "</div>
          <div className="qcard q2">“Design is not just what it looks like and feels like. Design is how it works.”</div>
        </div>
      </div>
      <div className="container tiles-2 hero-in d5">
        {projects.slice(0, 2).map((p) => <Tile key={p.id} p={p} className="hero-tile" />)}
      </div>
      <a className="scroll-down" href="#profile" aria-label="Scroll down"><Icon n="down" /></a>
    </section>
  );
}
