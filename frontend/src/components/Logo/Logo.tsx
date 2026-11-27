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
      <p>Noël occupe une place singulière dans notre année. Au-delà des religions et des croyances, c’est un moment privilégié pour se retrouver, partager un repas, entonner un chant. À l’approche du solstice d’hiver, c’est aussi une manière de repousser l’obscurité, de faire entrer un peu plus de lumière au cœur de la nuit.</p>
      <p>C’est donc tout naturellement que nous avons imaginé un cheminement au fil du chant et de la lumière, à la découverte des différentes façons de célébrer Noël à travers le monde. Nous nous sommes amusés à explorer la richesse et la diversité de ces traditions, à puiser dans d’autres cultures l’inspiration de ce parcours lumineux.</p>
      <p>La conception du parcours et les installations lumineuses sont signées Spectaculaires. Les chants traditionnels sont interprétés par Birds on a Wire, le duo formé par Rosemary Standley et Dom La Nena.</p>
      <p>Nous vous invitons à découvrir Noël autrement, à vous ouvrir à l’autre, à l’ailleurs, à ce qui nous distingue autant qu’à ce qui nous rassemble.</p>
      <p>Un cheminement qui part d’ICI pour nous emmener LÀ-BAS, qui parle de nous tout en portant notre regard vers les autres, qui célèbre Noël pour mieux en révéler toute la diversité.</p>
      <h2 id="carte-titre">Sélectionnez un point pour découvrir son histoire.</h2>
    </div>
  )
}
