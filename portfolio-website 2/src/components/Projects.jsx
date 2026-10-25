import { Badge, Btn, Icon } from "./ui";
import { Tile } from "./Hero";
import { projects, site, workHead } from "../data/site";

/* two columns, alternating existing tile proportions (same classes as before) */
const cols = [[[0, "t-a"], [2, "t-c"], [4, "t-c"]], [[1, "t-b"], [3, "t-d"], [5, "t-b"]]];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="head split reveal">
          <div><Badge>{workHead.label}</Badge>
            <h2 className="title">{workHead.a} <span className="muted-word">{workHead.b}</span> <a className="round-arrow sm" href={site.links.behanceProjects} target="_blank" rel="noopener noreferrer" aria-label="View all projects on Behance"><Icon n="arrow" size={16} /></a></h2>
            <p className="sub">{workHead.sub}</p></div>
          <div className="cta-row"><Btn href={site.links.behanceProjects} external>View All Projects</Btn></div>
        </div>
        <div className="bento">
          {cols.map((col, ci) => (
            <div className="col" key={ci}>{col.map(([i, cls]) => <div className="reveal" key={projects[i].id}><Tile p={projects[i]} className={cls} /></div>)}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
