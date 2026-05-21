export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Early-Stage Founders &amp; VCs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Compare your startup metrics<br />
          <span className="text-[#58a6ff]">against similar cohorts</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track revenue, churn, and CAC — then benchmark anonymously against startups at your stage and in your industry. Know where you stand, not just where you are.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $29/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Fake metric preview */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-left">
          {[
            { label: "MRR Growth", you: "+12%", cohort: "+9%", good: true },
            { label: "Churn Rate", you: "4.2%", cohort: "3.1%", good: false },
            { label: "CAC", you: "$180", cohort: "$210", good: true }
          ].map((m) => (
            <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-xs text-[#8b949e] mb-1">{m.label}</p>
              <p className="text-xl font-bold text-white">{m.you}</p>
              <p className={`text-xs mt-1 ${m.good ? "text-[#3fb950]" : "text-[#f85149]"}` }>
                Cohort avg: {m.cohort}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to benchmark your startup</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited metric tracking (MRR, churn, CAC, LTV)",
              "Anonymous cohort comparisons by stage & industry",
              "Weekly benchmark email digest",
              "VC-ready export (PDF & CSV)",
              "Secure, anonymized data aggregation"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "How is my data kept anonymous in cohort comparisons?",
              a: "All metrics are aggregated and anonymized before being included in any cohort. No individual startup's data is ever exposed — only statistical summaries are shared."
            },
            {
              q: "What stage and industry filters are available?",
              a: "You can filter cohorts by funding stage (pre-seed, seed, Series A+), industry vertical, business model (B2B SaaS, marketplace, etc.), and ARR range."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel anytime from your billing portal. You'll retain access until the end of your billing period with no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Cohort Tracker. All rights reserved.
      </footer>
    </main>
  );
}
