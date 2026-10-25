/* ===== All editable content lives here ===== */
export const site = {
  email: "chaitrarajashekar2023@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/chaitra-r-57178328a/",
    behance: "https://www.behance.net/chaitrar3099",
    behanceProjects: "https://www.behance.net/chaitrar3099/projects",
  },
};

const F = (id, q = "") => `https://framerusercontent.com/images/${id}${q}`;
const B = (p) => `https://mir-s3-cdn-cf.behance.net/projects/404/${p}`;

/* key -> { file (saved by `npm run fetch-assets` into public/assets/images), remote (used until then) } */
export const images = {
  portrait: { file: "portrait.jpg", remote: F("BV821BdHgSjwCdr8WEq1t4Iko.jpg", "?width=576&height=591") },
  website: { file: "expertise-website.jpg", remote: F("ENSJj8ZT4TbTwJPFPfTfg1t5j1s.jpg", "?scale-down-to=1024") },
  figma: { file: "expertise-figma.jpg", remote: F("qmMYJzj3LjSQ4EnJpMYdPnUQA.jpg", "?width=1600") },
  banner: { file: "contact-banner.png", remote: F("xBAUPKsCMkKmMr9f7RGwFAO6qwg.png", "?scale-down-to=2048") },
  tiffin: { file: "tiffin-deal.png", remote: B("faea69255625293.Y3JvcCwxMzk3LDEwOTMsMjQsMA.png") },
  smejunction: { file: "sme-junction.png", remote: B("af9405234650997.Y3JvcCwyNDY3LDE5MzAsNzY5LDA.png") },
  smepulse: { file: "sme-pulse.png", remote: B("227ff4250948751.Y3JvcCwxNDAwLDEwOTUsMCw2MTM.png") },
  interiorwalaa: { file: "interiorwalaa.jpg", remote: B("e145c0233130483.68b02c2ad8637.jpg") },
  saha: { file: "saha-jewellers.png", remote: B("3473b2250999939.Y3JvcCwxMTUyLDkwMSwwLDg.png") },
  kenshi: { file: "kenshi-labs.png", remote: B("ff7f66253003347.Y3JvcCwxMTQ1LDg5NSwxOSww.png") },
};

/* Behance case studies (individual project pages). Order = order on the site. `desc` is only read by screen readers (tiles show images only, like the original). */
export const projects = [
  { id: "sme-junction", title: "SME Junction", img: "smejunction", desc: "B2B procurement management — simplifying procurement workflows and helping business users manage purchasing tasks more effectively.", url: "https://www.behance.net/gallery/234650997/SME-Junction-B2B-Procurement-Management-Case-Study" },
  { id: "tiffin-deal", title: "Tiffin Deal", img: "tiffin", desc: "Meal subscription platform — designing connected experiences for customers, cloud kitchens, and delivery partners.", url: "https://www.behance.net/gallery/255625293/Tiffin-Deal-Cloud-Kitchen-Delivery-App-Case-Study" },
  { id: "sme-pulse", title: "SME Pulse", img: "smepulse", desc: "Business news app — exploring ways to make relevant business news easier to discover, scan, and consume.", url: "https://www.behance.net/gallery/250948751/SME-Pulse-Business-News-App-UX-Case-Study" },
  { id: "interiorwalaa", title: "Interiorwalaa Website", img: "interiorwalaa", desc: "", url: "https://www.behance.net/gallery/233130483/Interiorwalaa-Website" },
  { id: "kenshi-labs", title: "Kenshi Labs Portfolio Website", img: "kenshi", desc: "", url: "https://www.behance.net/gallery/253003347/Kenshi-Labs-Portfolio-Website" },
  { id: "saha-jewellers", title: "Saha Jewellers", img: "saha", desc: "", url: "https://www.behance.net/gallery/250999939/Saha-Jewellers-Luxury-Jewellery-Website-UIUX-Design" },
];

