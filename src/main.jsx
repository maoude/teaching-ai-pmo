import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Download,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Presentation,
  ShieldAlert,
  Users,
  Video,
  Wrench,
  Trophy
} from "lucide-react";
import "./styles.css";

const BASE = import.meta.env.BASE_URL;

const sessions = [
  {
    number: "01",
    title: "AI in Education",
    subtitle: "Introduction and Overview",
    description: "What artificial intelligence means for higher education. Key concepts, opportunities, risks, and the role of the instructor in an AI-assisted classroom.",
    file: "AI-in-Education-Session-1.pdf",
    color: "teal"
  },
  {
    number: "02",
    title: "AI in Education",
    subtitle: "Tools and Workflows",
    description: "Survey of practical AI tools for teaching. How to select, evaluate, and integrate AI tools into course design without losing pedagogical control.",
    file: "AI-in-Education-Session-2.pdf",
    color: "teal"
  },
  {
    number: "03",
    title: "AI in Teaching",
    subtitle: "Designing AI-Assisted Activities",
    description: "How to design learning activities that use AI meaningfully. Gamification, scenario-based learning, and formative assessment with AI support.",
    file: "AI-in-Teaching-Session-3.pdf",
    color: "amber"
  },
  {
    number: "04",
    title: "AI in Teaching",
    subtitle: "Building and Evaluating Modules",
    description: "Building a complete AI-assisted module from scratch. Evaluation criteria, quality control, and the instructor as final pedagogical authority.",
    file: "AI-in-Teaching-Session-4.pdf",
    color: "amber"
  }
];

const resources = [
  {
    title: "AI Tools Kit",
    description: "Reference guide to all AI tools used in the course — tool names, purposes, free-plan limits, and recommended workflows.",
    file: "AI_Tools_Kit.pdf",
    icon: Wrench
  },
  {
    title: "Final Project Brief",
    description: "AUF assignment: design a gamified AI-assisted pedagogical module. Full brief including deliverables, rubric, and submission requirements.",
    file: "FinalProject.pdf",
    icon: Trophy
  },
  {
    title: "PMO Module Syllabus",
    description: "Detailed syllabus for the From Plan to Control project management module used as the worked example throughout the course.",
    file: "pmo_ai_lecture_syllabus.pdf",
    icon: FileText
  },
  {
    title: "Dashboard CSV",
    description: "Google Sheets / Excel template with week 6 project data, earned value formulas, and KPI calculations for the hands-on activity.",
    file: "dashboard_template.csv",
    icon: FileSpreadsheet
  }
];

const productionMaterials = [
  {
    title: "Lecture Delivery Script",
    description: "Full instructor script for the 3-hour lecture, including prompts, debriefs, and expected answers.",
    file: "materials/lecture_delivery_script.md",
    icon: Presentation
  },
  {
    title: "Explanatory Video Script",
    description: "8-10 minute final project video script for presenting the module design and AI integration.",
    file: "materials/explanatory_video_script_full.md",
    icon: Video
  },
  {
    title: "Micro-Video Scripts",
    description: "Short scripts for WBS, dashboard reading, and project recovery explainer videos.",
    file: "materials/micro_video_scripts.md",
    icon: Video
  },
  {
    title: "Genially Storyboard",
    description: "Screen-by-screen branching simulation design for the Smart Campus App PMO challenge.",
    file: "materials/genially_storyboard.md",
    icon: LayoutDashboard
  },
  {
    title: "Quizizz Import CSV",
    description: "Fifteen ready quiz questions with answers, timing, and explanations.",
    file: "materials/quizizz_import.csv",
    icon: ClipboardCheck
  },
  {
    title: "Question Bank JSON",
    description: "Structured quiz data for future interactive quiz scoring inside the React app.",
    file: "materials/question_bank.json",
    icon: ClipboardCheck
  },
  {
    title: "Activity Cards",
    description: "Printable group cards for Scope Master, WBS Architect, Schedule Optimizer, Dashboard Detective, and Crisis Controller.",
    file: "materials/activity_cards.md",
    icon: FileText
  }
];

