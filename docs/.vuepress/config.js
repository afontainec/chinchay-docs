module.exports = {
  title: 'Chinchay Docs',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/gettingstarted/' },
      { text: 'Docs', link: '/docs/' },
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
      }],
      '/docs/': [{
        title: 'Command Line Interface',   // required
        path: '/docs/cli',
        children: []
      }, {
        title: 'Chainfile',   // required
        path: '/docs/chainfile',
        children: []
      }, {
        title: 'Hateoas Generator',   // required
        path: '/docs/hateoas',
        children: []
      }, {
        title: 'The TableGateway Model',   // required
        path: '/docs/model',
        children: []
      }, {
        title: 'Chinchay Middleware',   // required
        path: '/docs/middleware',
        children: []
      }, {
        title: 'Error Handler: Manage http responses',   // required
        path: '/docs/errorhandler',
        children: []
      }] 
    },
  },
}
