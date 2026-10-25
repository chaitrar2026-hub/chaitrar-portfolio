import { Badge, Btn, Icon, Img, Title } from "./ui";
import { about, expertise } from "../data/site";

const half = Math.ceil(about.skills.length / 2);
const Row = ({ items, rev }) => (
  <div className="marquee" aria-hidden="true"><div className={`marquee-track ${rev ? "rev" : ""}`}>
    {[...items, ...items, ...items, ...items].map((t, i) => <span className="pill" key={i}><Icon n="box" size={16} />{t}</span>)}
  </div></div>
);
const Ex = ({ e }) => (
  <article className="card ex reveal"><h3><Icon n="box" size={20} />{e.t}</h3><p>{e.d}</p>{e.img && <Img k={e.img} alt="" className="ex-img" />}</article>
);

export default function Expertise() {
  const c = expertise.cards;
  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="head split reveal"><div><Badge>{expertise.label}</Badge><Title a={expertise.a} b={expertise.b} /><p className="sub">{expertise.sub}</p></div><Btn href="#connect" kind="light">Connect With Me</Btn></div>
        <div className="ex-grid"><div className="col">{[0, 2, 4].map((i) => <Ex key={i} e={c[i]} />)}</div><div className="col">{[1, 3, 5].map((i) => <Ex key={i} e={c[i]} />)}</div></div>
      </div>
      <div className="marquees reveal"><Row items={about.skills.slice(0, half)} /><Row items={about.skills.slice(half)} rev /></div>
    </section>
  );
}
