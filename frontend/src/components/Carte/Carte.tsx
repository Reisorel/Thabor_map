import { useState } from 'react'
import { etapes } from '../../DataBase'
import { Plan } from '../Plan/Plan'
import { EtapeDetail } from '../EtapeDetail/EtapeDetail'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import './Carte.scss'

export function Carte() {
  const [etapeSelectionnee, setEtapeSelectionnee] = useState(etapes[0])

  return (
    <div className="page">
      <Header />
      <main className="parcours" aria-label="Découvrir le parcours">
        <Plan
          etapes={etapes}
          etapeSelectionnee={etapeSelectionnee}
          onSelection={setEtapeSelectionnee}
        />
        <EtapeDetail etape={etapeSelectionnee} />
      </main>
      <Footer />
    </div>
  )
}

