import { useState } from 'react'
import { etapes, type Etape } from '../../DataBase'
import { Plan } from '../Plan/Plan'
import { EtapeDetail } from '../EtapeDetail/EtapeDetail'
import { Header } from '../Header/Header'
import { Logo } from '../Logo/Logo'
import { Footer } from '../Footer/Footer'
import './Carte.scss'

export function Carte() {
  const [selection, setSelection] = useState({ etape: etapes[0], numero: 0 })

  function selectionnerEtape(etape: Etape) {
    setSelection((precedente) => ({ etape, numero: precedente.numero + 1 }))
  }

  return (
    <div className="page">
      <Header />
      <Logo />
      <main className="parcours" aria-label="Découvrir le parcours">
        <Plan
          etapes={etapes}
          etapeSelectionnee={selection.etape}
          numeroSelection={selection.numero}
          onSelection={selectionnerEtape}
        />
        <EtapeDetail etape={selection.etape} />
      </main>
      <Footer />
    </div>
  )
}

