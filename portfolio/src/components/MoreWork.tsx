import { useContent } from '../i18n'

export function MoreWork() {
  const { otherWork, secondary, ui } = useContent()

  return (
    <section
      id="more-work"
      aria-labelledby="more-work-title"
      className="border-t border-line bg-ink px-5 py-20 text-paper md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2
            id="more-work-title"
            className="animate-on-scroll font-display text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[-0.04em]"
          >
            {ui.moreWorkTitle}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">{ui.moreWorkIntro}</p>
        </div>

        <ul className="divide-y divide-line">
          {secondary.map((item, i) => (
            <li
              key={item.title}
              className="animate-on-scroll grid grid-cols-1 gap-5 py-10 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-10"
              style={{ animationDelay: `${0.05 + i * 0.05}s` }}
            >
              <span className="text-[12px] tracking-[0.12em] text-muted uppercase">
                {item.year}
              </span>
              <div className="space-y-5">
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold tracking-[-0.03em] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-paper/80">
                    {item.note}
                  </p>
                  <p className="text-[13px] text-muted">{item.role}</p>
                  <p className="text-[13px] text-muted">{item.stack}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
                      {ui.whatIDid}
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-paper/75">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-3 shrink-0 bg-muted"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[11px] tracking-[0.14em] text-signal uppercase">
                      {ui.outcomesLabel}
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-paper/80">
                      {item.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-3 shrink-0 bg-signal"
                          />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-line pt-12">
          <p className="mb-8 text-[11px] tracking-[0.14em] text-muted uppercase">
            {ui.alsoLabel}
          </p>
          <ul className="divide-y divide-line">
            {otherWork.map((item, i) => (
              <li
                key={item.title}
                className="animate-on-scroll grid grid-cols-1 gap-2 py-5 md:grid-cols-[9rem_minmax(0,1.1fr)_minmax(0,1.6fr)] md:items-baseline md:gap-8"
                style={{ animationDelay: `${0.03 + i * 0.03}s` }}
              >
                <span className="text-[12px] tracking-[0.1em] text-muted uppercase">
                  {item.year}
                </span>
                <span className="font-medium text-paper">{item.title}</span>
                <span className="text-sm leading-relaxed text-muted">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
