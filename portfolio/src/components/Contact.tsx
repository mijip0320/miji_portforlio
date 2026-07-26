import { useContent } from '../i18n'

export function Contact() {
  const { site, ui } = useContent()

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-signal px-5 py-24 text-signal-ink md:px-10 md:py-32"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:gap-16">
        <div className="space-y-5">
          <p className="text-[11px] tracking-[0.14em] uppercase opacity-70">
            {ui.contactEyebrow}
          </p>
          <h2
            id="contact-title"
            className="animate-on-scroll max-w-[14ch] font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-extrabold tracking-[-0.05em]"
          >
            {ui.contactTitle[0]}
            <br />
            {ui.contactTitle[1]}
          </h2>
          <p className="max-w-lg text-[15px] leading-relaxed opacity-80">
            {ui.contactBody}
          </p>
        </div>

        <div className="flex flex-col gap-8 border-t border-signal-ink/20 pt-10 md:flex-row md:items-end md:justify-between">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(ui.contactSubject)}`}
            className="inline-flex w-max items-center gap-4 border-b-2 border-signal-ink pb-2 font-display text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-[-0.03em] transition-opacity duration-200 hover:opacity-70"
          >
            {site.email}
            <span aria-hidden="true">↗</span>
          </a>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] tracking-[0.12em] uppercase opacity-70">
            <li>{site.location}</li>
            <li>{site.role}</li>
            <li>{site.years}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
