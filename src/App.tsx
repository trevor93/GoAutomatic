function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <nav className="sticky top-0 z-50 border-b border-amber-700/20 bg-neutral-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
              alt="NAIM Agency"
              className="h-10 w-10 rounded-full border border-amber-700/30 object-cover"
            />
            <span>
              <span className="block text-xl font-semibold tracking-tight text-white">
                Go<span className="text-amber-400">Automatic</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                by NAIM Agency
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#problem" className="transition hover:text-white">
              The Problem
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#nextstep" className="transition hover:text-white">
              NextStep
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
          </div>

          <a
            href="https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20automate%20my%20business."
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            WhatsApp Me
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="border-b border-white/10 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-amber-400">
              AI Automation for Every Business — NAIM Agency
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              From Inquiry
              <br />
              To Automatic
              <br />
              Growth.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
              We turn the repetitive daily tasks draining your business into fully automated
              systems — so you stop doing the same work every day and start growing on autopilot.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-neutral-200 md:text-base">
              <li>• Every customer question answered instantly — 24/7, no staff needed</li>
              <li>• Daily content created and posted automatically — Instagram, TikTok, Facebook</li>
              <li>• Every new lead guided, followed up, and converted — without you chasing anyone</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20automate%20my%20business."
                className="rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
              >
                💬 WhatsApp for a Free 15-Min Call
              </a>
              <a
                href="#problem"
                className="rounded-md border border-amber-700/30 px-5 py-3 text-sm text-amber-300 transition hover:bg-amber-500/10"
              >
                See What We Build →
              </a>
            </div>
            <p className="mt-3 text-xs text-neutral-400">
              In 15 minutes, we review your current workflow and outline your fastest automation wins.
            </p>

            <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 text-center text-sm sm:grid-cols-2 md:grid-cols-4">
              <div>
                <p className="text-3xl font-semibold text-amber-400">24/7</p>
                <p className="mt-1 text-neutral-400">Automated First-Response Coverage</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-amber-400">2–5h</p>
                <p className="mt-1 text-neutral-400">Weekly Admin Time Saved*</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-amber-400">&lt;5m</p>
                <p className="mt-1 text-neutral-400">Typical First Response Time*</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-amber-400">+1</p>
                <p className="mt-1 text-neutral-400">Reliable Follow-Up System</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              *Estimates vary by business type, lead volume, and current process setup.
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 bg-neutral-900 py-4">
          <div className="mx-auto max-w-6xl overflow-x-auto px-6">
            <div className="flex min-w-max items-center gap-6 text-xs uppercase tracking-widest text-neutral-400">
              <span>Dental Clinics</span>
              <span>•</span>
              <span>Eye & Optical</span>
              <span>•</span>
              <span>SACCOs & Microfinance</span>
              <span>•</span>
              <span>Real Estate</span>
              <span>•</span>
              <span>Gyms & Fitness</span>
              <span>•</span>
              <span>Restaurants</span>
            </div>
          </div>
        </section>

        <section id="problem" className="bg-neutral-950 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">From Manual to Automatic</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                Same Business. Less Stress.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                This is what changes when GoAutomatic goes live inside your business.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start">
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                <h3 className="mb-4 text-xs uppercase tracking-[0.16em] text-red-300">Before GoAutomatic</h3>
                <ul className="space-y-3 text-sm text-neutral-200">
                  <li>💬 Staff repeat the same answers across WhatsApp every day.</li>
                  <li>⏳ New leads wait too long before the first useful response.</li>
                  <li>📱 Follow-up and posting happen inconsistently when things get busy.</li>
                </ul>
              </div>

              <div className="hidden place-items-center md:grid">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-xl font-bold text-black">
                  →
                </div>
              </div>

              <div className="rounded-xl border border-amber-600/30 bg-amber-500/10 p-6">
                <h3 className="mb-4 text-xs uppercase tracking-[0.16em] text-amber-300">After GoAutomatic</h3>
                <ul className="space-y-3 text-sm text-neutral-100">
                  <li>🤖 Common questions get fast, consistent replies automatically.</li>
                  <li>⚡ Leads are acknowledged quickly and routed to the right next step.</li>
                  <li>📲 Core follow-up and content tasks run on a dependable schedule.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="h-0" aria-hidden="true" />
        <section id="nextstep" className="h-0" aria-hidden="true" />
        <section id="pricing" className="h-0" aria-hidden="true" />
      </main>

      <footer className="border-t border-white/10 bg-neutral-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">
              Go<span className="text-amber-400">Automatic</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-neutral-400">
              Practical automation for small businesses that want faster response times and steadier follow-up.
            </p>
          </div>
          <p className="text-xs text-neutral-500">© 2025 GoAutomatic by NAIM Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
