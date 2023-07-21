export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@invictus.codes/nuxt-vuetify',
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true, // | 'none' | 'expose' | 'sass' | { configFile: string },
      autoImport: true, // | false,
      useVuetifyLabs: true, // | false, 
    },
  },
})

