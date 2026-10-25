import { Badge, CtaPair, Icon, Title } from "./ui";
import { process } from "../data/site";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container head center reveal"><Badge>{process.label}</Badge><Title a={process.a} b={process.b} /><p className="sub">{process.sub}</p></div>
      <div className="process-row reveal" tabIndex={0} role="region" aria-label="Design process steps (scrollable)">
        {process.steps.map(([t, d, ic], i) => (
          <article className="card step" key={t}>
            <span className="step-ic"><Icon n={ic} size={22} /></span><span className="step-n">{i + 1}</span>
            <h3>{t}</h3><p>{d}</p><div className="step-foot">Step {i + 1}</div>
          </article>
        ))}
      </div>
      <div className="container"><div className="with-you card reveal">
        <div><h4>{process.closing}</h4></div><CtaPair />
      </div></div>
    </section>
  );
}
