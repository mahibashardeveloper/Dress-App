import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vuePlugin(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/scss/front/style.scss',
                'resources/js/front/app.js'
            ],
            refresh: true,
        }),
    ],
});
