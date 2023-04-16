import { resolve } from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '~': resolve('./src'),
    },
  },

  plugins: [
    solidPlugin(),
  ],
})
