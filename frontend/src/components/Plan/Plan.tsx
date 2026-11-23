import carteThabor from '../../assets/Carte_Thabor/Carte_Thabor.png'
import { PointInteret } from '../PointInteret/PointInteret'
import type { Etape } from '../../DataBase'
import './Plan.scss'

type PlanProps = {
  etapes: Etape[]
  etapeSelectionnee: Etape
  numeroSelection: number
  onSelection: (etape: Etape) => void
}

export function Plan({ etapes, etapeSelectionnee, numeroSelection, onSelection }: PlanProps) {
  return (
    <section className="carte-section" aria-labelledby="carte-titre">
      <div className="carte">
        <img
          src={carteThabor}
          width={1491}
          height={1055}
          alt="Vue illustrée du jardin du Thabor, de ses bâtiments, allées et espaces paysagers"
          className="carte-image"
        />
        {etapes.map((etape) => (
          <PointInteret
            key={etape.id}
            etape={etape}
            actif={etape.id === etapeSelectionnee.id}
            numeroSelection={numeroSelection}
            onSelection={onSelection}
          />
        ))}
      </div>
      <label className="choix-etape">
        Ou choisissez une étape
        <select
          value={etapeSelectionnee.id}
          onChange={(event) => {
            const etape = etapes.find((item) => item.id === Number(event.target.value))
            if (etape) onSelection(etape)
          }}
        >
          {etapes.map((etape) => (
            <option key={etape.id} value={etape.id}>
              {etape.id}. {etape.titre}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}
