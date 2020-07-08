module.exports = {
  title: 'Chinchay Docs',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/pages/gettingstarted/ejs' },
      { text: 'Docs', link: 'https://pyme.apanotupyme.cl/index.php?p=login' },
      { text: 'The Model', link: 'https://apanotupyme.cl/pages/preguntas-frecuentes'},
      { text: 'Middleware', link:'https://apanotupyme.cl/pages/terminos-y-condiciones'},
      { text: 'Error Handler', link: '/pages/contact'},
      { text: 'Collaborate!', link: '/pages/contact'}
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
