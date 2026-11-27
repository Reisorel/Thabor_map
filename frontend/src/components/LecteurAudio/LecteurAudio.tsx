import { useEffect, useRef, useState } from 'react'
import './LecteurAudio.scss'

type LecteurAudioProps = {
  src?: string
  titre: string
  artiste?: string
}

function formatTemps(secondes: number) {
  const valeur = Number.isFinite(secondes) ? Math.max(0, Math.floor(secondes)) : 0
  return `${Math.floor(valeur / 60)}:${String(valeur % 60).padStart(2, '0')}`
}

export function LecteurAudio({ src, titre, artiste }: LecteurAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [enLecture, setEnLecture] = useState(false)
  const [temps, setTemps] = useState(0)
  const [duree, setDuree] = useState(0)
  const [erreur, setErreur] = useState<string | null>(null)
  const credit = artiste ? `« ${titre} » par ${artiste}` : `« ${titre} »`

  useEffect(() => {
    const audio = audioRef.current
    // Arrête l’extrait lorsque l’étape change et que le lecteur est démonté.
    return () => { audio?.pause() }
  }, [])

  async function basculerLecture() {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

    try {
      setErreur(null)
      await audio.play()
    } catch {
      setErreur('Lecture impossible. Réessayez dans un instant.')
    }
  }

  return (
    <section className="lecteur-audio" aria-label={`Extrait musical : ${credit}`}>
      <p className="lecteur-audio-titre">Écoutez l’extrait : {credit}</p>
      {src && <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(event) => {
          const valeur = event.currentTarget.duration
          setDuree(Number.isFinite(valeur) ? valeur : 0)
        }}
        onDurationChange={(event) => {
          const valeur = event.currentTarget.duration
          setDuree(Number.isFinite(valeur) ? valeur : 0)
        }}
        onTimeUpdate={(event) => setTemps(event.currentTarget.currentTime)}
        onPlay={() => setEnLecture(true)}
        onPause={() => setEnLecture(false)}
        onEnded={() => setEnLecture(false)}
        onError={() => {
          setEnLecture(false)
          setErreur('Cet extrait musical est indisponible pour le moment.')
        }}
      />}
      <div className="lecteur-audio-commandes">
        <button
          type="button"
          className="lecteur-audio-bouton"
          onClick={basculerLecture}
          disabled={!src}
          aria-label={enLecture ? 'Mettre en pause l’extrait' : 'Écouter l’extrait'}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {enLecture
              ? <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              : <path d="m7 4 14 8-14 8z" />}
          </svg>
        </button>
        <div className="lecteur-audio-progression">
          <input
            type="range"
            min={0}
            max={duree || 1}
            step={0.1}
            value={Math.min(temps, duree || 0)}
            disabled={duree <= 0}
            aria-label="Position dans l’extrait musical"
            aria-valuetext={`${formatTemps(temps)} sur ${formatTemps(duree)}`}
            onChange={(event) => {
              const valeur = Number(event.target.value)
              if (audioRef.current) audioRef.current.currentTime = valeur
              setTemps(valeur)
            }}
          />
          <p className="lecteur-audio-temps">{formatTemps(temps)} / {src ? formatTemps(duree) : '--:--'}</p>
        </div>
      </div>
      {!src && <p className="lecteur-audio-attente">Extrait musical à venir</p>}
      {erreur && <p className="lecteur-audio-erreur" role="status">{erreur}</p>}
    </section>
  )
}
