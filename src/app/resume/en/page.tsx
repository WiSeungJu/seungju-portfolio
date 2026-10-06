"use client";

import "computer-modern/cmu-serif.css";
import ResumeBar from "@/components/ResumeBar";

// US-style one-page resume (Jake's Resume layout): no photo, no personal details,
// reverse-chronological, one accomplishment per bullet.

const education = [
  {
    school: "Hongik University",
    location: "Seoul, South Korea",
    detail: "Bachelor's in Computer Engineering",
    period: "Mar 2020 – Feb 2026",
  },
  {
    school: "Singapore Korean International School",
    location: "Singapore",
    detail: "Natural Sciences Track; peer tutor in mathematics and Chinese",
    period: "Mar 2017 – Feb 2020",
  },
];

const experience = [
  {
    org: "LIKELION",
    location: "Seoul, South Korea",
    roles: [
      {
        title: "Problem Solver (Product Manager), Global New Business",
        period: "Sep 2026 – Present",
      },
      { title: "AI Product Manager", period: "Apr 2026 – Sep 2026" },
    ],
    bullets: [
      "Own Salary FYI end to end (web, mobile app, community, admin dashboard), a hiring platform connecting Vietnamese IT talent with Korean companies; reached 8,800+ sign-ups, 5,300+ resumes, and 10,000+ job applications within 5 months of launch",
      "Raised the resume visibility rate from 7.7% to 88.3% by shipping one-tap apply and LLM-targeted campaigns (14–30% click-through rate)",
      "Found that users with a registered resume apply 79x more often; redefined the team KPI around it and reallocated the entire ad budget",
      "Automated the 8-step hiring workflow (resume screening, AI voice interview, final evaluation, result emails) with LLMs and a Slack bot, replacing manual spreadsheet operations",
      "Cut resume translation for KTC, a government-funded Korea–Vietnam talent matching program, from about 3 hours per request to instant generation; ran the K-Tech College Job Matching Weekend 2026 on site in Da Nang",
      "Shipped the first MVP on day 3 and planned, built, and launched 5+ products solo in 4 months",
    ],
  },
  {
    org: "Planfit",
    location: "Seoul, South Korea",
    roles: [
      { title: "AI Problem Solver Intern", period: "Jun 2025 – Dec 2025" },
    ],
    bullets: [
      "Owned free-to-paid subscription conversion; designed and ran 70+ experiments in about 3 months as a one-person sprint across planning, UI/UX design, React Native front end, and QA",
      "Sourced and led the adoption of Monetai, an external AI purchase-prediction solution; lifted weekly payment conversion for existing users by 75%, still running in production",
      "Replaced a static paywall with an AI-generated seasonal video (Veo, Midjourney), lifting new-user payment conversion by 20%, double the 10% target",
      "Wrote 100+ PRDs and fixed payment-funnel bottlenecks using Amplitude funnel analysis",
    ],
  },
];

const projects = [
  {
    name: "Drinkig",
    stack: "React Native, MySQL, Claude, Cursor",
    period: "Jan 2026 – Present",
    bullets: [
      "Built an AI wine curation app for beginners with recommendations based on taste, tasting notes, and grape variety; handled planning, design, development, and QA alone",
      "Rebuilt it from a failed 10-person v1 in about 1.5 months; approved on the App Store in Jan 2026",
      "Won 2nd place at the Hongik University Startup Competition; featured in Weekly Dong-A",
    ],
  },
  {
    name: "Gourmevel",
    stack: "Instagram, YouTube, Naver Blog",
    period: "Nov 2021 – Present",
    bullets: [
      "Founded a fine-dining magazine with in-depth reviews of fine-dining and Michelin restaurants; grew it to 10K followers with zero ad spend (top short-form video: 1.24M views)",
      "Ran 50+ brand collaborations, including CatchTable; monetized through advertising and photography",
    ],
  },
];

const skills = [
  {
    label: "Product",
    value:
      "Problem definition, PRDs, funnel analysis, experiment design, growth, KPI design",
  },
  {
    label: "AI",
    value:
      "LLM-based product development, workflow automation, Claude Code, Cursor",
  },
  {
    label: "Development",
    value: "React Native, web and app front end, Slack bots",
  },
  { label: "Tools", value: "Amplitude, MySQL, Figma" },
  {
    label: "Languages",
    value: "Korean (native), English (native-level), Chinese (advanced)",
  },
];

