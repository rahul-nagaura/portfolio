export const portfolioData = {
  personal: {
    name: "Rahul Nagaura",
    tagline: "Building products that drive growth & operational efficiency",
    subtitle: "Business Analyst @ Creditq | IIT (ISM) Dhanbad '26",
    email: "rahulnagora88905@gmail.com",
    phone: "+918890903110",
    linkedin: "https://www.linkedin.com/in/rahul-nagaura",
    resumeUrl: "/Rahul_Nagaura_Resume.pdf"
  },
  about: {
    headline: "I SHIP THINGS PEOPLE USE.",
    paragraphs: [
      "Chemical Engineering at IIT (ISM) Dhanbad wasn't my path, so I went looking — side projects, then internships, until product clicked. Building Systems for SME sealed it: I want to turn real problems into things people actually use."
    ],
    cards: [
      { label: "ALUMNI", title: "IIT (ISM) Dhanbad", description: "B.Tech Chemical Engineering, 2026", logo: "/assets/logos/ism.jpg" },
      { label: "CURRENTLY AT", title: "CreditQ", description: "Business Analyst", logo: "/assets/logos/creditq.webp" },
      { label: "FOUNDING MEMBER", title: "Systems for SME", description: "₹90k revenue · 10.9k followers · zero ad spend" },
      { label: "FOCUS", title: "Product Thinking", description: "B2B · Funnels · Automation · Data" },
      { label: "BASED IN", title: "Jaipur, India", description: "" },
      { label: "LOOKING FOR", title: "Product Manager", description: "Available for new roles" },
      { label: "TOOLS", title: "Power BI · SQL · Figma", description: "n8n · Jira · Mixpanel" }
    ]
  },
  experience: [
    {
      role: "Business Analyst",
      company: "CreditQ",
      period: "Jul 2026 – Present",
      location: "Jaipur",
      description: "Bridge between users and engineering at a credit-infrastructure startup. I own requirements end to end — translating user and business needs into Jira tickets, assigning them, and running UAT to make sure what ships works. When users hit bugs, I run root-cause analysis and drive the fix. I also design product flows myself and turn users' manual work into automated processes.",
      tags: ["Requirements", "Jira/UAT", "Root-Cause Analysis", "Flow Design", "Automation"],
      current: true,
      size: "large"
    },
    {
      role: "Product Operations Intern",
      company: "Ascend Capital",
      period: "Jan – Feb 2026",
      location: "Jaipur",
      description: "Designed the sales incentive structure from scratch and built daily metric reporting, then worked with engineering to automate incentive calculation end to end.",
      tags: ["Product Ops", "Reporting", "Process Automation"],
      size: "large"
    },
    {
      role: "Founding Member",
      company: "Systems for SME",
      period: "Feb 2026 – Present",
      location: "Dhanbad",
      description: "Founding member driving growth and the technical build.",
      link: "#projects",
      size: "compact"
    },
    {
      role: "Business Analyst Intern",
      company: "Recruithunt",
      period: "Jun – Sep 2025",
      location: "Remote",
      description: "Automated end-to-end outbound sales pipelines with n8n (LinkedIn, Apollo.io, Gmail), cutting manual effort ~30%, plus market research, feature docs, and prototyping.",
      tags: ["n8n Automation", "Apollo.io", "Prototyping"],
      size: "compact"
    },
    {
      role: "Marketing & Research Intern",
      company: "EvePaper",
      period: "May – Jul 2025",
      location: "Remote",
      description: "Led a 30-member growth team to onboard 116 new users in 3 days, running user and market research to shape early product positioning.",
      tags: ["Team Leadership", "116 users / 3 days", "User Research"],
      size: "compact"
    }
  ],
  projects: [
    {
      title: "OLA Ride Insights",
      subtitle: "Interactive Power BI Dashboard",
      description: "Built an interactive dashboard analyzing 100K+ ride records, visualizing volumes, cancellations, revenue, and ratings with DAX measures for region-specific analysis.",
      tags: ["Power BI", "DAX", "Power Query", "Data Analytics"],
      link: "#",
      featured: true
    },
    {
      title: "Accredian Gamified Product Deck",
      subtitle: "Product Strategy & Design",
      description: "Designed an interactive student dashboard using user personas and feature prioritization to enhance gamification, increasing engagement by 30%.",
      tags: ["User Personas", "GTM Strategy", "Feature Prioritization", "Gamification"],
      link: "#",
      featured: true
    }
  ],
  moreProjects: [
    {
      id: "india-election-2024",
      title: "India Election<br/>2024",
      description: "A 6-page interactive dashboard analyzing India's 2024 General Election — seat distribution, alliance performance, and constituency-level drill-down.",
      tags: ["POWER BI", "DATA VIZ"],
      links: [
        { label: "View on GitHub", url: "https://github.com/rahul-nagaura/india-general-election-results-2024" }
      ],
      content: `<p>An interactive 6-page Power BI dashboard analyzing the 2024 Indian General Election. It covers national seat distribution, NDA vs I.N.D.I.A. alliance performance, state-wise breakdowns, and constituency-level drill-down — built to turn a large public dataset into a tool anyone can explore self-serve.</p>
<br/>
<p><strong>Built with:</strong> Power BI, Power Query (data cleaning & transformation), DAX (measures & calculated fields), Excel/CSV as the data source.</p>
<br/>
<p><strong>Highlights:</strong></p>
<ul class="list-disc pl-5 mt-2 space-y-1">
  <li>6 linked dashboards with a landing-page navigation hub</li>
  <li>State and constituency drill-through</li>
  <li>Export-to-Excel and show-all-data for self-serve exploration</li>
  <li>Dynamic state selector with alliance KPIs</li>
</ul>
<br/>
<p><strong>What the data shows:</strong></p>
<ul class="list-disc pl-5 mt-2 space-y-1 text-black/60 dark:text-gray-400">
  <li>[Placeholder for finding 1]</li>
  <li>[Placeholder for finding 2]</li>
  <li>[Placeholder for finding 3]</li>
</ul>`,
      images: [
        { url: "/projects/india-election/overview.png", caption: "Overview Analysis Dashboard" },
        { url: "/projects/india-election/state-demographics.png", caption: "State Demographics Map View" },
        { url: "/projects/india-election/constituency.png", caption: "Constituency Drill-Down Analysis" }
      ]
    },
    {
      id: "project-beta",
      title: "Project Beta",
      description: "Another placeholder project for testing the grid layout and routing.",
      tags: ["Python", "Data", "Pandas"],
      links: [
        { label: "PDF Deck", url: "#" }
      ],
      content: "Detailed insights into Project Beta and how the data was aggregated and analyzed to provide meaningful metrics.",
      images: []
    },
    {
      id: "project-gamma",
      title: "Project Gamma",
      description: "Testing the third card in the mobile row.",
      tags: ["Design", "Figma"],
      links: [],
      content: "Design teardown for Project Gamma.",
      images: []
    },
    {
      id: "project-delta",
      title: "Project Delta",
      description: "This should be hidden on mobile by default.",
      tags: ["Frontend"],
      links: [],
      content: "Frontend architecture details.",
      images: []
    },
    {
      id: "project-epsilon",
      title: "Project Epsilon",
      description: "Testing desktop overflow.",
      tags: ["Backend", "API"],
      links: [],
      content: "Backend API design.",
      images: []
    }
  ],
  skills: {
    technical: ["SQL", "Python", "HTML", "C++", "Power BI", "Adobe Analytics", "Mixpanel", "Figma", "Apollo.io", "Excel/Sheets"],
    product: ["User Personas", "GTM Strategy", "Pricing Strategy", "P&L Analysis", "Root Cause Analysis", "Stakeholder Management", "Data-Driven Decisions", "Wireframing", "A/B Testing", "Funnel Analysis"]
  },
  certifications: [
    { title: "McKinsey Forward Program", issuer: "McKinsey & Company", date: "Dec 2025" },
    { title: "AI For Product Manager", issuer: "Certified", date: "2025" },
    { title: "Product Prioritization (PPC)", issuer: "Micro-Certification", date: "2025" },
    { title: "SQL Certification", issuer: "HackerRank", date: "2025" }
  ],
  leadership: [
    { title: "Co-Head of Marketing & Promotion", org: "Srijan'25 — East India's largest socio-cultural fest" },
    { title: "Organizer", org: "IIT ISM Hackfest 2024 & Concetto'23 (Tech-fest)" }
  ]
};
