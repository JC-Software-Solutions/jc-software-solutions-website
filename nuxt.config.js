export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'Jeroen Claessens | Freelance Software Engineer',
    meta: [
      // Set in pages/index.vue
    ],
    link: [
      // Set in pages/index.vue
    ],
  },

  css: [
  ],

  plugins: [
    { src: '~/plugins/VueFlagIcon.js', ssr: false },
    { src: '~/plugins/VueSmoothScroll.js' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    'nuxt-i18n',
    [
      '@netsells/nuxt-hotjar', {
        id: '2233325',
        sv: '6',
      },
    ],
    '@nuxtjs/gtm',
  ],

  i18n: {
    lazy: true,
    langDir: './locales/',
    locales: [
      { code: 'en', iso: 'en', file: 'en.json' },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: false,
      onlyOnRoot: true,
    },
    // SEO is setup on index.vue to improve performance (see nuxt-i18n docs)
    seo: false,
  },

  fontawesome: {
    icons: {
      solid: [
        'faCogs',
        'faExternalLinkAlt',
        'faHammer',
        'faSearch',
      ],
      regular: [
        'faEnvelope',
      ],
      brands: [
        'faLinkedinIn',
        'faGithub',
        'faDiscord',
      ],
    },
  },

  loadingIndicator: {
    name: 'cube-grid',
    color: '#2dd4bf',
    background: '#1a202c',
  },

  gtm: {
    id: 'GTM-MW3GSSD',
  },

  build: {
  },
};
