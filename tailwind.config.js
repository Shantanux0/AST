/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF8F4',
        ink: {
          DEFAULT: '#0E0E0C',
          muted: '#6B6B66',
          subtle: '#9A9A93',
        },
        border: {
          hairline: '#E6E2DA',
          strong: '#D0CBC0',
        },
        sun: {
          DEFAULT: '#FF5B1F',
          hover: '#E54E15',
          light: '#FFF0EA',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
        lg: '6px',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
