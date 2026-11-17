import { LecteurAudio } from '../LecteurAudio/LecteurAudio'
import './EtapeDetail.scss'
import type { Etape } from '../../DataBase'

type EtapeDetailProps = {
  etape: Etape
}

export function EtapeDetail({ etape }: EtapeDetailProps) {
  return (
    <article id="etape-detail" className="etape-detail" aria-labelledby="etape-titre">
      <div className="etape-ambiance">
        <img src={etape.image} alt={`Illustration de l’étape : ${etape.titre}`} />
      </div>
      <div className="etape-contenu">
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow">Étape {String(etape.id).padStart(2, '0')} / 10</p>
          <h2 id="etape-titre">{etape.titre}</h2>
          <p className="etape-description">{etape.description}</p>
        </div>
        <LecteurAudio key={`${etape.id}-${etape.audio}`} src={etape.audio} titre={etape.titre} />
      </div>
    </article>
  )
}
