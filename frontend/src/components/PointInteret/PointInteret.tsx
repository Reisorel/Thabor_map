import { useEffect, useRef } from 'react'
import type { Etape } from '../../DataBase'
import './PointInteret.scss'

const dureeEtincelle = 10000
const intervalleEtincelles = 750
const nombreEtincelles = Math.ceil(dureeEtincelle / intervalleEtincelles) + 1

function Etincelles() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const etincelles = ref.current?.querySelectorAll<HTMLSpanElement>('.point-interet__etincelle')
    if (!etincelles?.length) return

    const mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)')
    let depart: number | undefined
    let intervalle: number | undefined
    let index = 0

    function lancerEtincelle() {
      if (!etincelles || mouvementReduit.matches) return
      const etincelle = etincelles[index]
      index = (index + 1) % etincelles.length

      const angle = Math.random() * 2 * Math.PI
      const portee = 1.1 + Math.random() * .8
      const taille = .65 + Math.random() * .55
      const position = (rayon: number, echelle: number) => {
        const x = Math.cos(angle) * rayon
        const y = Math.sin(angle) * rayon
        return `translate(calc(var(--diametre-coeur) * ${x}), calc(var(--diametre-coeur) * ${y})) scale(${echelle})`
      }

      etincelle.getAnimations().forEach((animation) => animation.cancel())
      etincelle.animate([
        { opacity: 0, transform: position(.45, taille) },
        { opacity: .85, offset: .2 },
        { opacity: 0, transform: position(portee, taille * .55) },
      ], {
        duration: dureeEtincelle,
        easing: 'ease-out',
      })
    }

    function arreterEtincelles() {
      window.clearTimeout(depart)
      window.clearInterval(intervalle)
      etincelles?.forEach((etincelle) => {
        etincelle.getAnimations().forEach((animation) => animation.cancel())
      })
    }

    function ajusterMouvement() {
      arreterEtincelles()
      if (mouvementReduit.matches) return

      depart = window.setTimeout(() => {
        lancerEtincelle()
        intervalle = window.setInterval(lancerEtincelle, intervalleEtincelles)
      }, Math.random() * intervalleEtincelles)
    }

    ajusterMouvement()
    mouvementReduit.addEventListener('change', ajusterMouvement)
    return () => {
      arreterEtincelles()
      mouvementReduit.removeEventListener('change', ajusterMouvement)
    }
  }, [])

  return (
    <span ref={ref} aria-hidden="true">
      {Array.from({ length: nombreEtincelles }, (_, index) => (
        <span key={index} className="point-interet__etincelle" />
      ))}
    </span>
  )
}

type PointInteretProps = {
  etape: Etape
  actif: boolean
  numeroSelection: number
  onSelection: (etape: Etape) => void
}

export function PointInteret({ etape, actif, numeroSelection, onSelection }: PointInteretProps) {
  return (
    <button
      type="button"
      className="point-interet"
      style={{ left: `${etape.position.x}%`, top: `${etape.position.y}%` }}
      aria-label={`Étape ${etape.id} : ${etape.titre}`}
      aria-pressed={actif}
      aria-controls="etape-detail"
      title={etape.titre}
      onClick={() => onSelection(etape)}
    >
      <Etincelles />
      <span className="point-interet__numero" aria-hidden="true">{etape.id}</span>
      {actif && numeroSelection > 0 && (
        <span key={numeroSelection} className="point-interet__onde" aria-hidden="true" />
      )}
    </button>
  )
}
