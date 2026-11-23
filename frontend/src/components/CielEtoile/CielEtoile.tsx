import { useEffect, useRef } from 'react'
import './CielEtoile.scss'

const hauteurMotif = 480

export function CielEtoile() {
  const fond = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ciel = fond.current
    if (!ciel) return

    const parallaxe = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)')
    let frame = 0

    function actualiser() {
      frame = 0
      const defilement = Math.max(0, window.scrollY)
      ciel?.style.setProperty('--etoiles-lointaines-y', `${-((defilement * .06) % hauteurMotif)}px`)
      ciel?.style.setProperty('--etoiles-proches-y', `${-((defilement * .14) % hauteurMotif)}px`)
    }

    function auDefilement() {
      if (!frame) frame = window.requestAnimationFrame(actualiser)
    }

    function ajusterParallaxe() {
      window.removeEventListener('scroll', auDefilement)
      window.cancelAnimationFrame(frame)
      frame = 0
      if (!parallaxe.matches) return

      actualiser()
      window.addEventListener('scroll', auDefilement, { passive: true })
    }

    ajusterParallaxe()
    parallaxe.addEventListener('change', ajusterParallaxe)
    return () => {
      parallaxe.removeEventListener('change', ajusterParallaxe)
      window.removeEventListener('scroll', auDefilement)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={fond}
      className="ciel-etoile"
      aria-hidden="true"
      style={{ '--hauteur-motif': `${hauteurMotif}px` } as React.CSSProperties}
    >
      <div className="ciel-etoile__couche ciel-etoile__couche--lointaine" />
      <div className="ciel-etoile__couche ciel-etoile__couche--proche" />
    </div>
  )
}
