/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  important: '#__next',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--poppins)', 'sans-serif'],
        primary: ['var(--font-primary)', 'sans-serif'],
      },
      colors: {
        primary: '#de9190',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
