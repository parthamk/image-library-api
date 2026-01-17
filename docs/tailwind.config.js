/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'github-dark': '#0d1117',
        'github-text': '#c9d1d9',
        'github-border': '#30363d',
        'github-subtle': '#161b22',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
