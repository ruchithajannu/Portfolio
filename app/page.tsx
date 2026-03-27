export default function PortfolioWebsite() {
  const topSkills = [
    {
      title: "Backend Development",
      description: "Building secure and scalable backend systems with FastAPI, Django, Flask, REST APIs, and PostgreSQL.",
      icon: "⚙️",
      bg: "bg-violet-100",
    },
    {
      title: "Machine Learning",
      description: "Developing applied ML systems using transformers, NLP, and real-world applications.",
      icon: "🤖",
      bg: "bg-pink-100",
    },
    {
      title: "Cloud & Systems",
      description: "Working with AWS, Docker, Kubernetes, Linux, and system design.",
      icon: "☁️",
      bg: "bg-sky-100",
    },
  ];

  const skillProgress = [
    { name: "Python", value: "95%", width: "95%", icon: "⌨️" },
    { name: "Machine Learning", value: "90%", width: "90%", icon: "🧠" },
    { name: "Deep Learning", value: "80%", width: "80%", icon: "🧬" },
    { name: "NLP", value: "90%", width: "90%", icon: "💬" },
    { name: "SQL", value: "85%", width: "85%", icon: "🗄️" },
    { name: "FastAPI", value: "85%", width: "85%", icon: "⚡" },
    { name: "Django", value: "80%", width: "80%", icon: "🌐" },
    { name: "Data Structures", value: "85%", width: "85%", icon: "📚" },
  ];

  const projects = [
    {
      title: "Task Manager API",
      description:
        "Built a production-ready task management backend with JWT authentication, task filtering, pagination, and user-specific task ownership using FastAPI and SQLAlchemy.",
      impact: "Secure backend architecture with authentication and scalable API design.",
      tags: ["FastAPI", "SQLAlchemy", "JWT", "SQLite"],
      github: "https://github.com/ruchithajannu/Task-Manager-API",
      demo: "#",
      icon: "🧩",
      bg: "bg-violet-100",
    },
    {
      title: "Transformer-Based Code Completion",
      description:
        "Benchmarked LSTM, BERT, CodeBERT, and CodeGPT models on the GitHub Java Corpus to compare prediction accuracy, inference latency, and context scaling.",
      impact: "Evaluated model tradeoffs for real-world developer tooling use cases.",
      tags: ["PyTorch", "Transformers", "NLP", "CodeGPT"],
      github: "#",
      demo: "#",
      icon: "💻",
      bg: "bg-pink-100",
    },
    {
      title: "AI-Generated Document Detection",
      description:
        "Created a multimodal machine learning pipeline combining DetectGPT, Fast-DetectGPT, and visual forensics to classify AI-generated documents.",
      impact: "Built a Flask app for real-time submission and classification.",
      tags: ["Flask", "ML", "NLP", "Python"],
      github: "#",
      demo: "#",
      icon: "📄",
      bg: "bg-sky-100",
    },
  ];

  const achievements = [
    "Built production-style backend applications with authentication and database design.",
    "Optimized APIs and database queries, reducing page load time by 35% and API latency by 40%.",
    "Benchmarked transformer models for code completion and applied NLP in real-world projects.",
    "Strong foundation in algorithms, system design, databases, and software engineering fundamentals.",
  ];

  return (
    <div className="min-h-screen bg-[#f6f2f8] text-slate-900">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(244,114,182,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_35%)]" />

      <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-[1.75rem] border border-white/60 bg-white/90 px-6 py-4 shadow-sm backdrop-blur">
          <div className="bg-gradient-to-r from-violet-500 via-pink-500 to-sky-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
            RJ
          </div>

          <nav className="hidden items-center gap-8 text-lg md:flex">
            <a href="#home" className="font-medium text-violet-500">Home</a>
            <a href="#about" className="text-slate-800 transition hover:text-violet-500">About</a>
            <a href="#projects" className="text-slate-800 transition hover:text-violet-500">Projects</a>
            <a href="#contact" className="text-slate-800 transition hover:text-violet-500">Contact</a>
            <a
              href="#contact"
              className="rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-6 py-3 font-medium text-white shadow-md"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-20">
        <section id="home" className="text-center">
          <div className="mx-auto inline-flex items-center rounded-full border border-white/70 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            ✨ Smart Tech Girl
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-slate-900">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-sky-400 bg-clip-text text-transparent">
              Ruchitha Jannu
            </span>
          </h1>

          <p className="mt-6 text-2xl font-medium text-slate-800 sm:text-3xl">
            Software Engineer | Backend Developer
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Turning ideas into reliable APIs, scalable backend systems, and intelligent software
            using Python, FastAPI, Django, Flask, PostgreSQL, and machine learning.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-pink-200"
            >
              See My Projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-slate-400 bg-white px-8 py-4 text-lg font-semibold text-slate-800"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {topSkills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-8 text-center shadow-sm"
            >
              <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${skill.bg}`}>
                {skill.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{skill.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">{skill.description}</p>
            </div>
          ))}
        </section>

        <section id="about" className="mt-24">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-sky-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              A passionate software engineer focused on backend systems, applied AI, and building useful products.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-sm sm:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-4xl font-extrabold text-slate-900">Hi, I&apos;m Ruchitha! 👋</h3>
                <div className="mt-6 space-y-6 text-lg leading-9 text-slate-700">
                  <p>
                    I&apos;m a Master of Science student in Computer Science at Arizona State University
                    with a strong interest in building reliable software systems and intelligent applications.
                    My background combines backend development, API optimization, databases, and machine learning.
                  </p>
                  <p>
                    I enjoy turning ideas into practical solutions, whether that means designing secure
                    FastAPI services, optimizing Django applications, or experimenting with transformer-based
                    models for real-world use cases.
                  </p>
                  <p>
                    I&apos;m actively looking for software engineering opportunities where I can contribute
                    across backend systems, APIs, and machine learning-driven products.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full max-w-xl rounded-[1.75rem] bg-[#f7f1ea] p-4">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-rose-100 via-white to-sky-100 text-8xl shadow-inner">
                    👩‍💻
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-slate-400" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                </div>
                <div className="mt-5 text-center text-slate-800">
                  <p className="text-2xl font-semibold">Software Engineer</p>
                  <p className="text-xl">Backend Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Technical{" "}
              <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-sky-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skillProgress.map((skill) => (
              <div
                key={skill.name}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-400 to-pink-400 text-xl text-white">
                      {skill.icon}
                    </div>
                    <p className="text-2xl font-semibold text-slate-900">{skill.name}</p>
                  </div>
                  <p className="text-xl text-slate-700">{skill.value}</p>
                </div>

                <div className="mt-5 h-2.5 rounded-full bg-slate-200">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
                    style={{ width: skill.width }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-2xl">
                  🏆
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Achievements</h3>
              </div>

              <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-700">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                  🎓
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Education</h3>
              </div>

              <div className="mt-6 space-y-8 text-slate-700">
                <div>
                  <p className="text-2xl font-semibold text-slate-900">
                    Master of Science in Computer Science
                  </p>
                  <p className="mt-1 text-lg">Arizona State University</p>
                  <p className="text-lg">Aug 2025 - May 2027</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-slate-900">
                    Bachelor of Technology in Computer Science & Engineering
                  </p>
                  <p className="mt-1 text-lg">SRM University, AP</p>
                  <p className="text-lg">Sept 2021 - May 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              My{" "}
              <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-sky-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Real-world software engineering and machine learning projects that reflect technical depth.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-sm"
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${project.bg}`}>
                  {project.icon}
                </div>

                <h3 className="text-3xl font-bold leading-tight text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-700">
                  {project.description}
                </p>

                <div className="mt-6 rounded-[1.5rem] bg-pink-50 px-5 py-4">
                  <p className="text-lg font-medium text-violet-500">💡 Impact:</p>
                  <p className="mt-1 text-lg text-slate-700">{project.impact}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    className="flex-1 rounded-2xl border border-slate-400 px-6 py-3 text-center text-lg font-medium text-slate-800"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-6 py-3 text-center text-lg font-medium text-white"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-sky-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-sm sm:p-10">
              <h3 className="text-3xl font-bold text-slate-900">Send a Message</h3>

              <form className="mt-8 space-y-6">
                <div>
                  <label className="mb-3 block text-lg font-medium text-slate-800">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-400 bg-transparent px-5 py-4 text-base outline-none"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-lg font-medium text-slate-800">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-2xl border border-slate-400 bg-transparent px-5 py-4 text-base outline-none"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-lg font-medium text-slate-800">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or just say hi!"
                    className="w-full rounded-2xl border border-slate-400 bg-transparent px-5 py-4 text-base outline-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-7 py-4 text-lg font-semibold text-white"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-sm sm:p-10">
                <h3 className="text-3xl font-bold text-slate-900">Let&apos;s Connect</h3>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  I&apos;m always excited to collaborate on innovative software projects and discuss new opportunities.
                  Feel free to reach out through any of these channels.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
                      ✉️
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-slate-900">Email</p>
                      <a
                        href="mailto:ruchitharao2020@gmail.com"
                        className="text-lg text-slate-600 hover:text-violet-500"
                      >
                        ruchitharao2020@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-2xl font-bold">
                      in
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-slate-900">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/ruchitha-jannu-5753b4229/"
                        className="text-lg text-slate-600 hover:text-violet-500"
                      >
                        /ruchitha-jannu-5753b4229
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                      🐙
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-slate-900">GitHub</p>
                      <a
                        href="https://github.com/ruchithajannu"
                        className="text-lg text-slate-600 hover:text-violet-500"
                      >
                        /ruchithajannu
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-gradient-to-r from-violet-50 via-pink-50 to-sky-50 p-8 shadow-sm">
                <p className="text-2xl italic leading-9 text-slate-700">
                  “I love building software that is clean, useful, and impactful.”
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
