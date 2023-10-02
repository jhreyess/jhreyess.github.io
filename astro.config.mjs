import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://jhreyess.github.io',
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    }
})