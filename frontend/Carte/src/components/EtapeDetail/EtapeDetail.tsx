import './EtapeDetail.scss'
import type { Etape } from '../../DataBase'

type EtapeDetailProps = {
  etape: Etape
}

export function EtapeDetail({ etape }: EtapeDetailProps) {
  return (
    <article className="etape-detail" aria-labelledby="etape-titre">
      <div className="etape-ambiance"><p>Une invitation à ralentir,<br />à observer et à découvrir.</p></div>
      <div className="etape-contenu">
        <p className="eyebrow">Étape {String(etape.id).padStart(2, '0')} / 10</p>
        <h2 id="etape-titre">{etape.titre}</h2>
        <p>{etape.description}</p>
      </div>
    </article>
  )
}
