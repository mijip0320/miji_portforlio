import { useEffect, useState } from 'react'
import { useContent } from '../i18n'

export function Capabilities() {
  const { capabilities, site, ui } = useContent()
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    if (!openId) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenId(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openId])

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="border-t border-line bg-ink px-5 py-20 text-paper md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <div className="space-y-3">
            <h2
              id="capabilities-title"
              className="text-[11px] tracking-[0.14em] text-muted uppercase"
            >
              {ui.capabilitiesEyebrow}
            </h2>
            <p className="max-w-xl font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold tracking-[-0.035em]">
              {ui.capabilitiesTitle}
            </p>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted md:block">
            {ui.capabilitiesHint}
          </p>
        </div>

        <ul className="space-y-0">
          {capabilities.map((item, i) => {
            const id = `capability-${i}`
            const panelId = `${id}-panel`
            const open = openId === id

            return (
              <li key={item.title} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    id={id}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : id)}
                    className="group flex w-full cursor-pointer items-baseline justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-signal md:py-8"
                  >
                    <span className="font-display text-[clamp(1.45rem,3.8vw,2.8rem)] leading-[1.1] font-bold tracking-[-0.035em]">
                      {item.title}
                    </span>
                    <span className="flex shrink-0 items-center gap-3 text-sm tracking-[0.12em] text-muted uppercase transition-colors duration-200 group-hover:text-signal">
                      <span aria-hidden="true">{open ? '−' : '+'}</span>
                      0{i + 1}
                    </span>
                  </button>
                </h3>

                {open ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={id}
                    className="border-t border-line/60 pb-8 pt-5"
                  >
                    <p className="max-w-3xl text-sm leading-relaxed text-paper/80">
                      {item.description}
                    </p>

                    <ul className="mt-5 max-w-3xl space-y-3">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-sm leading-relaxed text-paper/70"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-3 shrink-0 bg-signal"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-[13px] leading-relaxed text-muted">
                      {ui.relatedExperience}: {item.proof}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {item.related.map((link) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          className="text-[13px] tracking-wide text-signal underline-offset-4 transition-opacity duration-200 hover:underline hover:opacity-80"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            )
          })}
        </ul>

        <div className="mt-16 grid gap-8 border-t border-line pt-12 md:grid-cols-2 lg:grid-cols-4">
          {(
            [
              [ui.skillFrontend, site.skills.frontend],
              [ui.skillUi, site.skills.ui],
              [ui.skillCollab, site.skills.tools],
              [ui.skillBackend, site.skills.backend],
            ] as const
          ).map(([label, items]) => (
            <div key={label} className="space-y-3">
              <p className="text-[11px] tracking-[0.14em] text-muted uppercase">{label}</p>
              <p className="text-sm leading-relaxed text-paper/75">{items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
