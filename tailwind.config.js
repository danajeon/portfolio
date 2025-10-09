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
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "68%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: '#FFF3FE' },
        },
      },
      animation: {
        colorPulse: 'colorPulse 1s ease-in-out infinite',
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
}