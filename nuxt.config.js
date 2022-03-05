import en from './locales/en.json'
import de from './locales/de.json'

export default {
  target: 'static',

  generate: {
    fallback: false,
    subFolders: false
  },

  head: {
    title: 'Cryptic Game',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og:title', name: 'og:title', content: 'Cryptic Game' },
      { hid: 'og:url', name: 'og:url', content: 'https://cryptic-game.net/' },
      {
        hid: 'twitter:url',
        name: 'og:url',
        content: 'https://cryptic-game.net/'
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://cryptic-game.net/open-graph.jpg'
      },
      {
        hid: 'twitter:image',
        name: 'og:image',
        content: 'https://cryptic-game.net/open-graph.jpg'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Cryptic_Game' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'theme-color',
        content: '#000000'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  // Global CSS
  css: [
    '@/assets/css/global.scss'
  ],

  plugins: [],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    'nuxt-lazy-load'
  ],
  i18n: {
    lazy: true,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' },
      { code: 'de', iso: 'de-DE', file: 'de.json', dir: 'ltr' }
      // { code: 'zh', iso: 'zh-Hans', file: 'zh_Hans.json', dir: 'ltr' }
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, de }
    },
    detectBrowserLanguage: {
      useCookie: false,
      onlyOnRoot: true
    },
    seo: true
  },
  sitemap: {
    hostname: 'https://cryptic-game.net',
    gzip: true,
    i18n: true
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    html: {
      minify: true
    },
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
