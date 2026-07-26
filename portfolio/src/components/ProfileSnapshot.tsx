import { useContent } from '../i18n'

export function ProfileSnapshot() {
  const { site, ui } = useContent()

  return (
    <section
      id="profile"
      aria-labelledby="profile-title"
      className="border-t border-line bg-ink px-5 py-16 text-paper md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] space-y-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] md:gap-16">
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
              {ui.profileEyebrow}
            </p>
            <h2
              id="profile-title"
              className="animate-on-scroll font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1] font-bold tracking-[-0.04em]"
            >
              {ui.profileTitle[0]}
              <br />
              {ui.profileTitle[1]}
            </h2>
            <p className="text-sm leading-relaxed text-muted">{site.positioning}</p>
          </div>

          <div className="space-y-5">
            {site.summary.map((paragraph, i) => (
              <p
                key={paragraph}
                className="animate-on-scroll text-sm leading-relaxed text-paper/80"
                style={{ animationDelay: `${0.05 + i * 0.04}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
          {site.highlights.map((item, i) => (
            <li
              key={item.label}
              className="animate-on-scroll bg-ink px-5 py-6"
              style={{ animationDelay: `${0.04 + i * 0.04}s` }}
            >
              <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
                {item.label}
              </p>
              <p className="mt-3 font-display text-xl font-bold tracking-[-0.03em] md:text-2xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{item.note}</p>
            </li>
          ))}
        </ul>

        <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-[11px] tracking-[0.14em] text-muted uppercase">
              {ui.fitForLabel}
            </h3>
            <ul className="space-y-3">
              {site.fitFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/80">
                  <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-signal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[11px] tracking-[0.14em] text-muted uppercase">
              {ui.currentFocusLabel}
            </h3>
            <p className="text-sm leading-relaxed text-paper/80">
              {site.experience.company} · {site.experience.role} · {site.experience.period}
            </p>
            <p className="text-sm leading-relaxed text-paper/70">
              {site.experience.body}
            </p>
            <p className="text-sm text-muted">
              {ui.previousLabel}: {site.previous.company} · {site.previous.role} ·{' '}
              {site.previous.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
