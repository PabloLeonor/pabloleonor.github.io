import { defineConfig } from 'astro/config';

// Si tu repo se llama <usuario>.github.io, no hace falta "base".
// Si lo llamas de otra forma (p. ej. "portfolio"), pon base: '/portfolio'.
export default defineConfig({
  site: 'https://pabloleonor.github.io',
  trailingSlash: 'always',
});
