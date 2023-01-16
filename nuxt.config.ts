// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            storyHost: 'https://fakestoreapi.com'
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxt/image-edge'
    ],
    typescript: {
        strict: true
    },
    image: {
        screens: {
            '2xl': 1800
        }
    },
});
