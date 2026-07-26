import { useCallback, useEffect, useId, useRef, useState } from 'react'
import type { FeaturedProject } from '../i18n'
import { useContent } from '../i18n'

type Props = {
  project: FeaturedProject
  isFirst?: boolean
}

export function ProjectChapter({ project, isFirst = false }: Props) {
  const { ui } = useContent()
  const reactId = useId()
  const buttonId = `case-btn-${project.id}-${reactId}`
  const panelId = `case-panel-${project.id}`
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)

  const openCase = useCallback(() => {
    setOpen(true)
    const next = `#${project.id}`
    if (window.location.hash !== next) {
      history.replaceState(null, '', next)
    }
    requestAnimationFrame(() => {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [project.id])

  const closeCase = useCallback(() => {
    setOpen(false)
    buttonRef.current?.focus()
    if (window.location.hash === `#${project.id}`) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }
  }, [project.id])

  const toggleCase = useCallback(() => {
    if (open) closeCase()
    else openCase()
  }, [open, openCase, closeCase])

  useEffect(() => {
    const syncFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''))
      if (hash === project.id) openCase()
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [project.id, openCase])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeCase()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, closeCase])

  return (
    <>
      <section
        id={isFirst ? 'work' : undefined}
        aria-labelledby={`${project.id}-title`}
        className={`grid min-h-[min(680px,100svh)] grid-cols-1 gap-8 px-5 py-10 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:px-10 md:py-12 ${project.chapterClass}`}
      >
        <div className="flex min-h-[300px] flex-col justify-between gap-8 md:min-h-0 md:pr-4">
          <div className="space-y-5">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase opacity-70">
              {ui.selectedWork} · {project.index}
            </p>
            <h2
              id={`${project.id}-title`}
              className="max-w-[12ch] font-display text-[clamp(2.6rem,6.5vw,5.8rem)] leading-[0.88] font-extrabold tracking-[-0.05em]"
            >
              {project.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="max-w-lg text-[15px] leading-relaxed opacity-85">
              {project.hook}
            </p>

            <div className="max-w-lg space-y-3 border-t border-ink/15 pt-5">
              <p className="text-[11px] tracking-[0.14em] uppercase opacity-55">
                {ui.impactLabel}
              </p>
              <ul className="space-y-2.5">
                {project.impact.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[13px] leading-relaxed opacity-90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-3 shrink-0 bg-current opacity-50"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <dl className="grid max-w-lg gap-2 text-[13px] leading-relaxed">
              <div className="grid grid-cols-[4.5rem_1fr] gap-3 border-t border-ink/15 pt-3">
                <dt className="opacity-55">{ui.roleLabel}</dt>
                <dd>{project.role}</dd>
              </div>
              <div className="grid grid-cols-[4.5rem_1fr] gap-3 border-t border-ink/15 pt-3">
                <dt className="opacity-55">{ui.scopeLabel}</dt>
                <dd>{project.scope}</dd>
              </div>
              <div className="grid grid-cols-[4.5rem_1fr] gap-3 border-t border-ink/15 pt-3">
                <dt className="opacity-55">{ui.yearLabel}</dt>
                <dd>{project.year}</dd>
              </div>
              <div className="grid grid-cols-[4.5rem_1fr] gap-3 border-t border-ink/15 pt-3">
                <dt className="opacity-55">{ui.stackLabel}</dt>
                <dd>{project.stack}</dd>
              </div>
            </dl>

            <button
              ref={buttonRef}
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={toggleCase}
              className="inline-flex w-max cursor-pointer items-center gap-4 border-b-2 border-current pb-1.5 text-[14px] font-semibold tracking-wide transition-opacity duration-200 hover:opacity-65"
            >
              {open ? ui.closeCase : ui.viewCase}
            </button>
          </div>
        </div>

        <div
          className={`group relative aspect-square min-h-[240px] w-full overflow-hidden md:aspect-auto md:min-h-full ${project.mediaClass}`}
          role="img"
          aria-label={project.mediaLabel}
        >
          <div
            className="absolute inset-0 transition-transform duration-[620ms] ease-[var(--ease-editorial)] group-hover:scale-[1.02] group-focus-within:scale-[1.02] motion-reduce:transition-none"
            style={{
              background:
                'radial-gradient(circle at 58% 32%, rgb(255 255 255 / 0.28) 0 8%, transparent 9%), linear-gradient(90deg, transparent 48%, rgb(16 16 15 / 0.28) 49% 51%, transparent 52%)',
            }}
          />
        </div>
      </section>

      {open ? (
        <section
          id={project.id}
          ref={panelRef}
          role="region"
          aria-labelledby={`${project.id}-case-title`}
          className="border-t border-line bg-ink px-5 py-16 text-paper md:px-10 md:py-20"
        >
          <div id={panelId} className="mx-auto max-w-[1200px] space-y-12">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="text-[11px] tracking-[0.14em] text-signal uppercase">
                  {ui.caseOpen} · {project.index}
                </p>
                <h3
                  id={`${project.id}-case-title`}
                  className="font-display text-2xl font-bold tracking-[-0.03em] md:text-3xl"
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{project.scope}</p>
              </div>
              <button
                type="button"
                onClick={closeCase}
                className="cursor-pointer border border-line px-3 py-2 text-[12px] tracking-[0.12em] text-muted uppercase transition-colors duration-200 hover:border-paper hover:text-paper"
              >
                {ui.closeEsc}
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.45fr)] md:gap-14">
              <p className="text-[15px] leading-relaxed text-paper/85">
                {project.overview}
              </p>
              <p className="text-sm leading-relaxed text-paper/70">
                <span className="mr-2 text-[11px] tracking-[0.12em] text-muted uppercase">
                  {ui.problemLabel}
                </span>
                {project.problem}
              </p>
            </div>

            <div className="border border-signal/40 bg-signal/10 px-5 py-6 md:px-8 md:py-8">
              <p className="mb-4 text-[11px] tracking-[0.14em] text-signal uppercase">
                {ui.outcomesLabel}
              </p>
              <ul className="grid gap-4 md:grid-cols-3">
                {project.outcomes.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-paper/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-14">
              {project.sections.map((section) => (
                <div key={section.label} className="space-y-4">
                  <h4 className="text-[11px] tracking-[0.14em] text-muted uppercase">
                    {section.label}
                  </h4>
                  <ul className="space-y-3 text-sm leading-relaxed text-paper/80">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-3 shrink-0 bg-muted"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-line pt-8">
              <h4 className="mb-3 text-[11px] tracking-[0.14em] text-muted uppercase">
                {ui.learningLabel}
              </h4>
              <p className="max-w-3xl text-[15px] leading-relaxed text-paper/85">
                {project.learning}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div id={project.id} className="sr-only" aria-hidden="true">
          {project.title} {ui.caseCollapsed}
        </div>
      )}
    </>
  )
}
