import { LecteurAudio } from '../LecteurAudio/LecteurAudio'
import './EtapeDetail.scss'
import { etapes, type Etape } from '../../DataBase'

type EtapeDetailProps = {
  etape: Etape
  onSelection: (etape: Etape) => void
}

export function EtapeDetail({ etape, onSelection }: EtapeDetailProps) {
  const index = etapes.indexOf(etape)
  const precedente = etapes[index - 1]
  const suivante = etapes[index + 1]

  return (
    <article id="etape-detail" className="etape-detail" aria-labelledby="etape-titre">
      <div className="etape-contenu">
        <nav className="etape-navigation" aria-label="Navigation entre les étapes">
          <button type="button" aria-label="Étape précédente" disabled={!precedente} onClick={() => onSelection(precedente)}>
            <span aria-hidden="true" />
          </button>
          <p className="eyebrow">Étape {String(etape.id).padStart(2, '0')} / {etapes.length}</p>
          <button type="button" aria-label="Étape suivante" disabled={!suivante} onClick={() => onSelection(suivante)}>
            <span aria-hidden="true" />
          </button>
        </nav>
        <div aria-live="polite" aria-atomic="true">
          <h2 id="etape-titre">{etape.titre}</h2>
          <div className={etape.presentations ? 'etape-description etape-description--credits' : 'etape-description'}>
            {etape.description.split('\n\n').map((paragraphe, index) => (
              <p key={`${etape.id}-${index}`}>{paragraphe}</p>
            ))}
          </div>
          {etape.presentations && (
            <div className="etape-presentations">
              {etape.presentations.map(({ nom, texte, photo }) => (
                <div key={nom} className="etape-presentation">
                  {photo && <img src={photo} alt="" />}
                  <p><strong>{nom}.</strong> {texte}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {etape.audio && (
          <LecteurAudio
            key={`${etape.id}-${etape.audio}`}
            src={etape.audio}
            titre={etape.titreExtrait}
            artiste={etape.id === 6 ? undefined : 'Birds on a Wire'}
          />
        )}
      </div>
    </article>
  )
}
