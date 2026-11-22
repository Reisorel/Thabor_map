import malivernLogo from '../../assets/Logos/Malivern_Blanc_Transparent.png'
import spectaculairesLogo from '../../assets/Logos/Logo_Specta_Fond_Transparent_Plan de travail 1.png'
import './Footer.scss'
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logos">
        <a className="footer__logo--spectaculaires" href="https://www.spectaculaires.fr/" target="_blank" rel="noopener noreferrer">
          <img src={spectaculairesLogo} alt="Spectaculaires" width={1418} height={591} />
        </a>
        <img className="footer__logo--malivern" src={malivernLogo} alt="Malivern" width={1254} height={1254} />
      </div>
      <div className="footer__credit">
        <p>
          Musique : <a href="https://www.birdsonawiremusic.com/" target="_blank" rel="noopener noreferrer">Birds on Wire</a>
        </p>
        <p>
          Autrice texte et voix : <a href="https://www.instagram.com/agathe.jeanneau/" target="_blank" rel="noopener noreferrer">Agathe Janneau</a>
        </p>
      </div>
    </footer>
  )
}
