import { keyframes } from "@emotion/react";

/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure it includes the HTML template
    "./src/**/*.{js,ts,jsx,tsx}", // Include React components
  ],
  theme: {
    extend: {
      keyframes: {
        colorPulse: {
          '0%, 100%': { color: '#B5B8FF' },
          '50%': { color: '#E0C3ED' }
        },
      },
      animation: {
        colorPulse: 'colorPulse 1s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}