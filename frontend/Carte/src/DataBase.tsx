export type Etape = {
  id: number
  titre: string
  description: string
  position: { x: number; y: number }
}

// Contenus provisoires. Positions en pourcentage de la carte.
export const etapes: Etape[] = [
  { id: 1, titre: 'Bienvenue au Thabor', description: 'Le parcours commence ici. Prenez le temps de regarder autour de vous et laissez le jardin vous raconter son histoire.', position: { x: 67, y: 85 } },
  { id: 2, titre: 'Un premier regard', description: 'Au fil des allées, les perspectives se dessinent. Cette première halte invite à découvrir les lignes du jardin.', position: { x: 39, y: 87 } },
  { id: 3, titre: 'À l’ombre des arbres', description: 'Levez les yeux vers les feuillages. Les arbres donnent au lieu son rythme, ses couleurs et ses abris.', position: { x: 20, y: 69 } },
  { id: 4, titre: 'Le jardin vivant', description: 'Observez les petits mouvements autour de vous. Le jardin accueille une multitude de vies, parfois discrètes.', position: { x: 15, y: 43 } },
  { id: 5, titre: 'Les traces du temps', description: 'Les chemins et les pierres gardent la mémoire du lieu. Cette étape sera consacrée à son histoire.', position: { x: 31, y: 22 } },
  { id: 6, titre: 'Au cœur du jardin', description: 'Une pause au centre du parcours pour découvrir ce qui fait la singularité du Thabor.', position: { x: 52, y: 15 } },
  { id: 7, titre: 'Un paysage composé', description: 'Formes, volumes et couleurs dialoguent. Découvrez comment le jardin se compose et se transforme.', position: { x: 73, y: 27 } },
  { id: 8, titre: 'Au fil des saisons', description: 'Le jardin ne cesse de changer. Cette halte évoquera ses transformations au fil de l’année.', position: { x: 86, y: 44 } },
  { id: 9, titre: 'Une respiration', description: 'Arrêtez-vous un instant. Écoutez les sons du jardin et prenez le temps de profiter du paysage.', position: { x: 82, y: 65 } },
  { id: 10, titre: 'Un souvenir à emporter', description: 'Le parcours se termine, mais la découverte continue. Emportez avec vous un regard nouveau sur le jardin.', position: { x: 59, y: 67 } },
]
