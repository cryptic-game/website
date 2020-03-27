export default {
  mode: "universal",

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: process.env.npm_package_description || ""}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Alata&display=swap"}
    ]
  },


  loading: {color: "#fff"},

  // Global CSS
  css: [
    "@/assets/global.scss"
  ],

  plugins: [],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "kiste/nuxt"
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],

  kiste: {
    theme: {
      colors: {
        background: "black/white/#1d1c1c",
        discord: "#7289DA/white/#6a7fca"
      }
    },
    navigationItems: [
      {
        label: "Home",
        to: "/"
      },
      {
        label: "Play",
        href: "https://play.cryptic-game.net"
      },
      {
        label: "Blog",
        to: "/blog"
      },
      {
        label: "Roadmap",
        to: "/roadmap"
      },
      {
        label: "Contribute",
        to: "/contribute"
      },
      {
        label: "Team",
        to: "/team"
      }
    ],
    footerItems: [
      {
        label: "Legal Notice",
        to: "/legal-notice"
      },
      {
        label: "Privacy Policy",
        href: "https://the-morpheus.de/faq-en.html"
      },
      {
        label: "Status",
        to: "/status"
      }
    ]
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          "babel-loader",
          "vue-svg-loader"
        ]
      });
    }
  }
};
