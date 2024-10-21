import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    markdown: {
      remarkPlugins: [
        ['remark-breaks', {}], // Habilita la interpretación de newlines como <br> o saltos de línea.
      ],
    },
  });
