import { useEffect, useRef, useState } from 'react'
import luminealesLogo from '../../assets/Logos/lumineales_Logo.svg'
import './Header.scss'

export function Header() {
  const debutPage = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const repere = debutPage.current
    if (!repere) return

    const observateur = new IntersectionObserver(([entree]) => {
      setVisible(entree.intersectionRatio < 1)
    }, { threshold: 1 })

    observateur.observe(repere)
    return () => observateur.disconnect()
  }, [])

  return (
    <>
      <div ref={debutPage} className="entete__repere" aria-hidden="true" />
      <header className="entete" hidden={!visible}>
        <div className="page">
          <a className="entete__logo" href="https://leslumineales.fr/" target="_blank" rel="noopener noreferrer">
            <img src={luminealesLogo} alt="Les Luminéales du Thabor" width={758} height={216} />
          </a>
        </div>
      </header>
    </>
  )
}
