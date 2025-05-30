export default {
  css: [`~/style.css`],
  plugins: [`~/plugins/lottie-vue-player.client.js`],
  ssr: true,           // Keep SSR enabled (still builds static HTML)
  target: 'static',    // Optional for Nuxt 3, still good for clarity
  router: {
    base: '/pages' // 👈 Required for GitHub Pages
  },
  app: {
    baseURL: '/pages'
  }
};