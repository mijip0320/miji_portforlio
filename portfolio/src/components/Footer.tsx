import { useContent, useLocale } from '../i18n'

export function Footer() {
  const { nav, site, ui } = useContent()
  const { locale, setLocale } = useLocale()

  return (
    <footer className="border-t border-line bg-ink px-5 py-12 text-paper md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-lg font-bold tracking-[-0.03em]">{site.name}</p>
          <p className="text-sm text-muted">
            {site.nameKo} · {site.role}
          </p>
        </div>

        <nav aria-label={ui.footerNavAria} className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] tracking-[0.12em] text-paper/80 uppercase transition-opacity duration-200 hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ul className="space-y-1 text-sm text-muted md:text-right">
          <li>{site.location}</li>
          <li>
            {site.education}
            <span className="block text-[12px] opacity-80">{site.educationPeriod}</span>
          </li>
          <li>{site.license}</li>
          <li>{site.languages.join(' · ')}</li>
          <li className="flex items-center gap-2 pt-2 text-[12px] tracking-[0.12em] uppercase md:justify-end">
            <button
              type="button"
              onClick={() => setLocale('ko')}
              aria-pressed={locale === 'ko'}
              className={`cursor-pointer ${locale === 'ko' ? 'text-paper' : 'text-muted hover:text-paper/80'}`}
            >
              KO
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className={`cursor-pointer ${locale === 'en' ? 'text-paper' : 'text-muted hover:text-paper/80'}`}
            >
              EN
            </button>
          </li>
          <li className="pt-2 text-[12px]">
            © {new Date().getFullYear()} {site.name}
          </li>
        </ul>
      </div>
    </footer>
  )
}
