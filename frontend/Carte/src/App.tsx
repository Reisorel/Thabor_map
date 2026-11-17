import { etapes } from './DataBase'
import { Carte } from './components/Carte/Carte'
import { EtapeDetail } from './components/EtapeDetail/EtapeDetail'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './App.scss'

function App() {
  // Version statique : la première étape est affichée par défaut.
  const etapeAffichee = etapes[0]

  return (
    <div className="page">
      <Header />
      <main className="parcours" aria-label="Découvrir le parcours">
        <Carte etapes={etapes} etapeAffichee={etapeAffichee} />
        <EtapeDetail etape={etapeAffichee} />
      </main>
      <Footer />
    </div>
  )
}

export default App
