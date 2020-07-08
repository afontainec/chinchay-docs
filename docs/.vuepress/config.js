module.exports = {
  title: 'ApañoTuPyme Manual de Inscripción',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'ApañoTuPyme', link: 'https://apañotupyme.cl' },
      { text: 'ApañoTuPyme Dashboard', link: 'https://pyme.apanotupyme.cl/index.php?p=login' },
      { text: 'Preguntas Frecuentes', link: 'https://apanotupyme.cl/pages/preguntas-frecuentes'},
      { text: 'Términos y condiciones', link:'https://apanotupyme.cl/pages/terminos-y-condiciones'},
      { text: 'Contacto', link: '/pages/contact'}
    ],
    displayAllHeaders: true,
    sidebar: 'auto',
    sidebar: [{
      title: 'Getting Started',   // required
      path: '/pages/gettingstarted/ejs',
      children: []
    }, {
      title: 'Getting Started: Chinchay + Angular',   // required
      path: '/pages/gettingstarted/angular',
      children: []
    }],
  },
}
