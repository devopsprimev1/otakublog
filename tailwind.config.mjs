/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff2d95',
          purple: '#b537f2',
          cyan: '#00f0ff',
        }
      }
    },
  },
  plugins: [],
};
