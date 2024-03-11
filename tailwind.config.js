/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        padding: 'padding',
        'max-h': 'max-height',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
      },
      colors: {
        /**
         * * Colores actualizados
         */
        default: "rgb(var(--default), <alpha-value>)",
        backdrop: "rgb(var(--backdrop), <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary), <alpha-value>)"
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary), <alpha-value>)"
        },
        danger: {
          DEFAULT: "rgb(var(--danger), <alpha-value>)"
        },
        success: {
          DEFAULT: "rgb(var(--success), <alpha-value>)"
        },
        warning: {
          DEFAULT: "rgb(var(--warning), <alpha-value>)"
        },
        foreground: "rgb(var(--foreground))",
        input: {
          DEFAULT: "rgb(var(--input), <alpha-value>)",
          hover: "rgb(var(--input-hover), <alpha-value>)",
          focus: "rgb(var(--input-focus), <alpha-value>)",
        },
        content: {
          DEFAULT: "rgb(var(--content), <alpha-value>)",
          dark: "rgb(var(--content-dark), <alpha-value>)",
          stroke: "rgb(var(--content-stroke))"
        },
        paragraph: {
          DEFAULT: "rgb(var(--paragraph), <alpha-value>)"
        }
      },
      transitionTimingFunction: {
        "in-cubic": "var(--easing-function)",
        'in-cubic-out': 'cubic-bezier(.29,.48,.27,1.07)',
      }
    },
  },
  plugins: [],
}