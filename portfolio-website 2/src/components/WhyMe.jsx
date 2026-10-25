import { Badge, Icon, Title } from "./ui";
import { philosophy } from "../data/site";

export default function WhyMe() {
  return (
    <section className="section">
      <div className="container">
        <div className="head center reveal"><Badge>{philosophy.label}</Badge><Title a={philosophy.a} b={philosophy.b} /><p className="sub">{philosophy.sub}</p></div>
        <div className="compare card reveal">
          {philosophy.pairs.map(([g, bad]) => (
            <div className="pair" key={g[0]}>
              {[[g, "check", "good"], [bad, "x", "bad"]].map(([[t, d], ic, cls]) => (
                <div className={`cmp ${cls}`} key={t}><span className="cmp-ic"><Icon n={ic} size={14} /></span><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