export const nav = [["Home", "#hero-section"], ["About", "#profile"], ["Expertise", "#expertise"], ["Projects", "#projects"], ["Contact", "#connect"]];

export const about = {
  label: "About Me", a: "Designing With Purpose,", b: "Building With Empathy",
  body: [
    "I’m Chaitra R, a UI/UX and Product Designer based in Bangalore, India. I enjoy turning complex problems into clear, meaningful digital experiences through research, structured thinking, and thoughtful interaction design.",
    "My approach combines user empathy, usability, visual design, and business understanding to create experiences that are intuitive, consistent, and accessible. I enjoy collaborating with cross-functional teams, exploring ideas, and refining solutions through feedback and iteration.",
  ],
  skills: ["Product Design", "UX Research", "User Flows", "Information Architecture", "Wireframing", "Prototyping", "UI Design", "Design Systems", "Interaction Design", "Responsive Design", "Usability Testing", "Figma"],
};
export const journey = {
  title: "My Design Journey",
  sub: "Building thoughtful digital experiences through collaboration, exploration, and continuous learning.",
  items: [
    ["UI/UX Designer", "Kenshi Labs", "2024 – 2026", "Designing user-centered digital experiences, translating requirements into intuitive interfaces, and collaborating with stakeholders to deliver consistent design solutions."],
    ["UI/UX Design Intern", "PurpleData", "2024", "Developed foundational skills in user interface design, wireframing, prototyping, and translating product requirements into usable digital experiences."],
    ["UI/UX Design Intern", "Avorise Tech Solutions", "2023", "Gained practical experience in UI/UX design fundamentals, visual hierarchy, responsive layouts, and creating clear, user-friendly interfaces."],
  ],
};
export const process = {
  label: "How it works", a: "My Approach to", b: "Product Design",
  sub: "A structured, iterative process that keeps user needs and product goals at the center.",
  closing: "Thoughtful design is a continuous process of learning, testing, and improving.",
  steps: [
    ["Understand", "I explore the problem, user needs, business objectives, and existing challenges to define what success should look like.", "touch"],
    ["Define", "I organize insights, identify pain points, map user journeys, and prioritize opportunities to solve the most important problems.", "list"],
    ["Design & Validate", "I explore solutions through user flows, wireframes, prototypes, and high-fidelity interfaces, refining ideas through feedback and usability evaluation.", "wand"],
    ["Deliver & Iterate", "I build consistent design systems, prepare clear handoffs, collaborate with developers, and iterate based on feedback and product needs.", "rocket"],
  ],
};
/* img: which existing visual each card reuses (same image treatment as the original Expertise cards) */
export const expertise = {
  label: "Expertise", a: "My Product Design", b: "Expertise",
  sub: "Turning user needs and product requirements into intuitive, scalable digital experiences.",
  cards: [
    { t: "UX Research & Problem Discovery", d: "Understanding users, identifying pain points, and translating observations into clear design opportunities." },
    { t: "User Flows & Information Architecture", d: "Structuring content and defining intuitive journeys that help users complete tasks with clarity and minimal friction." },
    { t: "Wireframing & Prototyping", d: "Exploring concepts, communicating ideas, and validating interactions before moving into detailed UI design.", img: "figma" },
    { t: "UI Design & Design Systems", d: "Creating consistent, accessible interfaces with purposeful visual hierarchy, reusable components, and clear interaction patterns.", img: "website" },
    { t: "Interaction & Responsive Design", d: "Designing meaningful interactions and adaptable layouts that deliver a consistent experience across devices." },
    { t: "Developer Handoff & Collaboration", d: "Preparing organized design files, documenting interface behavior, and collaborating with cross-functional teams throughout implementation." },
  ],
};
export const workHead = { label: "Selected Work", a: "Projects That", b: "Solve Real Problems", sub: "A selection of product design projects exploring user challenges, product workflows, and thoughtful digital solutions." };
export const philosophy = {
  label: "Design Philosophy", a: "What Guides My", b: "Design Decisions",
  sub: "Good product design is more than visual polish. It makes tasks easier, decisions clearer, and experiences more useful.",
  pairs: [
    [["User-Centered Decisions", "I prioritize user needs and real problems over assumptions or visual trends."], ["Design Without Context", "Interfaces built on assumptions can create friction and fail to address the actual problem."]],
    [["Scalable Solutions", "I value consistent components and thoughtful design systems that support future product growth."], ["Inconsistent Experiences", "Disconnected patterns can make products harder to learn, use, and maintain."]],
    [["Collaboration & Feedback", "I value open communication, shared ownership, and feedback throughout the design process."], ["Designing in Isolation", "Limited collaboration can create gaps between user needs, design decisions, and implementation."]],
    [["Purposeful Simplicity", "I aim to make complex workflows feel clear, predictable, and easy to navigate."], ["Unnecessary Complexity", "Overloaded interfaces and unclear interactions make everyday tasks harder than they need to be."]],
  ],
};
/* Non-numerical statements only (no unverifiable metrics/ratings). Wording from the Behance profile bio. */
export const bring = {
  label: "Strengths", title: "What I Bring to a Product Team",
  sub: "A thoughtful approach to problem-solving, collaborative design, and continuous improvement.",
  stats: [["Enterprise", "& consumer products"], ["Web", "& mobile platforms"], ["Figma", "Primary design tool"]],
  cards: [
    ["User Empathy", "I look beyond the interface to understand what users need, where they struggle, and how design can help.", "heart"],
    ["Structured Thinking", "I break down complex problems into clear user flows, understandable information, and practical design solutions.", "layers"],
    ["Attention to Detail", "I care about consistency, accessibility, interaction states, and the small details that improve usability.", "eye"],
    ["Collaboration", "I value feedback, communicate design decisions clearly, and work toward shared product goals.", "chat"],
  ],
};
export const faqData = {
  label: "FAQ", a: "A Few Things", b: "About My Work",
  sub: "A little more about my approach, skills, and the kind of opportunities I’m looking for.",
  items: [
    ["What kind of role am I looking for?", "I’m looking for a full-time Product Designer or UI/UX Designer role where I can contribute to meaningful product challenges and collaborate with a multidisciplinary team."],
    ["What is my design approach?", "I focus on understanding the problem, exploring user needs, structuring intuitive flows, designing clear interfaces, and iterating based on feedback."],
    ["What tools do I use?", "I primarily use Figma for interface design, wireframing, prototyping, and design systems, along with other tools that support my workflow."],
    ["What types of products have I worked on?", "My portfolio includes projects across B2B procurement, business news, meal subscriptions, and pet care, covering different user needs and product workflows."],
    ["How do I collaborate with developers and stakeholders?", "I communicate design decisions, organize design files, clarify interaction behavior, and incorporate feedback to help align design intent with implementation."],
    ["Where can recruiters view my work?", "My portfolio showcases selected projects, and my Behance profile provides access to the corresponding case studies."],
  ],
};
export const contact = {
  label: "Let's Connect", a: "Let’s", b: "Connect",
  sub: "I’m interested in full-time Product Designer and UI/UX Designer opportunities where I can solve meaningful problems, collaborate with product teams, and create better digital experiences.",
  options: [
    ["Behance", "View my design work", "https://www.behance.net/chaitrar3099", "be"],
    ["LinkedIn", "Connect professionally", "https://www.linkedin.com/in/chaitra-r-57178328a/", "in"],
    ["Email", "Get in touch", "mailto:chaitrarajashekar2023@gmail.com", "mail"],
  ],
};
export const footer = { name: "Chaitra R", role: "Product Designer | UI/UX Designer", line: "Designing thoughtful digital experiences, one problem at a time." };
