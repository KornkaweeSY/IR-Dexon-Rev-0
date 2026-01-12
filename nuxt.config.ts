import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap'
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/logo/X_RGB_CC-03.png"
        }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});