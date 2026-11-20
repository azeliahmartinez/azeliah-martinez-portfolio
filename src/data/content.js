// All the text on the site lives here, so you can update content
// without touching the components.

export const profile = {
  firstName: "Azeliah",
  lastName: "Martinez",
  email: "azeliahm@gmail.com",
  phone: "0969 620 7371",
  linkedin: "https://www.linkedin.com/in/azeliah-martinez-307358319",
  linkedinLabel: "linkedin.com/in/azeliah-martinez-307358319",
  resume: "/resume.pdf",
  intro: "Software developer. I build automations and apps that real teams use every day.",
  sub: "Computer Science, Software Technology at De La Salle University. Most recently on Henkel's automation team, where I turned slow, manual work into tools that run on their own.",
  status: ["open to full-time roles", "Metro Manila, on-site or remote"],
};

export const sections = [
  { id: "home", file: "readme.md", icon: "~" },
  { id: "experience", file: "experience/", icon: "▸" },
  { id: "projects", file: "projects/", icon: "▸" },
  { id: "skills", file: "skills.json", icon: "{}" },
  { id: "contact", file: "contact.txt", icon: "@" },
];

export const experience = [
  {
    when: "2026.05 – 2026.11",
    note: "6 months",
    role: "Automation Intern, Source-to-Pay",
    org: "Henkel Asia Pacific Services Centre, Automation & Q&CI Team",
    body: "I joined planning to stay six weeks and stayed six months. I gathered requirements from the people doing the manual work, then designed, built, tested and documented tools to take that work off their plates: Python automations for email and invoice processing, a Power Apps solution for downpayment approvals, and a SharePoint hub for the team's tools.",
    impact: [
      { n: "~70%", text: "less time per invoice, from about 10 minutes to 3, after automating supplier invoice sorting" },
      { n: "700 min", text: "saved every month (0.09 FTE), validated through the company's continuous improvement review" },
      { n: "5 regions", text: "testing the downpayment app in global UAT: APAC, IMEA, LATAM, North America and the EU" },
    ],
  },
  {
    when: "2025.09 – 2026.04",
    note: "thesis",
    role: "Up2Face, undergraduate thesis",
    org: "De La Salle University, team of four developers",
    body: "A computer vision system that reads student engagement from recorded learning sessions. More in projects below.",
  },
  {
    when: "2022 – 2026",
    note: "graduating 2027",
    role: "BS Computer Science, Software Technology",
    org: "De La Salle University, Manila",
    body: "Degree requirements completed. Formal graduation expected February to March 2027.",
  },
];

// kinds: automation, web, ml, other
export const featured = [
  {
    id: "p-up2face",
    title: "Up2Face",
    meta: "Undergraduate thesis, 2025–2026",
    kinds: ["ml", "web"],
    video: "/up2face-video.mp4",
    desc: "Detects how engaged students are in recorded learning sessions by reading facial expressions and upper-body gestures.",
    mine: "I was one of four developers. I worked on the application workflow and on turning model output into something people can read: dashboards, key frames and downloadable results.",
    stack: ["Python", "MediaPipe", "Random Forest", "Node.js", "JavaScript"],
  },
  {
    id: "p-dp",
    title: "Down Payments App",
    meta: "Henkel, 2026",
    kinds: ["automation", "web"],
    video: "/dp-app-demo.mp4",
    desc: "A Power Apps application for requesting, approving and tracking downpayments, backed by SharePoint. Approved requests generate their documents and go straight to the invoice processing system.",
    mine: "I built the review-before-submit step, an approval path that sends multiple attachments at once, and a faster request search.",
    tag: "in global UAT",
    stack: ["Power Apps", "Power Fx", "SharePoint"],
  },
  {
    id: "p-cofeed",
    title: "Cofeed",
    meta: "Web platform",
    kinds: ["web"],
    video: "/cofeed-video.mp4",
    desc: "A responsive site for finding and reviewing study spaces, with user profiles and search.",
    mine: "I worked on the interface and core features, including authentication, authorization and audit trails so every action can be traced.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "p-apoamf",
    title: "APOAMF Profiling Database",
    meta: "Team project, front-end developer",
    kinds: ["web"],
    video: "/apoamf-video.mp4",
    desc: "A web system for managing household and resident records in the Pasig Manggahan Floodway community.",
    mine: "I built the front end: the pages and forms for viewing and managing records. I also tested it for usability and data accuracy.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const automations = [
  {
    id: "p-pdf",
    title: "Outlook-to-PDF",
    kinds: ["automation"],
    pipe: ["inbox", "watcher", ".pdf"],
    desc: "Drop an email into a folder and it saves itself as a PDF, images included, named by date and subject.",
    result: "No clicks after the drag. Ships as a one-click executable on free, open-source parts.",
    stack: ["Python", "pywin32"],
  },
  {
    id: "p-invoice",
    title: "Supplier invoice sorting",
    kinds: ["automation"],
    pipe: ["invoice", "reorder", "draft"],
    desc: "Recognizes the supplier, finds the key customs page in each invoice, moves it to the front, renames the file and batches eight invoices per draft email.",
    result: "About 10 minutes down to 3 per invoice. 0.09 FTE saved.",
    stack: ["Python", "PDF", "Outlook"],
  },
  {
    id: "p-hub",
    title: "STP DigiTech hub",
    kinds: ["automation"],
    pipe: ["tools", "stories", "guides"],
    desc: "A SharePoint site that puts the department's automation tools, success stories and learning resources in one place.",
    result: "One link instead of a dozen scattered folders.",
    stack: ["SharePoint"],
  },
];

export const others = [
  {
    title: "Paws & Passion",
    kinds: ["other"],
    desc: "Tested and fixed booking, pet selection and form flows in a mobile app.",
    label: "QA, bug fixing",
  },
  {
    title: "Thynk Unlimited",
    kinds: ["other"],
    desc: "A Figma prototype that helps students find calm places nearby, using noise, traffic and air quality data.",
    label: "UI/UX",
  },
  {
    title: "Lash Lux Studio Database",
    kinds: ["other", "web"],
    desc: "A salon database for services, scheduling, staff, clients and loyalty, with a JavaScript interface.",
    label: "SQL",
  },
];

export const filters = [
  { key: "all", label: "All" },
  { key: "automation", label: "Automation" },
  { key: "web", label: "Web" },
  { key: "ml", label: "ML" },
  { key: "other", label: "Other" },
];

export const skills = {
  languages: ["Python", "Java", "C", "JavaScript", "SQL"],
  automation: ["Python scripting", "Power Apps", "SharePoint", "Outlook & PDF automation"],
  web: ["HTML", "CSS", "React", "Node.js", "database design"],
  ml: ["computer vision", "MediaPipe", "Random Forest", "Jupyter"],
  delivery: ["debugging", "UAT support", "test case design", "documentation", "Agile"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
};