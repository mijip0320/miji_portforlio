import { useContent } from '../i18n'

export function Hero() {
  const { site, ui } = useContent()

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] overflow-hidden px-5 pb-8 pt-24 md:px-10 md:pb-10 md:pt-28"
    >
      <div
        className="absolute inset-x-5 top-20 bottom-10 overflow-hidden md:inset-x-[12%] md:top-24 md:bottom-12"
        role="img"
        aria-label={ui.heroArtLabel}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(118deg,#c97a4a_0_22%,#1e2a3d_22%_46%,#8fa3b5_46%_68%,#24261f_68%)]"
          style={{
            animation: 'hero-drift 1.1s var(--ease-editorial) both',
          }}
        />
        <div
          className="absolute inset-[-8%] opacity-90"
          style={{
            background:
              'radial-gradient(ellipse at 18% 62%, #f0c9a8 0 7%, transparent 8%), radial-gradient(ellipse at 72% 38%, #d7e0e8 0 8%, transparent 9%), linear-gradient(30deg, transparent 47%, rgb(255 255 255 / 0.16) 49% 51%, transparent 53%)',
            animation: 'hero-drift 1.2s var(--ease-editorial) 0.08s both',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(16_16_15/0.15),transparent_30%,rgb(16_16_15/0.35))]" />
      </div>

      <h1
        id="hero-title"
        className="absolute top-[42%] left-1/2 z-10 w-[94%] -translate-x-1/2 -translate-y-1/2 text-center font-display text-[clamp(4.5rem,15vw,13.5rem)] leading-[0.78] font-extrabold tracking-[-0.08em] text-paper mix-blend-difference"
      >
        {site.name.toUpperCase().replace(' ', '\u00A0')}
      </h1>

      <p className="absolute right-5 bottom-14 z-10 max-w-[18rem] text-[13px] leading-relaxed text-paper/90 md:right-[14%] md:bottom-16 md:max-w-[20rem]">
        {site.positioning}
      </p>

      <p className="absolute bottom-14 left-5 z-10 hidden text-[10px] tracking-[0.14em] text-paper/70 uppercase [writing-mode:vertical-rl] md:bottom-16 md:left-10 md:block">
        {site.role} · {site.location} / {site.years}
      </p>
    </section>
  )
}
