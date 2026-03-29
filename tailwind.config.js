/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. COLORS BERDIRI SENDIRI
      colors: {
        zzz: {
          yellow: '#FFCC00',
          dark: '#111111',
          gray: '#222222',
        },
      },
      // 2. FONTFAMILY KELUAR DARI COLORS (Dikasih koma setelah penutup colors)
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'],
        'archivo': ['Archivo Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}