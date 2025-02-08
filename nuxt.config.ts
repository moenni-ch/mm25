import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  experimental: {
    defaults: {
      nuxtLink: {
        prefetch: true,
        prefetchOn: {
          visibility: false,
          interaction: true
        }
      }
    }
  },

  devtools: {
    enabled: true
  },

  runtimeConfig: {
    shopify: {
      storefront: process.env.NUXT_SHOPIFY_STOREFRONT,
      accessToken: process.env.NUXT_SHOPIFY_ACCESS_TOKEN,
      apiVersion: process.env.NUXT_SHOPIFY_API_VERSION
    },
    klaviyo: {
      publicApiKey: process.env.NUXT_KLAVIYO_PUBLIC_API_KEY,
      privateApiKey: process.env.NUXT_KLAVIYO_PRIVATE_API_KEY,
      apiVersion: process.env.NUXT_KLAVIYO_API_VERSION
    }
  },

  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/sanity',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon'
  ],

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-10-20',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3000',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: false
    }
  },

  icon: {
    mode: 'svg'
  },

  css: ['@/assets/styles/app.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  components: [
    {
      path: '@/components',
      pathPrefix: false
    }
  ]
});
