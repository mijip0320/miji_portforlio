import { useContent } from '../i18n'

export function Approach() {
  const { competencies, methods, site, ui } = useContent()

  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="border-t border-line bg-ink px-5 py-20 text-paper md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] space-y-20">
        <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <div className="space-y-6">
            <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
              {ui.approachEyebrow}
            </p>
            <h2
              id="approach-title"
              className="animate-on-scroll font-display text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] font-bold tracking-[-0.045em]"
            >
              {ui.approachTitle[0]}
              <br />
              {ui.approachTitle[1]}
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-paper/80">
              {ui.approachIntro}
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-t border-line pt-8">
              <p className="mb-4 text-[11px] tracking-[0.14em] text-muted uppercase">
                {ui.coreCompetencies}
              </p>
              <ul className="space-y-5">
                {competencies.map((item) => (
                  <li key={item.title} className="space-y-1">
                    <h3 className="font-medium text-paper">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-paper/70">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line pt-8">
              <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
                {ui.educationLicense}
              </p>
              <p className="mt-3 text-sm text-paper/80">
                {site.education} · {site.educationPeriod}
              </p>
              <p className="mt-1 text-sm text-muted">
                {site.license} · {site.languages.join(' · ')}
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] tracking-[0.14em] text-muted uppercase">
            {ui.troubleshooting}
          </p>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-paper/70">
            {ui.troubleshootingIntro}
          </p>

          <ol className="space-y-0 divide-y divide-line border-t border-line">
            {methods.map((method, i) => (
              <li
                key={method.title}
                className="animate-on-scroll grid grid-cols-[3rem_1fr] gap-4 py-8 md:gap-6"
                style={{ animationDelay: `${0.06 + i * 0.06}s` }}
              >
                <span className="pt-1 font-display text-sm font-bold tracking-[0.08em] text-muted">
                  0{i + 1}
                </span>
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-bold tracking-[-0.03em] md:text-2xl">
                    {method.title}
                  </h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-paper/80">
                    {method.body}
                  </p>
                  <p className="max-w-3xl text-sm leading-relaxed text-paper/65">
                    {method.detail}
                  </p>
                  <p className="max-w-3xl text-sm leading-relaxed text-signal/90">
                    {ui.resultLabel}: {method.result}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
