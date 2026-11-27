import titreParcours from '../../assets/Logos/DNDLM.svg'
import './Logo.scss'

export function Logo() {
  return (
    <div className="introduction">
      <p className="introduction__edition">Les Luminéales du Thabor · <span>1ère édition</span></p>
      <h1>
        <img src={titreParcours} alt="Des Noëls dans le monde" width={2942} height={1498} />
      </h1>
      <p>Au-delà des religions et des croyances, Noël est un moment privilégié pour se retrouver, partager et, à l’approche du solstice d’hiver, repousser l’obscurité par la lumière.</p>
      <p>Inspirés par la richesse des traditions de Noël à travers le monde, nous avons imaginé un parcours au fil du chant et de la lumière.</p>
      <p>Les installations lumineuses et la conception du parcours sont signées <strong>Spectaculaires.</strong></p>
      <p>Les chants traditionnels sont interprétés par <strong>Birds on a Wire</strong>, duo formé par Rosemary Standley et Dom La Nena. La voix qui vous guidera est celle d'<strong>Agathe Jeanneau.</strong></p>
      <p>Nous vous invitons à découvrir Noël autrement, à s’ouvrir à l’autre, à l’ailleurs.</p>
      <p>Un cheminement qui part d’ICI pour nous emmener LÀ-BAS, qui célèbre Noël pour mieux en révéler toute la diversité.</p>
      <h2 id="carte-titre">Sélectionnez un point pour découvrir son histoire.</h2>
    </div>
  )
}
