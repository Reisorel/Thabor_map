import type { Etape } from '../../DataBase'
import './PointInteret.scss'

type PointInteretProps = {
  etape: Etape
  actif: boolean
  onSelection: (etape: Etape) => void
}

export function PointInteret({ etape, actif, onSelection }: PointInteretProps) {
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
    />
  )
}
