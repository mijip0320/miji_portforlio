import { useEffect } from 'react'

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  const vw = window.innerWidth || document.documentElement.clientWidth
  return rect.bottom > 0 && rect.right > 0 && rect.top < vh && rect.left < vw
}

export function useInViewAnimation(
  selector = '.animate-on-scroll',
  /** Re-bind when locale (or other content identity) changes */
  revision?: string | number,
) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))

    if (nodes.length === 0) return

    const reveal = (el: Element) => {
      el.classList.add('animate')
    }

    if (reduced) {
      nodes.forEach(reveal)
      return
    }

    // Immediately reveal anything already on screen (language switch / remount)
    nodes.forEach((el) => {
      if (isInViewport(el)) reveal(el)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    )

    nodes.forEach((el) => {
      if (!el.classList.contains('animate')) observer.observe(el)
    })

    // Safety: never leave copy stuck invisible
    const fallback = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        if (!el.classList.contains('animate')) reveal(el)
      })
    }, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [selector, revision])
}
