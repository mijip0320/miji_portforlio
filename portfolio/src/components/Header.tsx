import { useContent, useLocale } from '../i18n'

export function Header() {
  const { nav, site, ui } = useContent()
  const { locale, setLocale } = useLocale()
  const left = nav.slice(0, 2)
  const right = nav.slice(2)

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <nav
        aria-label={ui.navAria}
        className="pointer-events-auto mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 py-5 md:px-10 md:py-6"
      >
        <div className="hidden items-center gap-5 sm:flex">
          {left.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.14em] text-paper/90 uppercase transition-opacity duration-200 hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#top"
          className="justify-self-start font-display text-lg font-extrabold tracking-[-0.04em] text-paper sm:justify-self-center md:text-xl"
        >
          {site.name}
        </a>

        <div className="flex items-center justify-end gap-4 md:gap-5">
          {right.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.14em] text-paper/90 uppercase transition-opacity duration-200 hover:opacity-70"
            >
              {item.label}
            </a>
          ))}

          <div
            className="ml-1 flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] uppercase"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLocale('ko')}
              aria-pressed={locale === 'ko'}
              className={`cursor-pointer transition-opacity duration-200 ${
                locale === 'ko' ? 'text-paper' : 'text-paper/45 hover:text-paper/75'
              }`}
            >
              KO
            </button>
            <span className="text-paper/35" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`cursor-pointer transition-opacity duration-200 ${
                locale === 'en' ? 'text-paper' : 'text-paper/45 hover:text-paper/75'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
