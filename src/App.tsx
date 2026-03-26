function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <nav className="sticky top-0 z-50 border-b border-amber-700/20 bg-neutral-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-amber-400 text-sm font-bold text-black">
              <img
                src="/naim-agency-logo.webp"
                alt="NAIM Agency logo"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
              <span>GA</span>
            </span>
            <span>
              <span className="block text-xl font-semibold tracking-tight">
                Go<span className="text-amber-400">Automatic</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-400">
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
              <li>
                • Daily content created and posted automatically — Instagram, TikTok, Facebook
              </li>
              <li>
                • Every new lead guided, followed up, and converted — without you chasing anyone
              </li>
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

        <section id="services" className="border-b border-white/10 bg-neutral-900 py-4">
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

        <section id="nextstep" className="border-t border-white/10 bg-neutral-900/40 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">
                NextStep — Inside GoAutomatic
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
                From Inquiry to
                <br />
                Confirmed Next Step.
              </h2>
              <p className="mt-5 text-neutral-300">
                Most businesses lose clients not because their service is bad — but because the path
                from &quot;I&apos;m interested&quot; to &quot;I&apos;m booked&quot; is confusing and broken.
                NextStep fixes that gap automatically.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-white/10 bg-neutral-950 p-6">
                <p className="text-3xl font-semibold text-amber-400">1</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Someone Shows Interest</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  A patient, client, or customer clicks your WhatsApp link, sends a DM, or fills a
                  form. Instead of confusion — they enter one clean guided path.
                </p>
              </article>

              <article className="rounded-xl border border-white/10 bg-neutral-950 p-6">
                <p className="text-3xl font-semibold text-amber-400">2</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Smart Questions Asked</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  NextStep asks 3–6 smart questions. Which branch? What service? Urgent or not?
                  Documents ready? It collects exactly what the business needs — nothing more.
                </p>
              </article>

              <article className="rounded-xl border border-white/10 bg-neutral-950 p-6">
                <p className="text-3xl font-semibold text-amber-400">3</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Routed to the Right Person</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  The inquiry is sent to the right desk, branch, or department — with clean
                  information ready. Staff never start from zero again.
                </p>
              </article>

              <article className="rounded-xl border border-white/10 bg-neutral-950 p-6">
                <p className="text-3xl font-semibold text-amber-400">4</p>
                <h3 className="mt-3 text-lg font-semibold text-white">Followed Up Automatically</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  If the person stops halfway, NextStep sends a reminder. No lead falls through. No
                  client gets lost. Every inquiry reaches its next step — automatically.
                </p>
              </article>
            </div>

            <div className="mt-14">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                NextStep Works in Every Niche
              </h3>
              <p className="mt-3 max-w-3xl text-neutral-300">
                The same engine. Different pain. Different niche. One solution that scales across
                every industry.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">🦷</p>
                  <h4 className="mt-3 text-base font-semibold text-white">Dental Clinic</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Patient inquiry → which branch? → what treatment? → preferred date → confirmed
                    appointment booked automatically
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">💳</p>
                  <h4 className="mt-3 text-base font-semibold text-white">SACCO / Microfinance</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Loan enquiry → BOSA or FOSA? → loan type? → amount? → documents ready? → sent to
                    right desk with clean file
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">🏠</p>
                  <h4 className="mt-3 text-base font-semibold text-white">Real Estate</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Property interest → budget? → location? → buy or rent? → timeline? → qualified
                    lead sent to agent instantly
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">🏨</p>
                  <h4 className="mt-3 text-base font-semibold text-white">Hotel / Hospitality</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Guest inquiry → dates? → room type? → guests? → special needs? → confirmed
                    booking or staff callback scheduled
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">🎓</p>
                  <h4 className="mt-3 text-base font-semibold text-white">School / Training</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Parent inquiry → which program? → age? → start date? → application automatically
                    sent and followed up
                  </p>
                </article>

                <article className="rounded-xl border border-amber-700/20 bg-amber-500/5 p-5">
                  <p className="text-2xl">💪</p>
                  <h4 className="mt-3 text-base font-semibold text-white">Gym / Fitness</h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Membership inquiry → which location? → goal? → schedule? → class type? →
                    enrollment confirmed in one flow
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-white/10 bg-neutral-950 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">Simple Monthly Pricing</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
                One Monthly Fee.
                <br />
                Everything Automated.
              </h2>
              <p className="mt-5 text-neutral-300">
                No setup fees. No long-term contracts. Cancel anytime. We earn your business every
                month by delivering real, measurable results.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <article className="rounded-xl border border-white/10 bg-neutral-900/70 p-6">
                <h3 className="text-xl font-semibold text-white">Starter</h3>
                <p className="mt-4 text-4xl font-semibold text-amber-400">$397</p>
                <p className="mt-1 text-sm text-neutral-400">per month · cancel anytime</p>
                <ul className="mt-6 space-y-3 text-sm text-neutral-200">
                  <li>• AI Customer Reply (WhatsApp)</li>
                  <li>• 15 AI Posts Per Month</li>
                  <li>• Instagram Auto-Posting</li>
                  <li>• Monthly Report</li>
                  <li className="text-neutral-500">• NextStep Lead Routing (not included)</li>
                  <li className="text-neutral-500">• TikTok + Facebook Posting (not included)</li>
                  <li className="text-neutral-500">
                    • Automated Follow-Up Sequences (not included)
                  </li>
                </ul>
                <a
                  href="https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20get%20started%20with%20the%20Starter%20plan."
                  className="mt-8 inline-flex rounded-md border border-amber-700/40 px-4 py-2 text-sm font-medium text-amber-300 transition hover:bg-amber-500/10"
                >
                  Get Started →
                </a>
              </article>

              <article className="relative rounded-xl border border-amber-500/40 bg-amber-500/10 p-6">
                <span className="absolute -top-3 right-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-black">
                  Most Popular
                </span>
                <h3 className="text-xl font-semibold text-white">Growth</h3>
                <p className="mt-4 text-4xl font-semibold text-amber-300">$697</p>
                <p className="mt-1 text-sm text-amber-100/80">per month · cancel anytime</p>
                <ul className="mt-6 space-y-3 text-sm text-neutral-100">
                  <li>• AI Replies — WhatsApp + DM + Email</li>
                  <li>• 30 AI Posts Per Month</li>
                  <li>• Instagram + TikTok + Facebook Auto-Posting</li>
                  <li>• NextStep Lead Routing System</li>
                  <li>• Automated 7-Day Follow-Up Sequence</li>
                  <li>• Weekly Performance Report</li>
                  <li>• Priority WhatsApp Support</li>
                </ul>
                <a
                  href="https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20start%20the%20Growth%20plan."
                  className="mt-8 inline-flex rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
                >
                  Start Growing Now →
                </a>
              </article>

              <article className="rounded-xl border border-white/10 bg-neutral-900/70 p-6">
                <h3 className="text-xl font-semibold text-white">Multi-Location / Agency</h3>
                <p className="mt-4 text-4xl font-semibold text-amber-400">$1,200</p>
                <p className="mt-1 text-sm text-neutral-400">per month · cancel anytime</p>
                <ul className="mt-6 space-y-3 text-sm text-neutral-200">
                  <li>• Everything in Growth Plan</li>
                  <li>• Up to 3 Business Locations</li>
                  <li>• 60+ AI Posts Per Month</li>
                  <li>• Bilingual Content (any 2 languages)</li>
                  <li>• Multi-Branch NextStep Routing</li>
                  <li>• Custom AI Brand Persona</li>
                  <li>• Dedicated Account Manager</li>
                </ul>
                <a
                  href="https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20discuss%20the%20Multi-Location%20or%20Agency%20plan."
                  className="mt-8 inline-flex rounded-md border border-amber-700/40 px-4 py-2 text-sm font-medium text-amber-300 transition hover:bg-amber-500/10"
                >
                  Let&apos;s Talk →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-950 py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-400">
              For Businesses Ready for Real-Time Results
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
              Built for Every Business
              <br />
              That Has a Process.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-neutral-300">
              If your team handles leads, replies to customers, follows up, books appointments, or
              posts content — GoAutomatic can automate it.
            </p>

            <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
                <p className="text-sm font-semibold text-amber-300">Healthcare</p>
                <p className="mt-2 text-sm text-neutral-300">
                  Dental, eye care, clinics, and wellness centers.
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
                <p className="text-sm font-semibold text-amber-300">Finance</p>
                <p className="mt-2 text-sm text-neutral-300">
                  SACCOs, microfinance teams, and loan desks.
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
                <p className="text-sm font-semibold text-amber-300">Hospitality & Retail</p>
                <p className="mt-2 text-sm text-neutral-300">
                  Hotels, restaurants, salons, and local stores.
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
                <p className="text-sm font-semibold text-amber-300">Property & Education</p>
                <p className="mt-2 text-sm text-neutral-300">
                  Real estate agents, schools, and training centers.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-900/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">Client-Ready. Built for You.</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                One System.
                <br />
                Real Execution.
              </h2>
              <p className="mt-5 text-neutral-300">
                We build everything around your business workflow, your brand tone, and your real
                customer journey — so automation feels natural from day one.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-xl border border-amber-700/25 bg-amber-500/5 p-6">
                <h3 className="text-base font-semibold text-white">Business-Specific Setup</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  We map your process and build around your branch flow, service logic, and team handoff.
                </p>
              </article>
              <article className="rounded-xl border border-amber-700/25 bg-amber-500/5 p-6">
                <h3 className="text-base font-semibold text-white">Human + AI Experience</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  Customers get fast smart replies while your team receives clean lead context.
                </p>
              </article>
              <article className="rounded-xl border border-amber-700/25 bg-amber-500/5 p-6">
                <h3 className="text-base font-semibold text-white">Performance Visibility</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  You get clear weekly/monthly reporting so decisions are based on real numbers.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-950 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">Stop Losing Time and Leads</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">FAQs</h2>
            </div>
            <div className="mt-10 space-y-4">
              {[
                'How long does setup take?',
                'Do I need new software to use GoAutomatic?',
                'Can this work with my current WhatsApp number?',
                'What if I need custom workflows for my business?',
                'Can I cancel if it is not a fit?',
              ].map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-white/10 bg-neutral-900/60 px-5 py-4 text-sm text-neutral-200"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-950 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-amber-400">Final Step</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
              Ready to Stop Losing Time
              <br />
              in Your Business?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-neutral-300">
              Book your free 15-minute call and we will show you exactly what to automate first.
            </p>
            <a
              href="https://wa.me/254751772123?text=Hi%20NAIM%20Agency%2C%20I%20want%20to%20book%20my%20free%2015-minute%20call."
              className="mt-8 inline-flex rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
            >
              Book my free call now →
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-amber-400 text-sm font-bold text-black">
                  <img
                    src="/naim-agency-logo.webp"
                    alt="NAIM Agency logo"
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                  <span>GA</span>
                </span>
                <div>
                  <p className="text-xl font-semibold text-white">
                    Go<span className="text-amber-400">Automatic</span>
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">by NAIM Agency</p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400">
                AI-powered automation for businesses tired of doing the same manual work every single
                day. We build the systems. You collect the results.
              </p>

              <div className="mt-8 space-y-3 text-sm text-neutral-300">
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Contact</p>
                <p>💬 WhatsApp Us</p>
                <p>📞 +254 751 772 123</p>
                <p>✉️ salminabdalla93@gmail.com</p>
                <p>📅 Free 15-Min Call</p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Services</p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li>AI Customer Replies</li>
                <li>Daily Content Automation</li>
                <li>NextStep Lead Routing</li>
                <li>Automated Follow-Up</li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">We Serve</p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li>Dental &amp; Eye Clinics</li>
                <li>SACCOs &amp; Microfinance</li>
                <li>Real Estate &amp; Gyms</li>
                <li>Restaurants &amp; Salons</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex md:items-center md:justify-between">
            <p>© 2025 GoAutomatic by NAIM Agency. All rights reserved.</p>
            <p className="mt-3 md:mt-0">
              Powered by <span className="text-amber-300">NAIM Agency</span> · Kenya Data Protection
              Act Compliant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
