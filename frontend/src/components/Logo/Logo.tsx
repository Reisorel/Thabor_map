import titreParcours from '../../assets/Logos/DNDLM.svg'
import './Logo.scss'

export function Logo() {
  return (
    <div className="introduction">
      <h1>
        <img src={titreParcours} alt="Des Noëls dans le monde" width={2942} height={1498} />
      </h1>
      <p>Découvrez les traditions de Noël qui se cachent derrière chacune des étapes du parcours !</p>
      <h2 id="carte-titre">Sélectionnez un point pour découvrir son histoire.</h2>
    </div>
  )
}
