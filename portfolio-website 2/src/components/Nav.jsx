import { useEffect, useState } from "react";
import { nav } from "../data/site";
import { Logo } from "./ui";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = nav.map(([, h]) => h.slice(1));
    const on = () => {
      const y = window.scrollY + window.innerHeight * 0.4; let cur = "";
      ids.forEach((id) => { const el = document.getElementById(id); if (el && el.offsetTop <= y) cur = id; });
      setActive(cur);
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className="nav-wrap">
      <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
        <a href="#hero-section" className="nav-logo" aria-label="Home"><Logo /></a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="nav-links" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <ul id="nav-links">
          {nav.map(([l, h]) => (
            <li key={l}><a href={h} className={active === h.slice(1) ? "active" : ""} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