const quests = [
  { level: "Level 1", title: "Project Launch", mission: "Define scope, stakeholders, constraints, and success criteria.", evidence: "Project charter summary", icon: Users },
  { level: "Level 2", title: "WBS Builder", mission: "Build a deliverable-oriented WBS for the Smart Campus App.", evidence: "WBS tree", icon: BookOpen },
  { level: "Level 3", title: "Schedule Rescue", mission: "Reduce the first 15-week plan into a realistic 12-week plan.", evidence: "Optimized schedule", icon: FileSpreadsheet },
  { level: "Level 4", title: "Dashboard Detective", mission: "Analyze week 6 performance data and diagnose project health.", evidence: "KPI interpretation", icon: BarChart3 },
  { level: "Level 5", title: "Crisis Controller", mission: "Respond to the week 8 integration failure and prepare recovery.", evidence: "PMO recovery briefing", icon: ShieldAlert }
];

const badges = ["Scope Master", "WBS Architect", "Schedule Optimizer", "Dashboard Detective", "Risk Analyst", "Crisis Controller"];

const activities = [
  ["0–15 min", "Opening scenario and decision poll", "Acquisition + Discussion", "Genially + Mentimeter"],
  ["15–45 min", "Planning and project charter", "Acquisition + Inquiry", "Slides + NotebookLM"],
  ["45–80 min", "WBS workshop", "Production + Collaboration", "Worksheet + Canva"],
  ["80–90 min", "Break", "—", ""],
  ["90–120 min", "Scheduling and optimization", "Practice + Collaboration", "Google Sheets"],
  ["120–155 min", "Dashboard and KPI analysis", "Practice + Inquiry", "Google Sheets + Quizizz"],
  ["155–175 min", "Week 8 crisis simulation", "Discussion + Production", "Genially"],
  ["175–180 min", "Exit ticket", "Reflection", "Google Forms"]
];

const rubricAlignment = [
  ["Pedagogical Relevance", "20%", "Measurable objectives and a logical planning-to-control sequence"],
  ["AI & Gamification Integration", "30%", "Purposeful AI tools plus quests, badges, points, feedback, rewards, and progression"],
  ["Learning Variety", "20%", "Acquisition, inquiry, practice, production, collaboration, discussion, and reflection"],
  ["Scenario Quality", "15%", "Progressive Smart Campus scenario with new constraints at each level"],
  ["Feasibility & Presentation", "15%", "Free/freemium tools, video plan, and classroom-ready assets"]
];

const quiz = [
  {
    question: "What should a project manager do first?",
    options: ["Start coding immediately", "Define scope and stakeholders", "Buy software tools", "Assign random tasks"],
    answer: "Define scope and stakeholders",
    explanation: "Scope and stakeholders define what success means."
  },
  {
    question: "What is a WBS?",
    options: ["A list of employee responsibilities", "A deliverable-oriented decomposition of project work", "A budget approval form", "A meeting agenda"],
    answer: "A deliverable-oriented decomposition of project work",
    explanation: "A WBS breaks the project into deliverables."
  },
  {
    question: "The first schedule is 15 weeks but the deadline is 12. What should the PMO do?",
    options: ["Remove testing", "Hide the delay", "Re-plan using parallel work, scope prioritization, and resource adjustment", "Add extra features"],
    answer: "Re-plan using parallel work, scope prioritization, and resource adjustment",
    explanation: "Schedule compression must be realistic and controlled."
  },
  {
    question: "Planned progress is 50%, actual progress is 38%. What does this mean?",
    options: ["The project is ahead", "The project is behind schedule", "The project is complete", "The budget is automatically healthy"],
    answer: "The project is behind schedule",
    explanation: "Actual progress below planned progress shows schedule pressure."
  },
  {
    question: "What should a PMO recovery briefing include?",
    options: ["Only screenshots", "Only team complaints", "Problem, impact, corrective action, and decision needed from the sponsor", "Only excuses"],
    answer: "Problem, impact, corrective action, and decision needed from the sponsor",
    explanation: "A professional briefing explains the issue, impact, action, and decision needed."
  }
];

