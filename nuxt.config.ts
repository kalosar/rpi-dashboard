// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { 
    typeCheck: true,
    strict: true,
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
  ],

  apollo: {   
    clients: {
      default: {        
        httpEndpoint: 'https://api.entur.io/journey-planner/v3/graphql'
      }    
    },  
  },
})
