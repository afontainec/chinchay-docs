module.exports = {
  title: 'Chinchay Docs',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/gettingstarted/' },
      { text: 'Docs', link: 'https://pyme.apanotupyme.cl/index.php?p=login' },
      { text: 'The Model', link: 'https://apanotupyme.cl/pages/preguntas-frecuentes'},
      { text: 'Middleware', link:'https://apanotupyme.cl/pages/terminos-y-condiciones'},
      { text: 'Error Handler', link: 'https://apanotupyme.cl/pages/terminos-y-condiciones2'},
      { text: 'Collaborate!', link: 'https://apanotupyme.cl/pages/terminos-y-condiciones3'}
    ],
    displayAllHeaders: true,
    sidebar: {
      '/gettingstarted/': [{
        title: 'Getting Started',   // required
        path: '/gettingstarted/ejs',
        children: []
      }, {
        title: 'Getting Started: Chinchay + Angular',   // required
        path: '/gettingstarted/angular',
        children: []
      }]
    },
  },
}
