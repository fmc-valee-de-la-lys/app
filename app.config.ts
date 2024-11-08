export default defineAppConfig({
  navbar: {
    titre: 'FMC de la Vallée de la Lys',
    logoIcone: 'fluent-emoji-flat:feather'
  },
  index: {
    champ: {
      placeholder: 'Entrez votre adresse mail',
    },
    image: {
      texteAlternatif: 'Medecins travaillant ensemble autour d\'une table',
    },
    liens: [
      {
        texte: 'Planning des formations',
        url: '/planning',
        icone: 'fluent-emoji-flat:calendar',
        externe: false
      },
      {
        texte: 'Paiement des cotisations',
        url: '/',
        icone: 'fluent-emoji-flat:money-with-wings',
        externe: true
      },
    ]
  }
})