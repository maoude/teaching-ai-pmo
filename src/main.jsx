import React from "react";
import { createRoot } from "react-dom/client";
import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  FileSpreadsheet,
  GraduationCap,
  LayoutDashboard,
  Presentation,
  ShieldAlert,
  Users,
  Video
} from "lucide-react";
import "./styles.css";

const dashboardHref = `${import.meta.env.BASE_URL}dashboard_template.csv`;
const syllabusTexHref = `${import.meta.env.BASE_URL}pmo_ai_lecture_syllabus.tex`;
const syllabusPdfHref = `${import.meta.env.BASE_URL}pmo_ai_lecture_syllabus.pdf`;

const quests = [
  {
    level: "Level 1",
    title: "Project Launch",
    mission: "Define scope, stakeholders, constraints, and success criteria.",
    evidence: "Project charter summary",
    icon: Users
  },
  {
    level: "Level 2",
    title: "WBS Builder",
    mission: "Build a deliverable-oriented WBS for the Smart Campus App.",
    evidence: "WBS tree",
    icon: BookOpen
  },
  {
    level: "Level 3",
    title: "Schedule Rescue",
    mission: "Reduce the first 15-week plan into a realistic 12-week plan.",
    evidence: "Optimized schedule",
    icon: FileSpreadsheet
  },
  {
    level: "Level 4",
    title: "Dashboard Detective",
    mission: "Analyze week 6 performance data and diagnose project health.",
    evidence: "KPI interpretation",
    icon: BarChart3
  },
  {
    level: "Level 5",
    title: "Crisis Controller",
    mission: "Respond to the week 8 integration failure and prepare recovery.",
    evidence: "PMO recovery briefing",
    icon: ShieldAlert
  }
];

const activities = [
  ["0-15 min", "Opening scenario and first decision poll", "Acquisition + Discussion", "Genially + Mentimeter"],
  ["15-45 min", "Planning concepts and project charter", "Acquisition + Inquiry", "Slides + NotebookLM"],
  ["45-80 min", "WBS workshop", "Production + Collaboration", "Worksheet + Canva"],
  ["80-90 min", "Break", "Pause", ""],
  ["90-120 min", "Scheduling and optimization challenge", "Practice + Collaboration", "Google Sheets"],
  ["120-155 min", "Monitoring, dashboard, and KPI analysis", "Practice + Inquiry", "Google Sheets + Quizizz"],
  ["155-175 min", "Week 8 crisis simulation", "Discussion + Production", "Genially"],
  ["175-180 min", "Exit ticket", "Reflection", "Google Forms"]
];

const toolStack = [
  ["ChatGPT / Gemini / Claude", "Module architecture, scenarios, quiz questions, crisis cards, and rubrics"],
  ["NotebookLM", "Source-grounded PMBOK/course-note summaries and FAQs"],
  ["Learning Designer", "Primary module structure, activity types, CC-BY-NC export, and public link"],
  ["Gamma -> Canva", "Slide draft generation followed by visual polish"],
  ["Napkin AI / Mermaid / draw.io", "WBS tree, Gantt, RACI, risk matrix, and control-loop diagrams"],
  ["Genially", "Branching quest screens, clickable decisions, and animated crisis scenario"],
  ["QuestionWell / Quizizz / MagicSchool AI", "Formative checkpoints and feedback after each level"],
  ["Google Sheets + ChatGPT", "Live KPI dashboard and schedule/budget simulation"],
  ["Mentimeter / Wooclap / Kahoot", "Live polls, level-up votes, and optional leaderboard"],
  ["Canva video / CapCut / Lumen5", "5-10 minute explanatory video production"]
];

const designerBlocks = [
  ["Acquisition + Discussion", "15 min", "Opening scenario and first decision poll"],
  ["Acquisition + Inquiry", "30 min", "Planning concepts and project charter"],
  ["Production + Collaboration", "35 min", "WBS workshop"],
  ["Practice + Collaboration", "35 min", "Schedule optimization challenge"],
  ["Practice + Inquiry", "35 min", "Dashboard and KPI analysis"],
  ["Discussion + Production", "20 min", "Crisis simulation and PMO briefing"],
  ["Production + Reflection", "10 min", "Final briefing and exit ticket"]
];

