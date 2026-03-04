/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F5C518',
        secondary: '#1756B5',
        dark: '#1A1A1A',
        darker: '#101418',
        'footer-card': '#1C2024',
        'body-text': '#4C586F',
        'lite-bg': '#EEF3F6',
        'grey-bg': '#F6F7F8',
      },
      fontFamily: {
        heading: ['Urbanist', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
