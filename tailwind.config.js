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
      spacing: {
        'fib-1': '8px',
        'fib-2': '13px',
        'fib-3': '21px',
        'fib-4': '34px',
        'fib-5': '55px',
        'fib-6': '89px',
        'fib-7': '144px',
        'fib-8': '233px',
      },
      fontSize: {
        'body':    ['20px',  { lineHeight: '1.618' }],
        'sub':     ['32px',  { lineHeight: '1.4' }],
        'h2':      ['52px',  { lineHeight: '1.3' }],
        'h1':      ['84px',  { lineHeight: '1.1' }],
        'eyebrow': ['18px',  { lineHeight: '1.618' }],
        'nav':     ['18px',  { lineHeight: '1.618' }],
        'btn':     ['18px',  { lineHeight: '1' }],
        'stat':    ['60px',  { lineHeight: '1' }],
      },
      maxWidth: {
        'container-large': '1720px',
      },
    },
  },
  plugins: [],
}
