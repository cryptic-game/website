export default {
  target: 'static',

  head: {
    title: 'Cryptic Game',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:description', name: 'og:description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.npm_package_description || '' },
      { hid: 'og:title', name: 'og:title', content: 'Cryptic Game' },
      { hid: 'og:url', name: 'og:url', content: 'https://cryptic-game.net/' },
      { hid: 'twitter:url', name: 'og:url', content: 'https://cryptic-game.net/' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: 'https://cryptic-game.net/open-graph.jpg' },
      { hid: 'twitter:image', name: 'og:image', content: 'https://cryptic-game.net/open-graph.jpg' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Cryptic_Game' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alata&display=swap' }
    ]
  },

  loading: { color: '#fff' },

  // Global CSS
  css: [
    '@/assets/global.scss'
  ],

  plugins: [],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    'kiste/nuxt'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-lazy-load'
  ],

  router: {
    base: process.env.BASE_HREF || undefined,
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/not-found.vue')
      })
    }
  },

  kiste: {
    theme: {
      colors: {
        background: 'black/white/#1d1c1c',
        discord: '#7289DA/white/#6a7fca'
      }
    },
    navigationItems: [
      {
        label: 'Home',
        to: '/'
      },
      {
        label: 'Play',
        href: 'https://play.cryptic-game.net'
      },
      {
        label: 'Blog',
        to: '/blog'
      },
      {
        label: 'FAQ',
        to: '/faq'
      },
      {
        label: 'Roadmap',
        to: '/roadmap'
      },
      {
        label: 'Contribute',
        to: '/contribute'
      },
      {
        label: 'Team',
        to: '/team'
      }
    ],
    footerItems: [
      {
        label: 'Legal Notice',
        href: 'https://the-morpheus.de/#signup'
      },
      {
        label: 'Privacy Policy',
        href: 'https://the-morpheus.de/faq-en.html'
      },
      {
        label: 'Status',
        href: 'https://status.cryptic-game.net'
      }
    ]
  },
  sitemap: {
    hostname: 'https://cryptic-game.net',
    gzip: true
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader'
        ]
      })
    }
  }
}
