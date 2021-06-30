import i18n from './i18n';
import tailwind from './tailwind.config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'COVID Pass',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-primary'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'application-name', content: 'COVID Pass'},
      { name: 'theme-color', content: tailwind.theme.colors.primary },
      { name: 'msapplication-TileColor', content: tailwind.theme.colors.primary },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { property: 'og:title', content: 'COVID Pass' },
      { property: 'og:description', content: 'Your digital COVID pass just one click away' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'covidpass.eu' },
      { property: 'og:site_name', content: 'COVID Pass' },
      { property: 'og:image', content: '/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/og-image.png' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: tailwind.theme.colors.primary },
    ]
  },

  // Environment variables
  publicRuntimeConfig: { // accessible from server and client
  },
  privateRuntimeConfig: { // only accessible from server
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/qr', mode:  'client' }
  ],

  // The nuxt.js internal REST endpoint
  serverMiddleware: [
    { path: '/api', handler: '~/server-middleware/rest.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    'nuxt-i18n',
  ],

  tailwindcss: {
    jit: true // enable just-in-time mode
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
  ],

  axios: {},

  i18n: {
    locales: ['en', 'de', ],
    defaultLocale: 'en',
    vueI18n: i18n,
  },

  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    html: true,
    xhtmlOut: true, 
    runtime: true ,// Support `$md()`
    linkify: true,
    typographer: true,
    breaks: true,
    use: [
      //'markdown-it-div',
      //'markdown-it-attrs'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      })
    }
  }
}