const rewardTiers = [
  ["85-100", "PMO Excellence Award"],
  ["70-84", "Project Recovery Certified"],
  ["55-69", "Project Control Apprentice"],
  ["Below 55", "Needs PMO Intervention"]
];

const rubricAlignment = [
  ["Pedagogical Relevance", "20%", "Measurable objectives and a logical planning-to-control sequence"],
  ["AI & Gamification Integration", "30%", "Purposeful AI tools plus quests, badges, points, feedback, rewards, and progression"],
  ["Learning Variety", "20%", "Acquisition, inquiry, practice, production, collaboration, discussion, and reflection"],
  ["Scenario Quality", "15%", "Progressive Smart Campus scenario with new constraints at each level"],
  ["Feasibility & Presentation", "15%", "Free/freemium tools, video plan, and classroom-ready assets"]
];

const rubric = [
  ["Scope clarity", "15%"],
  ["WBS quality", "20%"],
  ["Schedule and dependencies", "20%"],
  ["Risk analysis", "15%"],
  ["Tracking and control logic", "20%"],
  ["Professional presentation", "10%"]
];

const quiz = [
  ["What should a project manager do first?", "Define scope and stakeholders"],
  ["What is a WBS?", "A deliverable-oriented decomposition of project work"],
  ["The first schedule is 15 weeks, but the deadline is 12 weeks. What should the PMO do?", "Re-plan using parallel work, scope prioritization, and resource adjustment"],
  ["Planned progress is 50%, actual progress is 38%. What does this suggest?", "The project is late"],
  ["What should a PMO recovery briefing include?", "Problem, impact, corrective action, and sponsor decision needed"]
];

