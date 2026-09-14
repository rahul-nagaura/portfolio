import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ArrowUpRight, ArrowLeft, ExternalLink, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
  {
    id: "sme",
    title: "Systems for SME",
    roleLine: "Founding Member — Growth & Product/Tech",
    hook: "Built the funnel and product that turned a cold audience into ₹90k in revenue — 10.9k followers, zero ad spend.",
    tags: ["Growth", "Funnel Design", "Product/Tech"],
    links: [
      { label: "Live site", url: "https://system-for-sm-es.vercel.app/", icon: ExternalLink },
      { label: "Instagram", url: "https://www.instagram.com/systems_for_sme/", icon: Instagram },
      { label: "BML Calculator", url: "https://system-for-sm-es.vercel.app/bml", icon: ExternalLink }
    ],
    content: {
      context: "Systems for SME helps Indian SME owners escape the \"founder's trap\" — businesses too dependent on the owner to run without them. Raghav leads consulting and domain expertise; I joined as founding member to own the growth engine and full technical build. Goal: turn cold strangers into paying clients with no ad budget.",
      problem: "No audience, no funnel, no ad money. We needed a repeatable path from \"never heard of us\" to \"booked and paid,\" running entirely on organic reach and a conversion layer good enough to close without a sales team.",
      role: "As founding member I owned three things end to end — growing the Instagram audience, designing the funnel, and building the product: the landing page, booking flow, and a custom BML (Business Maturity Level) Calculator, a 5-minute diagnostic scoring how owner-dependent a business is.",
      process: [
        "Grew Instagram to 10.9k verified followers, zero ad spend, using problem-driven Hinglish short-form content matched to how SME owners talk. Structured the profile with a deliberate onboarding path (Start Here → Systems → Wins → Work With Us).",
        "Key decision: pointed the Instagram bio link at the BML Calculator, not the sales page. The diagnostic became the front door — it qualifies leads and creates the \"aha\" that drives bookings.",
        "Built the landing page with full sales architecture (problem → solution → value stack → objection handling → guarantee → social proof) and a ₹2,999 booking flow, localized to the SME buyer."
      ],
      outcome: [
        "10.9k organic followers, ₹0 ad spend, verified account.",
        "₹90k revenue over ~3–6 months, from a mix of paid strategy sessions and product/idea sales — all via the organic funnel.",
        "Analytics validated the bet: 149 of 155 visitors landed on /bml in a 30-day window. Instagram drove the majority of traffic."
      ],
      reflection: "The lowest-pressure page converted best — leading with a free diagnostic instead of a sales pitch pulled higher-intent people deeper. Next step would be instrumenting the funnel end to end (BML completion → booking rate) to find and fix the biggest drop-off."
    },
    images: {
      thumb: "/assets/sme/reel_views.png",
      ig: "/assets/sme/ig_profile.png",
      bml: "/assets/sme/bml.png",
      hero: "/assets/sme/hero.png",
      analytics: "/assets/sme/analytics.png"
    }
  },
  {
    id: "ola",
    title: "OLA Ride Insights",
    roleLine: "Data Analyst",
    hook: "Interactive Power BI dashboard analyzing 100K+ ride records to visualize regional revenue and cancellation trends.",
    tags: ["Data Analytics", "Power BI", "Dashboard"],
    links: [
      { label: "View on GitHub", url: "https://github.com/rahul-nagaura/OLA-Ride-Insights", icon: ExternalLink }
    ],
    images: {
      thumb: "/projects/ola/overall.png"
    },
    content: {
      context: "Ride-sharing platforms generate enormous volumes of operational data — bookings, cancellations, payments, ratings — but that data only creates value when it's shaped into something a decision-maker can act on. This project analyzes a large OLA ride dataset and builds an interactive Power BI dashboard so management can move from raw records to clear operational signals.",
      problem: "OLA's management needed to answer four operational questions from the data, none of which are easy to see in raw rows: How do ride volumes and booking patterns move over time? What's driving cancellations? Where does revenue actually come from, and how do riders prefer to pay? And how do customer and driver ratings compare — where's the service gap? The challenge was to turn a messy Excel export into a tool that answers these at a glance.",
      role: "I owned this end to end as the analyst and designer: sourcing and cleaning the data, defining the KPIs that mattered, building the dashboard, and — most importantly — interpreting what the numbers meant for the business. Tools: Power BI Desktop, Power Query.",
      process: [
        "Data loading & cleaning (Power Query): imported the raw ride data, handled missing and incorrect values, and profiled every column for quality and consistency before touching visuals.",
        "KPI creation (DAX): built measures for the metrics that drive decisions — average ride distance, total revenue, customer rating, driver rating.",
        "Dashboard design: built visualizations (bar, pie, scatter, maps) with slicers for dynamic filtering by region, ride type, and date, so a manager can interrogate any segment.",
        "Segmentation: categorized customers by ride frequency and total value, so high-value riders can be looked at separately from occasional ones."
      ],
      outcome: [
        { text: "Demand is time-patterned — ride volumes spike on weekends and public holidays. → Implication: driver incentives and supply planning should be concentrated on these peaks.", image: "/projects/ola/overall.png", caption: "Overall Ride Volume Analysis" },
        { text: "Vehicle preference is concentrated — SUVs and Hatchbacks dominate rider choice. → Implication: fleet and driver-onboarding mix should skew toward what riders actually book.", image: "/projects/ola/vehicle-type.png", caption: "Vehicle Type Preferences" },
        { text: "Payment is cash/UPI-led — COD & UPI is the dominant method, ahead of credit and debit cards. → Implication: UPI reliability and cash-handling flows matter more than card infrastructure for this user base.", image: "/projects/ola/revenue.png", caption: "Revenue & Payment Sources" },
        { text: "Cancellations are addressable — the top reasons are \"Driver No-Show\" and \"Customer Canceled.\" → Implication: driver-no-show is a supply-accountability problem, not a demand problem — a targeted intervention (penalties, reassignment speed) could directly cut this.", image: "", caption: "Cancellation Trends" },
        { text: "There's a driver-side service gap — customer ratings run slightly higher than driver ratings. → Implication: a driver-improvement or training program is the higher-leverage place to raise overall satisfaction.", image: "", caption: "Ratings Analysis" }
      ],
      reflection: "The build reinforced something central to product work: a dashboard isn't the deliverable — the decision it enables is. The most useful part wasn't the visualizations but connecting each pattern to a lever management could actually pull (supply timing, fleet mix, cancellation policy, driver quality). If I extended this, I'd add cohort retention over time and tie cancellation rates to specific regions and time windows, so the \"where and when\" of the driver-no-show problem becomes precise enough to act on."
    }
  },
  {
    id: "accredian",
    title: "Accredian Gamified Product Deck",
    roleLine: "Product Strategy",
    hook: "Designed a gamified learning portal roadmap using RICE framework, projected to lift course completion by ~30%.",
    tags: ["Product Strategy", "GTM", "Wireframing"],
    links: [
      { label: "View Deck (PDF)", url: "https://github.com/rahul-nagaura/Accredian-Interactive-Student-Interface-/raw/main/Accredian%20deck.pdf", icon: ExternalLink },
      { label: "View on GitHub", url: "https://github.com/rahul-nagaura/Accredian-Interactive-Student-Interface-", icon: ExternalLink }
    ],
    images: {
      thumb: "/projects/accredian/cover.png"
    },
    content: {
      context: "Accredian is an Indian ed-tech institution (founded 2018) that upskills working professionals in Product Management, Data Science & AI, and General Management. Keeping busy, working professionals engaged through a months-long course is a core retention challenge for any ed-tech product — motivation, not content, is often the bottleneck. This project reimagined the student dashboard as an engagement engine. (Built as a competition entry — placed 3rd.)",
      problem: "Accredian's students are working professionals juggling courses alongside full-time jobs. The brief: design an interactive student dashboard that uses gamification to drive engagement and keep learners motivated and on-track. The real problem underneath the brief — how do you sustain motivation when the reward (a career outcome) is months away? — meant the design had to create near-term wins, not just track long-term progress.",
      role: "I owned the product work end to end: user research and persona building, feature ideation and prioritization, high-fidelity design in Figma, the go-to-market approach, and defining the success metrics to measure it against.",
      process: [
        "User personas: built detailed personas to ground design decisions in real learner needs and behaviors, rather than designing for a generic \"student.\"",
        "Feature ideation: designed gamification mechanics — leaderboards, achievement badges, and progress tracking — chosen specifically to create the near-term wins the problem demanded.",
        "Prioritization: ranked features against user feedback, business goals, and expected engagement impact, so the build order reflected value, not just ease.",
        "Design: produced high-fidelity wireframes and prototypes in Figma, iterating with the team.",
        "GTM: outlined a launch-and-adoption strategy — how the new dashboard would actually reach and be taken up by students."
      ],
      outcome: [
        { text: "A complete, prototyped dashboard concept with a prioritized feature set and a defined GTM approach — presented as a full product deck.", image: "", caption: "[Placeholder: Persona Slide]" },
        { text: "Placed 3rd in the competition, an external validation of the product thinking.", image: "", caption: "[Placeholder: Prioritization Slide]" },
        { text: "Defined clear success metrics (engagement and satisfaction KPIs) so the dashboard's impact could be measured post-launch, with a projected lift in engagement as the target the design was built to hit.", image: "", caption: "[Placeholder: Dashboard Mockup]" }
      ],
      reflection: "This project was where product management \"clicked\" for me. The lesson that stuck: gamification isn't badges for their own sake — it's a tool to solve a specific motivation problem, and it only works if every mechanic maps back to a real user need surfaced in research. Given more time, I'd validate the projected engagement lift with an A/B test on the leaderboard and badge mechanics, since those are the features most likely to move the metric — and the projection is a hypothesis until the data confirms it."
    }
  }
];