function App() {
  const [answers, setAnswers] = useState({});
  const answeredCount = Object.keys(answers).length;
  const score = quiz.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <LayoutDashboard aria-hidden="true" />
          <div>
            <strong>AI in Teaching</strong>
            <span>AUF Workshop</span>
          </div>
        </div>
        <nav>
          <a href="#sessions">Sessions</a>
          <a href="#resources">Resources</a>
          <a href="#project">Final Project</a>
          <a href="#module">PMO Module</a>
          <a href="#runbook">Runbook</a>
          <a href="#production">Assets</a>
          <a href="#assessment">Assessment</a>
          <a href="#video">Video</a>
        </nav>
      </aside>

      <main>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">AUF Workshop — AI Integration in Higher Education</p>
            <h1>AI in Teaching</h1>
            <p className="lede">
              Course materials, lecture slides, tools, and the interactive PMO module — all in one place for students and instructors.
            </p>
            <p className="license-note">Licence / Master · CC-BY-NC · AUF — Soutien à l'intégration de l'IA dans l'enseignement supérieur au Moyen-Orient</p>
            <div className="hero-actions">
              <a className="primary-action" href="#sessions">
                <Presentation aria-hidden="true" />
                View Sessions
              </a>
              <a className="secondary-action" href="#module">
                <GraduationCap aria-hidden="true" />
                PMO Module
              </a>
            </div>
          </div>
          <div className="status-panel">
            <div><span>Sessions</span><strong>4</strong></div>
            <div><span>Level</span><strong>Licence / Master</strong></div>
            <div><span>Language</span><strong>English</strong></div>
            <div><span>License</span><strong>CC-BY-NC</strong></div>
          </div>
        </section>

        {/* SESSIONS */}
        <section className="content-band" id="sessions">
          <div className="section-heading">
            <p className="eyebrow">Lectures</p>
            <h2>Course Sessions</h2>
          </div>
          <div className="session-grid">
            {sessions.map((s) => (
              <article className={`session-card session-${s.color}`} key={s.file}>
                <div className="session-number">{s.number}</div>
                <div className="session-body">
                  <p className="session-topic">{s.title}</p>
                  <h3>{s.subtitle}</h3>
                  <p className="session-desc">{s.description}</p>
                </div>
                <a className="dl-btn" href={`${BASE}${s.file}`} download>
                  <Download size={16} aria-hidden="true" />
                  Download Slides
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* RESOURCES */}
        <section className="content-band" id="resources">
          <div className="section-heading">
            <p className="eyebrow">Downloads</p>
            <h2>Course Resources</h2>
          </div>
          <div className="resource-grid">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <article className="resource-card" key={r.file}>
                  <Icon size={28} aria-hidden="true" />
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                  <a className="dl-btn" href={`${BASE}${r.file}`} download>
                    <Download size={16} aria-hidden="true" />
                    Download
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* FINAL PROJECT */}
        <section className="content-band" id="project">
          <div className="section-heading">
            <p className="eyebrow">AUF Assignment</p>
            <h2>Final Project</h2>
          </div>
          <div className="project-band">
            <div className="project-info">
              <p>Design and gamify a university disciplinary course module that integrates multiple AI tools and diverse learning types to strengthen student engagement, autonomy, and learning.</p>
              <div className="project-meta">
                <div><span>Required deliverables</span><strong>Learning Designer export · Explanatory video · Public link</strong></div>
                <div><span>Highest-weighted criterion</span><strong>AI &amp; Gamification Integration — 30%</strong></div>
                <div><span>License</span><strong>CC-BY-NC recommended</strong></div>
              </div>
            </div>
            <div className="rubric-mini">
              {rubricAlignment.map(([c, w]) => (
                <div key={c} className="rubric-row">
                  <span>{c}</span>
                  <strong>{w}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PMO MODULE */}
        <section className="content-band" id="module">
          <div className="section-heading">
            <p className="eyebrow">Worked Example</p>
            <h2>From Plan to Control: Managing a Project Like a Real PMO</h2>
          </div>
          <p className="module-intro">
            Students act as a PMO team delivering a Smart Campus Mobile App in 12 weeks — planning, building a WBS, optimizing the schedule, reading dashboards, and presenting a recovery plan after a crisis.
          </p>
          <div className="status-panel flat">
            <div><span>Budget</span><strong>$40,000</strong></div>
            <div><span>Deadline</span><strong>12 weeks</strong></div>
            <div><span>Demo</span><strong>Week 6</strong></div>
            <div><span>Main risk</span><strong>Database integration</strong></div>
          </div>

          <div className="section-heading" style={{ marginTop: "32px" }}>
            <p className="eyebrow">Gamification</p>
            <h2>Five PMO Quests</h2>
          </div>
          <div className="quest-grid">
            {quests.map((q) => {
              const Icon = q.icon;
              return (
                <article className="quest-card" key={q.title}>
                  <div className="quest-top">
                    <Icon aria-hidden="true" />
                    <span>{q.level}</span>
                  </div>
                  <h3>{q.title}</h3>
                  <p>{q.mission}</p>
                  <small>Evidence: {q.evidence}</small>
                </article>
              );
            })}
          </div>
          <div className="badge-strip">
            {badges.map((b) => <span key={b}>{b}</span>)}
          </div>
          <div className="objective-grid" style={{ marginTop: "22px" }}>
            <article><ClipboardCheck /><span>Project charter summary</span></article>
            <article><BookOpen /><span>Deliverable-oriented WBS</span></article>
            <article><FileSpreadsheet /><span>Optimized schedule</span></article>
            <article><BarChart3 /><span>Dashboard interpretation</span></article>
            <article><ShieldAlert /><span>Corrective action report</span></article>
            <article><GraduationCap /><span>PMO recovery briefing</span></article>
          </div>
        </section>

        {/* RUNBOOK */}
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
                  <tr key={time}><td>{time}</td><td>{activity}</td><td>{type}</td><td>{tool}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PRODUCTION ASSETS */}
        <section className="content-band" id="production">
          <div className="section-heading">
            <p className="eyebrow">Production Assets</p>
            <h2>Real Materials for Videos, Lectures, and Quizzes</h2>
          </div>
          <p className="module-intro">
            Use these files to record the explanatory video, build the Genially simulation, run the lecture, import quiz questions, and print activity cards.
          </p>
          <div className="resource-grid asset-grid">
            {productionMaterials.map((r) => {
              const Icon = r.icon;
              return (
                <article className="resource-card" key={r.file}>
                  <Icon size={28} aria-hidden="true" />
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                  <a className="dl-btn" href={`${BASE}${r.file}`} download>
                    <Download size={16} aria-hidden="true" />
                    Download
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* ASSESSMENT */}
        <section className="content-band" id="assessment">
          <div className="section-heading">
            <p className="eyebrow">Assessment</p>
            <h2>Rubric Alignment &amp; Quiz</h2>
          </div>
          <div className="assessment-grid">
            <div className="table-wrap">
              <table>
                <thead><tr><th>Criterion</th><th>Weight</th><th>How the module responds</th></tr></thead>
                <tbody>
                  {rubricAlignment.map(([c, w, r]) => (
                    <tr key={c}><td>{c}</td><td>{w}</td><td>{r}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="quiz-panel">
              <div className="quiz-score">
                <strong>Score: {score}/{quiz.length}</strong>
                <span>{answeredCount === quiz.length ? "Quiz complete" : `${answeredCount}/${quiz.length} answered`}</span>
              </div>
              {quiz.map((item, i) => {
                const selected = answers[i];
                const isAnswered = Boolean(selected);
                const isCorrect = selected === item.answer;
                return (
                  <article className="live-question" key={item.question}>
                    <h3>{i + 1}. {item.question}</h3>
                    <div className="option-grid">
                      {item.options.map((option) => (
                        <button
                          className={[
                            "option-button",
                            selected === option ? "selected" : "",
                            isAnswered && option === item.answer ? "correct" : "",
                            selected === option && selected !== item.answer ? "incorrect" : ""
                          ].filter(Boolean).join(" ")}
                          key={option}
                          type="button"
                          onClick={() => setAnswers((current) => ({ ...current, [i]: option }))}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {isAnswered && (
                      <p className={isCorrect ? "feedback correct-text" : "feedback incorrect-text"}>
                        {isCorrect ? "Correct. " : `Not quite. Correct answer: ${item.answer}. `}
                        {item.explanation}
                      </p>
                    )}
                  </article>
                );
              })}
              <button className="reset-quiz" type="button" onClick={() => setAnswers({})}>
                Reset Quiz
              </button>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="content-band" id="video">
          <div className="section-heading">
            <p className="eyebrow">Final Deliverable</p>
            <h2>Explanatory Video Script</h2>
          </div>
          <div className="timeline">
            <article><Video /><strong>0:00–0:45</strong><span>Introduce the module title, audience, and topic.</span></article>
            <article><Video /><strong>0:45–1:45</strong><span>Explain course need and learning objectives.</span></article>
            <article><Video /><strong>1:45–3:00</strong><span>Present the Smart Campus App scenario.</span></article>
            <article><Video /><strong>3:00–4:15</strong><span>Explain levels, quests, points, and badges.</span></article>
            <article><Video /><strong>4:15–5:45</strong><span>Show AI tools and their instructional purpose.</span></article>
            <article><Video /><strong>5:45–10:00</strong><span>Demonstrate activities, assessment, and classroom readiness.</span></article>
          </div>
        </section>

      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
