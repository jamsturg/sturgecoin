/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dracula theme colors
        dracula: {
          background: '#282a36',
          currentLine: '#44475a',
          foreground: '#f8f8f2',
          comment: '#6272a4',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c',
        },
        primary: '#bd93f9', // Using dracula purple as primary
        secondary: '#6272a4', // Using dracula comment as secondary
        warning: '#ff5555', // Using dracula red as warning
        bright: '#f8f8f2', // Using dracula foreground as bright
        sol: '#bd93f9', // Using dracula purple for sol
        green: '#50fa7b' // Using dracula green
      }
    }
  },
  plugins: []
}
