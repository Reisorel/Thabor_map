import titreParcours from '../../assets/Logos/DNDLM.svg'
import './Logo.scss'

export function Logo() {
  return (
    <div className="introduction">
      <p className="introduction__edition">Les Luminéales du Thabor · <span>1ère édition</span></p>
      <h1>
        <img src={titreParcours} alt="Des Noëls dans le monde" width={2942} height={1498} />
      </h1>
      <p>Découvrez les traditions de Noël qui se cachent derrière chacune des étapes du parcours !</p>
      <h2 id="carte-titre">Sélectionnez un point pour découvrir son histoire.</h2>
      <p>Mais surtout, à chaque étape, prenez le temps de vous arrêter pour écouter l’introduction contée et la chanson qui accompagne l’œuvre.</p>
    </div>
  )
}
