/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slate: {
          nav: '#2C3E50',
        },
        red: {
          cmu: '#C0392B',
        },
        gray: {
          hero: '#F5F6FA',
          'hero-end': '#DCDDE1',
          subtle: '#DCDDE1',
          secondary: '#636E72',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '900px',
      },
    },
  },
  plugins: [],
};
