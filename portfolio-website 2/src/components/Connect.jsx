import { Badge, Icon, Img, Title } from "./ui";
import { contact } from "../data/site";

export default function Connect() {
  return (
    <section id="connect" className="section">
      <div className="container connect card reveal">
        <div>
          <Badge>{contact.label}</Badge><Title a={contact.a} b={contact.b} />
          <p className="sub">{contact.sub}</p>
          <div className="rows">
            {contact.options.map(([t, d, href, ic]) => {
              const ext = href.startsWith("http");
              return (
                <a className="row-link" key={t} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label={`${t} — ${d}`}>
                  <span className="row-ic"><Icon n={ic} /></span>
                  <span><h3>{t}</h3><p>{d}</p></span>
                  <span className="row-go"><Icon n="arrow" /></span>
                </a>
              );
            })}
          </div>
        </div>
        <Img k="banner" alt="Mobile app designs by Chaitra R" className="connect-img" />
      </div>
    </section>
  );
}