const badges = [
  "Scope Master",
  "WBS Architect",
  "Schedule Optimizer",
  "Dashboard Detective",
  "Risk Analyst",
  "Crisis Controller"
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <LayoutDashboard aria-hidden="true" />
          <div>
            <strong>PMO AI Module</strong>
            <span>Smart Campus App</span>
          </div>
        </div>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#syllabus">Syllabus</a>
          <a href="#quests">Quests</a>
          <a href="#tools">AI Tools</a>
          <a href="#runbook">Runbook</a>
          <a href="#designer">Designer</a>
          <a href="#materials">Materials</a>
          <a href="#assessment">Assessment</a>
          <a href="#video">Video</a>
        </nav>
      </aside>

      <main>
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="eyebrow">AI-assisted gamified university module</p>
            <h1>From Plan to Control</h1>
            <p className="lede">
              Students act as a real PMO team delivering a Smart Campus Mobile App in 12 weeks.
              They plan, build a WBS, optimize the schedule, read project dashboards, and present a recovery plan.
            </p>
            <p className="license-note">AUF final project alignment: gamified AI-assisted module, CC-BY-NC recommended.</p>
            <div className="hero-actions">
              <a className="primary-action" href="#quests">
                <Presentation aria-hidden="true" />
                Start Module
              </a>
              <a className="secondary-action" href={dashboardHref} download>
                <FileSpreadsheet aria-hidden="true" />
                Dashboard CSV
              </a>
            </div>
          </div>
          <div className="status-panel" aria-label="Project case summary">
            <div>
              <span>Budget</span>
              <strong>$40,000</strong>
            </div>
            <div>
              <span>Deadline</span>
              <strong>12 weeks</strong>
            </div>
            <div>
              <span>Demo</span>
              <strong>Week 6</strong>
            </div>
            <div>
              <span>Main Risk</span>
              <strong>Database integration</strong>
            </div>
          </div>
        </section>

        <section className="content-band">
          <div className="section-heading">
            <p className="eyebrow">Objectives</p>
            <h2>What Students Produce</h2>
          </div>
          <div className="objective-grid">
            <article><ClipboardCheck /><span>Project charter summary</span></article>
            <article><BookOpen /><span>Deliverable-oriented WBS</span></article>
            <article><FileSpreadsheet /><span>Optimized schedule</span></article>
            <article><BarChart3 /><span>Dashboard interpretation</span></article>
            <article><ShieldAlert /><span>Corrective action report</span></article>
            <article><GraduationCap /><span>PMO recovery briefing</span></article>
          </div>
        </section>

        <section className="content-band" id="syllabus">
          <div className="section-heading">
            <p className="eyebrow">Student Reading</p>
            <h2>Lecture Syllabus</h2>
          </div>
          <div className="syllabus-layout">
            <div className="syllabus-main">
              <h3>From Plan to Control: Managing a Project Like a Real PMO</h3>
              <p>
                This lecture is a gamified AI-assisted project management module. Students work as a PMO team
                responsible for delivering a Smart Campus Mobile App in 12 weeks with a limited budget, a small
                technical team, a week 6 demo requirement, and a major database integration risk.
              </p>
              <h3>Learning Objectives</h3>
              <ol>
                <li>Explain the project management cycle from initiation to closing.</li>
                <li>Build a deliverable-oriented Work Breakdown Structure.</li>
                <li>Convert a WBS into tasks, dependencies, milestones, and deliverables.</li>
                <li>Estimate duration, cost, resources, and risks.</li>
                <li>Optimize execution by adjusting resources, sequencing, and priorities.</li>
                <li>Track progress using PV, EV, AC, SV, CV, SPI, and CPI.</li>
                <li>Diagnose project problems from dashboard data.</li>
                <li>Propose corrective actions for a late, over-budget, or unstable project.</li>
                <li>Communicate project status in a professional PMO-style briefing.</li>
              </ol>
              <h3>Student Deliverables</h3>
              <ul>
                <li>Project charter summary</li>
                <li>Stakeholder list and success criteria</li>
                <li>Deliverable-oriented WBS</li>
                <li>Optimized 12-week schedule</li>
                <li>Risk notes or risk register</li>
                <li>Dashboard diagnosis and corrective action plan</li>
                <li>Three-minute PMO recovery briefing</li>
              </ul>
            </div>
            <aside className="syllabus-side">
              <h3>Lecture Facts</h3>
              <dl>
                <div><dt>Audience</dt><dd>Licence / Master students</dd></div>
                <div><dt>Duration</dt><dd>3 hours or two 90-minute sessions</dd></div>
                <div><dt>Case</dt><dd>Smart Campus Mobile App</dd></div>
                <div><dt>License</dt><dd>CC-BY-NC recommended</dd></div>
              </dl>
              <a className="secondary-action full-width" href={syllabusTexHref} download>
                <BookOpen aria-hidden="true" />
                Download LaTeX Syllabus
              </a>
              <a className="primary-action full-width" href={syllabusPdfHref} target="_blank" rel="noreferrer">
                <BookOpen aria-hidden="true" />
                Read PDF Syllabus
              </a>
            </aside>
          </div>
        </section>

        <section className="content-band" id="quests">
          <div className="section-heading">
            <p className="eyebrow">Gamification</p>
            <h2>Five PMO Quests</h2>
          </div>
          <div className="quest-grid">
            {quests.map((quest) => {
              const Icon = quest.icon;
              return (
                <article className="quest-card" key={quest.title}>
                  <div className="quest-top">
                    <Icon aria-hidden="true" />
                    <span>{quest.level}</span>
                  </div>
                  <h3>{quest.title}</h3>
                  <p>{quest.mission}</p>
                  <small>Evidence: {quest.evidence}</small>
                </article>
              );
            })}
          </div>
          <div className="badge-strip">
            {badges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
          <div className="reward-grid">
            {rewardTiers.map(([score, title]) => (
              <article key={score}>
                <strong>{score}</strong>
                <span>{title}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-band" id="tools">
          <div className="section-heading">
            <p className="eyebrow">AI Integration</p>
            <h2>Purposeful Tool Stack</h2>
          </div>
          <div className="tool-grid">
            {toolStack.map(([tool, role]) => (
              <article key={tool}>
                <h3>{tool}</h3>
                <p>{role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-band" id="runbook">
          <div className="section-heading">
            <p className="eyebrow">Instructor Runbook</p>
            <h2>180-Minute Session Plan</h2>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Time</th><th>Activity</th><th>Learning Type</th><th>Tool</th></tr>
              </thead>
              <tbody>
                {activities.map(([time, activity, type, tool]) => (
                  <tr key={`${time}-${activity}`}>
                    <td>{time}</td>
                    <td>{activity}</td>
                    <td>{type}</td>
                    <td>{tool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-band" id="designer">
          <div className="section-heading">
            <p className="eyebrow">Learning Designer</p>
            <h2>Activity Block Sequence</h2>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Learning Type</th><th>Time</th><th>Activity</th></tr>
              </thead>
              <tbody>
                {designerBlocks.map(([type, time, activity]) => (
                  <tr key={`${type}-${activity}`}>
                    <td>{type}</td>
                    <td>{time}</td>
                    <td>{activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="callout">
            Required public deliverables: Learning Designer export, public Learning Designer link, and a 5-10 minute explanatory video.
          </div>
        </section>

        <section className="content-band split" id="materials">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Student Worksheet</p>
              <h2>Classroom Activities</h2>
            </div>
            <div className="worksheet-list">
              <p><strong>Quest 1:</strong> Identify stakeholders, constraints, and measurable success criteria.</p>
              <p><strong>Quest 2:</strong> Draw a three-level WBS for the Smart Campus App.</p>
              <p><strong>Quest 3:</strong> Convert the WBS into a 12-week schedule.</p>
              <p><strong>Quest 4:</strong> Diagnose week 6 dashboard data.</p>
              <p><strong>Quest 5:</strong> Prepare a three-minute recovery briefing.</p>
            </div>
          </div>
          <div className="decision-box">
            <h3>Week 8 Crisis</h3>
            <p>Database integration fails, QA reports many bugs, the sponsor refuses an extension, and the team is overloaded.</p>
            <strong>Best strategy:</strong>
            <p>Freeze scope and focus on login, schedule, notifications, and pilot stability.</p>
          </div>
        </section>

        <section className="content-band" id="assessment">
          <div className="section-heading">
            <p className="eyebrow">Assessment</p>
            <h2>Rubric and Quiz</h2>
          </div>
          <div className="assessment-grid">
            <div className="table-wrap">
              <table>
                <thead><tr><th>Criterion</th><th>Weight</th></tr></thead>
                <tbody>
                  {rubric.map(([criterion, weight]) => (
                    <tr key={criterion}><td>{criterion}</td><td>{weight}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="quiz-panel">
              {quiz.map(([question, answer], index) => (
                <details key={question}>
                  <summary>{index + 1}. {question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="section-heading alignment-heading">
            <p className="eyebrow">AUF Rubric Alignment</p>
            <h2>Submission Checklist</h2>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Criterion</th><th>Weight</th><th>How the Module Responds</th></tr></thead>
              <tbody>
                {rubricAlignment.map(([criterion, weight, response]) => (
                  <tr key={criterion}>
                    <td>{criterion}</td>
                    <td>{weight}</td>
                    <td>{response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-band" id="video">
          <div className="section-heading">
            <p className="eyebrow">Final Deliverable</p>
            <h2>Explanatory Video Script</h2>
          </div>
          <div className="timeline">
            <article><Video /><strong>0:00-0:45</strong><span>Introduce the module title, audience, and topic.</span></article>
            <article><Video /><strong>0:45-1:45</strong><span>Explain course need and learning objectives.</span></article>
            <article><Video /><strong>1:45-3:00</strong><span>Present the Smart Campus App scenario.</span></article>
            <article><Video /><strong>3:00-4:15</strong><span>Explain levels, quests, points, and badges.</span></article>
            <article><Video /><strong>4:15-5:45</strong><span>Show the AI tools and their instructional purpose.</span></article>
            <article><Video /><strong>5:45-10:00</strong><span>Demonstrate activities, assessment, and classroom readiness.</span></article>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
