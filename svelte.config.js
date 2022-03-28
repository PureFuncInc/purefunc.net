import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
  ],

  experimental: {
    useVitePreprocess: true,
  },

  kit: {
    adapter: adapter(),

    prerender: {
      default: true,
    },

    vite: {
      define: {
        'process.env.VITE_BUILD_TIME': JSON.stringify(new Date()
          .toISOString()),
      },
      plugins: [vanillaExtractPlugin()],
      ssr:
        process.env.NODE_ENV === 'development'
          ? {}
          : {
            noExternal: ['@vanilla-extract/css', '@vanilla-extract/sprinkles', '@vanilla-extract/css/fileScope'],
          },
    },
  },
}

export default config
