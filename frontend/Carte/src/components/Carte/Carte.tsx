import './Carte.scss'
import type { Etape } from '../../DataBase'

type CarteProps = {
  etapes: Etape[]
  etapeAffichee: Etape
}

export function Carte({ etapes, etapeAffichee }: CarteProps) {
  return (
    <section className="carte-section" aria-labelledby="carte-titre">
      <div className="section-entete">
        <h2 id="carte-titre">Le parcours</h2>
        <span>10 étapes à découvrir</span>
      </div>
      <div className="carte">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path className="jardin" d="M10 42 Q9 15 35 9 Q72 0 91 31 Q102 64 78 87 Q45 104 19 81 Q3 67 10 42Z" />
          <path className="allee" d="M67 85 Q52 97 39 87 T20 69 Q5 54 15 43 T31 22 Q40 8 52 15 T73 27 Q91 30 86 44 T82 65 Q72 78 59 67" />
          <ellipse className="pelouse" cx="48" cy="43" rx="18" ry="14" />
        </svg>
        <span className="carte-centre">Le Thabor</span>
        <ol className="reperes" aria-label="Les dix étapes (aperçu statique)">
          {etapes.map((etape) => (
            <li key={etape.id} className={etape.id === etapeAffichee.id ? 'repere actif' : 'repere'}
              style={{ left: `${etape.position.x}%`, top: `${etape.position.y}%` }}
              aria-current={etape.id === etapeAffichee.id ? 'step' : undefined}>
              <span className="numero">{String(etape.id).padStart(2, '0')}</span>
              <span>{etape.titre}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="legende">Carte schématique · aperçu statique du parcours</p>
    </section>
  )
}
