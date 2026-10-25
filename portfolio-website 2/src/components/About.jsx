import { Badge, Btn, Icon, Img, Title } from "./ui";
import { about, footer, journey, site } from "../data/site";

export default function About() {
  return (
    <section id="profile" className="section about">
      <div className="container">
        <div className="head center reveal"><Badge>{about.label}</Badge><Title a={about.a} b={about.b} /></div>
        <div className="about-grid">
          <div className="card profile reveal">
            <Img k="portrait" alt="Portrait of Chaitra R" className="portrait" />
            <h3>Hello I am <span className="muted-word">Chaitra R</span></h3>
            <p className="small">UI/UX&nbsp; Designer Based in Bangalore.</p>
            <div className="social">
              <a href={site.links.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance"><Icon n="be" /></a>
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon n="in" /></a>
              <a href={`mailto:${site.email}`} aria-label="Email"><Icon n="mail" /></a>
            </div>
            <Btn href="#connect" kind="dark wide">Connect With Me</Btn>
          </div>
          <div className="about-right reveal">
            <div className="lead">{about.body.map((t) => <p key={t}>{t}</p>)}</div>
            <ul className="tags">{about.skills.map((s) => <li key={s}>{s}</li>)}</ul>
            <div className="journey-head"><h3>{journey.title}</h3><p>{journey.sub}</p></div>
            <div className="exp">{journey.items.map(([r, c, d, desc]) => (
              <div key={c} className="exp-item"><div className="exp-row"><span>{r}</span><span>{c}</span><span>{d}</span></div><p className="exp-desc">{desc}</p></div>
            ))}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
