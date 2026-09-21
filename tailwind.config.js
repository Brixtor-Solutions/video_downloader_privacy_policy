/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          50: '#fff1f1',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#FF0000',
          700: '#dc2626',
          800: '#b91c1c',
          900: '#991b1b',
        },
        brand: {
          50: '#fff1f1',
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444',
          600: '#FF0000',
          700: '#dc2626',
          800: '#b91c1c',
          900: '#991b1b',
        },
        app: {
          primary: '#FF0000',
          background: '#F7F7F7',
          darkBackground: '#121212',
          textPrimary: '#181818',
          textSecondary: '#707070',
          border: '#E2E2E2',
          success: '#2E7D32',
        }
      },
      borderRadius: {
        'app': '14px',
      }
    },
  },
  plugins: [],
}