export default function ResumeEnPage() {
  return (
    <main className="resume-root min-h-screen bg-wash text-ink">
      <ResumeBar lang="en" />

      {/* US Letter sheet */}
      <div
        lang="en"
        className="jake-sheet mx-auto my-8 print:my-0 bg-white text-black shadow-2xl print:shadow-none"
      >
        <div className="jake-inner">
          <header className="text-center">
            <h1 className="jake-name">Seungju Wi</h1>
            <p className="jake-contact">
              +82 10-3655-5641 <span>|</span> wsj@likelion.net <span>|</span>{" "}
              linkedin.com/in/wiseungju <span>|</span> github.com/SeungjuWI{" "}
              <span>|</span> portfolio.gourmevel.com
            </p>
          </header>

          <section>
            <h2 className="jake-h2">Education</h2>
            {education.map((item) => (
              <div key={item.school} className="jake-entry">
                <div className="jake-row">
                  <strong>{item.school}</strong>
                  <span>{item.location}</span>
                </div>
                <div className="jake-row jake-sub">
                  <em>{item.detail}</em>
                  <em>{item.period}</em>
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="jake-h2">Experience</h2>
            {experience.map((job) => (
              <div key={job.org} className="jake-entry">
                <div className="jake-row">
                  <strong>{job.org}</strong>
                  <span>{job.location}</span>
                </div>
                {job.roles.map((role) => (
                  <div key={role.period} className="jake-row jake-sub">
                    <em>{role.title}</em>
                    <em>{role.period}</em>
                  </div>
                ))}
                <ul className="jake-ul">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2 className="jake-h2">Projects</h2>
            {projects.map((project) => (
              <div key={project.name} className="jake-entry">
                <div className="jake-row">
                  <span>
                    <strong>{project.name}</strong> <span>|</span>{" "}
                    <em>{project.stack}</em>
                  </span>
                  <span>{project.period}</span>
                </div>
                <ul className="jake-ul">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2 className="jake-h2">Skills</h2>
            <div className="jake-skills">
              {skills.map((row) => (
                <p key={row.label}>
                  <strong>{row.label}:</strong> {row.value}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="print:hidden text-center text-[11px] text-muted pb-8">
        Use &lsquo;Save as PDF&rsquo; above, or print from the browser (⌘+P) and
        choose &lsquo;Save as PDF&rsquo;
      </div>

      <style jsx global>{`
        @page {
          size: Letter;
          margin: 0;
        }
        .jake-sheet {
          width: 8.5in;
          min-height: 11in;
          box-sizing: border-box;
          font-family: "CMU Serif", "Latin Modern Roman", "Times New Roman",
            Times, serif;
          font-size: 10.5pt;
          line-height: 1.22;
          word-break: normal;
        }
        .jake-inner {
          padding: 0.45in 0.5in;
          box-sizing: border-box;
        }
        .jake-name {
          font-size: 24pt;
          font-weight: 700;
          letter-spacing: 0.01em;
          line-height: 1.1;
          font-variant: small-caps;
        }
        .jake-contact {
          margin-top: 3pt;
          font-size: 9.5pt;
        }
        .jake-contact span {
          margin: 0 3pt;
        }
        .jake-h2 {
          margin-top: 9pt;
          margin-bottom: 4pt;
          padding-bottom: 1pt;
          border-bottom: 0.6pt solid #000;
          font-size: 12pt;
          font-weight: 400;
          font-variant: small-caps;
          letter-spacing: 0.02em;
        }
        .jake-entry {
          margin-bottom: 5pt;
          break-inside: avoid;
        }
        .jake-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12pt;
        }
        .jake-row > :last-child {
          flex-shrink: 0;
          text-align: right;
        }
        .jake-sub {
          font-size: 9.5pt;
        }
        .jake-ul {
          margin-top: 2pt;
          padding-left: 15pt;
          list-style: disc;
          font-size: 9.5pt;
        }
        .jake-ul > li {
          margin-bottom: 1.5pt;
        }
        .jake-skills {
          font-size: 9.5pt;
        }
        .jake-skills p {
          margin-bottom: 1pt;
        }
        @media print {
          html,
          body {
            background: #ffffff !important;
          }
          .resume-root {
            background: #ffffff !important;
          }
          .jake-sheet {
            box-shadow: none !important;
            margin: 0 !important;
            width: 8.5in !important;
          }
        }
      `}</style>
    </main>
  );
}
