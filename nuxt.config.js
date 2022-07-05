export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtProject',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/font-awesome.css',
    '@/assets/css/animate.css',
    '@/assets/css/slicknav.min.css',
    '@/assets/css/flex-slider.min.css',
    '@/assets/css/reset.css',
    '@/assets/css/style.css',
    '@/assets/css/responsive.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/num-devider', '@/plugins/changePriceToToman', { src: 'plugins/owl.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Simple usage
    '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
    // With options
    ['@nuxtjs/dotenv', { /* module options */ }],
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'fa'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              products: 'محصولات ',
              best_selling: 'پرفروش'
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ],
    // Simple usage
    'cookie-universal-nuxt',
    // With options
    ['cookie-universal-nuxt', { alias: 'cookiz' }, { parseJSON: false }],
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.site_url,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  middleware: ['cardList']
}
