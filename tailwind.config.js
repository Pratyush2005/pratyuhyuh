/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        discord: {
          primary: '#5865f2',
          hover: '#4752c4',
          bg: '#36393f',
          sidebar: '#2f3136',
          dark: '#202225',
          text: '#dcddde',
          muted: '#b9bbbe',
        },
      },
    },
  },
  plugins: [],
};