export const Projects = () => {
  const [activeStudy, setActiveStudy] = useState(null);
  const [activeSection, setActiveSection] = useState('context');

  // Close modal on escape
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setActiveStudy(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Intersection Observer for the sticky sidebar progress rail
  React.useEffect(() => {
    if (!activeStudy) return;

    const sections = ['context', 'problem', 'role', 'process', 'outcome', 'reflection'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    sections.forEach(id => {
      const el = document.getElementById(`cs-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeStudy]);

  const scrollToSection = (id) => {
    const el = document.getElementById(`cs-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white dark:bg-[#0A0A0F] transition-colors duration-500 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 border-b border-black/10 dark:border-white/10 transition-colors duration-500 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-black dark:border-white/50 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-black dark:text-white mb-6 transition-colors duration-500">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white transition-colors duration-500"></span>
                <span>Case Studies</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl break-words font-heading font-extrabold tracking-tighter text-black dark:text-white uppercase transition-colors duration-500 [text-shadow:none]">
                Selected Work.
              </h2>
            </div>
            <p className="text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 max-w-sm text-left md:text-right transition-colors duration-500">
              Case studies, teardowns, and live products.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid / Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={0.2 + (index * 0.1)} direction="up" className="h-full">
              <div 
                className="group border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 cursor-pointer flex flex-col h-full bg-white dark:bg-[#0A0A0F] text-black dark:text-white"
                onClick={() => study.content && setActiveStudy(study)}
              >
                {/* Image Thumbnail */}
                <div className="w-full aspect-video border-b border-black/10 dark:border-white/20 bg-gray-50 dark:bg-white/5 flex items-center justify-center p-0 text-center transition-colors duration-300 relative overflow-hidden">
                  {study.images?.thumb ? (
                    <img src={study.images.thumb} alt={study.title} className="w-full h-full object-cover object-top grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <span className="font-mono text-xs uppercase tracking-widest opacity-50 group-hover:opacity-100 relative z-10 p-6">
                      [Cover Image Placeholder]
                    </span>
                  )}
                </div>
                
                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-3 text-black dark:text-white transition-colors duration-500 border border-black/30 dark:border-white/30 px-2 py-1 w-fit">
                    {study.roleLine}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold mb-4 tracking-tight transition-colors duration-500 [text-shadow:none] uppercase">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base font-body mb-8 text-black/80 dark:text-gray-300 transition-colors duration-500 leading-snug">
                    {study.hook}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className={`mt-auto flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-500 ${!study.content ? 'opacity-50' : ''}`}>
                    <span>{study.content ? 'Read Case Study' : 'Coming Soon'}</span>
                    {study.content && <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Full Screen Case Study View */}
      <AnimatePresence>
        {activeStudy && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-white dark:bg-[#0A0A0F] overflow-y-auto text-black dark:text-white transition-colors duration-500"
          >
            {/* Top Navigation */}
            <div className="sticky top-0 bg-white/95 dark:bg-[#0A0A0F]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 p-4 sm:p-6 flex justify-between items-center z-50">
              <button 
                onClick={() => setActiveStudy(null)}
                className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
              >
                <ArrowLeft size={16} />
                <span>Back to Work</span>
              </button>
            </div>

            {/* Case Study Layout */}
            <div className="max-w-6xl mx-auto px-6 py-12 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
              
              {/* Left Column: Progress Rail & Metadata (Sticky on Desktop) */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="sticky top-32 space-y-12">
                  
                  {/* Progress Rail */}
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-4 opacity-50 border-b border-black/10 dark:border-white/10 pb-2">Contents</h4>
                    <ul className="space-y-3">
                      {[
                        { id: 'context', label: '01 Context' },
                        { id: 'problem', label: '02 Problem' },
                        { id: 'role', label: '03 Role' },
                        { id: 'process', label: '04 Process' },
                        { id: 'outcome', label: '05 Outcome' },
                        { id: 'reflection', label: '06 Reflection' }
                      ].map((item) => (
                        <li key={item.id}>
                          <button 
                            onClick={() => scrollToSection(item.id)}
                            className={`text-xs font-mono uppercase tracking-widest transition-colors ${activeSection === item.id ? 'text-black dark:text-white font-bold' : 'text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white'}`}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metadata */}
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest mb-4 opacity-50 border-b border-black/10 dark:border-white/10 pb-2">Role & Stack</h4>
                    <p className="text-sm font-body mb-4">{activeStudy.roleLine}</p>
                    <div className="flex flex-wrap gap-2">
                      {activeStudy.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono border border-black/10 dark:border-white/10 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Narrative Content */}
              <div className="lg:col-span-8 space-y-16 sm:space-y-24">
                
                {/* Header (Top of Narrative) */}
                <div className="mb-16">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tighter uppercase mb-6 leading-[0.9]">
                    {activeStudy.title}
                  </h1>
                  <p className="text-xl sm:text-2xl font-medium leading-snug mb-8 opacity-90">
                    {activeStudy.hook}
                  </p>

                  {/* Live Links */}
                  {activeStudy.links && (
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-black/10 dark:border-white/10">
                      {activeStudy.links.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-black/20 dark:border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors dark:[text-shadow:none] dark:[filter:none]"
                        >
                          <link.icon size={14} />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Section: Context */}
                <section id="cs-context" className="scroll-mt-32">
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6 flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400">01</span> Context
                  </h3>
                  <p className="text-base sm:text-lg font-body leading-relaxed">{activeStudy.content.context}</p>
                </section>

                {/* Section: Problem */}
                <section id="cs-problem" className="scroll-mt-32">
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6 flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400">02</span> Problem
                  </h3>
                  <p className="text-base sm:text-lg font-body leading-relaxed">{activeStudy.content.problem}</p>
                </section>

                {/* Image: IG Profile */}
                {activeStudy.images?.ig && (
                  <div className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 sm:p-4 my-16">
                    <img src={activeStudy.images.ig} alt="Instagram Profile" className="w-full h-auto border border-black/20 dark:border-white/20" />
                  </div>
                )}

                {/* Section: Role */}
                <section id="cs-role" className="scroll-mt-32">
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6 flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400">03</span> Role
                  </h3>
                  <p className="text-base sm:text-lg font-body leading-relaxed">{activeStudy.content.role}</p>
                </section>

                {/* Section: Process */}
                <section id="cs-process" className="scroll-mt-32">
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6 flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400">04</span> Process
                  </h3>
                  <ul className="space-y-6 list-none text-base sm:text-lg font-body leading-relaxed">
                    {activeStudy.content.process.map((step, idx) => (
                      <li key={idx} className="relative pl-6">
                        <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-black dark:bg-white"></span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Images: BML Calc & Hero */}
                {(activeStudy.images?.hero || activeStudy.images?.bml) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-16">
                    {activeStudy.images?.hero && (
                      <div className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 sm:p-4">
                        <img src={activeStudy.images.hero} alt="Landing Page Hero" className="w-full h-auto border border-black/20 dark:border-white/20" />
                      </div>
                    )}
                    {activeStudy.images?.bml && (
                      <div className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 sm:p-4">
                        <img src={activeStudy.images.bml} alt="BML Calculator" className="w-full h-auto border border-black/20 dark:border-white/20" />
                      </div>
                    )}
                  </div>
                )}

                {/* Section: Outcome */}
                <section id="cs-outcome" className="scroll-mt-32">
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6 flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400">05</span> Outcome
                  </h3>
                  
                  {activeStudy.id === 'sme' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                      <div className="border border-black dark:border-white/30 p-6">
                        <div className="text-3xl font-heading font-bold mb-2">10.9k</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest opacity-70">Organic followers<br/>₹0 ad spend</div>
                      </div>
                      <div className="border border-black dark:border-white/30 p-6">
                        <div className="text-3xl font-heading font-bold mb-2">₹90k</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest opacity-70">Revenue in<br/>3-6 months</div>
                      </div>
                      <div className="border border-black dark:border-white/30 p-6">
                        <div className="text-3xl font-heading font-bold mb-2">96%</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest opacity-70">Traffic converted<br/>to /bml diagnostic</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-12">
                    {activeStudy.content.outcome.map((point, idx) => {
                      const isObj = typeof point === 'object';
                      const text = isObj ? point.text : point;
                      return (
                        <div key={idx} className="space-y-6">
                          <div className="relative pl-6 text-base sm:text-lg font-body leading-relaxed">
                            <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-black dark:bg-white"></span>
                            {text}
                          </div>
                          {isObj && point.image && (
                            <div className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 sm:p-4 rounded-xl">
                              <img src={point.image} alt={point.caption} className="w-full h-auto object-cover rounded-lg border border-black/10 dark:border-white/10" onError={(e) => { e.target.style.display = 'none'; }} />
                              {point.caption && <p className="text-center text-xs font-mono mt-4 text-black/60 dark:text-gray-400 uppercase tracking-widest">{point.caption}</p>}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Final Image: Analytics */}
                {activeStudy.images?.analytics && (
                  <div className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 sm:p-4 my-16">
                    <img src={activeStudy.images.analytics} alt="Vercel Analytics" className="w-full h-auto border border-black/20 dark:border-white/20" />
                  </div>
                )}

                {/* Section: Reflection */}
                <section id="cs-reflection" className="scroll-mt-32">
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6 flex items-center gap-4">
                    <span className="text-sm font-mono text-gray-400">06</span> Reflection
                  </h3>
                  <div className="pl-6 border-l-2 border-black/20 dark:border-white/20">
                    <p className="text-base sm:text-lg font-body leading-relaxed">
                      {activeStudy.content.reflection}
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="border-t border-black/10 dark:border-white/10 p-8 sm:p-12 flex justify-center mt-12 bg-white dark:bg-[#0A0A0F]">
              <button 
                onClick={() => setActiveStudy(null)}
                className="px-8 py-4 border border-black dark:border-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Back to All Work
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
