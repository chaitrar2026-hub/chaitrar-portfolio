import { Icon, Logo } from "./ui";
import { footer, nav, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer"><div className="container">
      <div className="f-top"><Logo className="big" />
        <div className="social">
          <a href={site.links.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance"><Icon n="be" /></a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon n="in" /></a>
          <a href={`mailto:${site.email}`} aria-label="Email"><Icon n="mail" /></a>
        </div></div>
      <div className="f-id"><b>{footer.name}</b><span>{footer.role}</span><p>{footer.line}</p></div>
      <nav className="f-nav" aria-label="Footer">{nav.map(([l, h]) => <a key={l} href={h}>{l}</a>)}</nav>
      <div className="f-bot"><span>© {new Date().getFullYear()} CR</span><span>Made by Chaitra R &nbsp;·&nbsp; Built with React &amp; Vite</span></div>
    </div></footer>
  );
}
