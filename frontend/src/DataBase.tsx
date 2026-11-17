import audioEtape1 from './assets/Audio/01_Men At Work - Down Under.mp3'
import audioEtape2 from './assets/Audio/02_Golden Earring - Radar Love (1973) HD.mp3'
import audioEtape3 from './assets/Audio/03_Nothing Else Matters.mp3'
import audioEtape4 from './assets/Audio/04_Fade To Black.mp3'
import audioEtape5 from './assets/Audio/05_The Call Of Ktulu.mp3'
import audioEtape6 from './assets/Audio/06_Creeping Death.mp3'
import audioEtape7 from './assets/Audio/07_Enter Sandman.mp3'
import audioEtape8 from './assets/Audio/08_Sad But True.mp3'
import audioEtape9 from './assets/Audio/09_Seek & Destroy.mp3'
import audioEtape10 from './assets/Audio/10_Trapped Under Ice.mp3'

import imageEtape1 from './assets/Images_étapes/1_Ici_Entree.jpg'
import imageEtape2 from './assets/Images_étapes/2_Colombie.jpg'
import imageEtape3 from './assets/Images_étapes/3_Suede.jpg'
import imageEtape4 from './assets/Images_étapes/4_Italie.jpg'
import imageEtape5 from './assets/Images_étapes/5_Scandinavie.jpg'
import imageEtape6 from './assets/Images_étapes/6_Ukraine.png'
import imageEtape7 from './assets/Images_étapes/7_Lotus.jpg'
import imageEtape8 from './assets/Images_étapes/08_Mexique.png'
import imageEtape9 from './assets/Images_étapes/9_Las_Bas_Boules.jpg'
import imageEtape10 from './assets/Images_étapes/10_Las_Bas_Bonhommes.jpg'

export type Etape = {
  id: number
  titre: string
  description: string
  image: string
  // Importer un MP3 depuis assets, puis l’associer ici à une étape.
  audio?: string
  position: { x: number; y: number }
}

// Contenus provisoires. Positions au centre des numéros de Carte_Thabor.png,
// en pourcentage de la largeur (x) et de la hauteur (y) de l’image.
export const etapes: Etape[] = [
  { id: 1, image: imageEtape1, audio: audioEtape1, titre: 'Ici / Sous La Neige', description: 'Sous un manteau de neige, le jardin ouvre les portes d’un voyage à travers les mondes de Noël.', position: { x: 16.57, y: 25.59 } },
  { id: 2, image: imageEtape2, audio: audioEtape2, titre: 'Colombie - Velitas', description: 'Une multitude de petites flammes illumine la nuit : laissez-vous guider par la douceur des Velitas colombiennes.', position: { x: 34.14, y: 54.6 } },
  { id: 3, image: imageEtape3, audio: audioEtape3, titre: 'Suède - Sainte-Lucie', description: 'Au cœur de l’hiver suédois, entrez dans une atmosphère de lumière et de chants inspirée de la Sainte-Lucie.', position: { x: 44.67, y: 63.7 } },
  { id: 4, image: imageEtape4, audio: audioEtape4, titre: 'Italie - La Befana', description: 'Suivez le balai de la Befana et plongez dans un Noël italien plein de surprises et de gourmandises.', position: { x: 33.47, y: 70.33 } },
  { id: 5, image: imageEtape5, audio: audioEtape5, titre: 'Scandinavie - Aurores boréales', description: 'Levez les yeux et imaginez les voiles colorés des aurores boréales danser dans le ciel du Grand Nord.', position: { x: 52.18, y: 67.49 } },
  { id: 6, image: imageEtape6, audio: audioEtape6, titre: 'Ukraine - Les araignées', description: 'Des fils scintillants se tissent dans les branches : découvrez la poésie des araignées de Noël ukrainiennes.', position: { x: 55.8, y: 48.15 } },
  { id: 7, image: imageEtape7, audio: audioEtape7, titre: 'Inde - Le Lotus', description: 'Un lotus de lumière éclot dans la nuit et vous invite à une pause douce et contemplative, inspirée de l’Inde.', position: { x: 85.04, y: 46.45 } },
  { id: 8, image: imageEtape8, audio: audioEtape8, titre: 'Mexique - Les pinatas', description: 'Couleurs éclatantes et surprises à partager : entrez dans l’univers joyeux des piñatas mexicaines.', position: { x: 80.48, y: 33.55 } },
  { id: 9, image: imageEtape9, audio: audioEtape9, titre: 'Las-Bas - Les bulles de champagne', description: 'Des bulles de lumière s’élèvent dans la nuit, comme une invitation à célébrer ensemble les fêtes de fin d’année.', position: { x: 67.81, y: 28.53 } },
  { id: 10, image: imageEtape10, audio: audioEtape10, titre: 'Las-Bas - Bonhommes de neige', description: 'Retrouvez la malice des bonhommes de neige et terminez le voyage sur une note joyeuse, pleine de souvenirs d’enfance.', position: { x: 46.21, y: 25.4 } },
]
