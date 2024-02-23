/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        kode: ['Kode Mono', 'monospace'],
        harmonia: ['Harmonia'],
        frank: ['Frank Ruhl Libre', 'serif'],
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", {
      mytheme: {
        "primary": "#a36448",

        "secondary": "#357955",

        "accent": "#e6d6cb",
        
        "dev": "#ccd3e3",

        "neutral": "#030400",

        "base-100": "#f6f3ec",

        "info": "#00a7ff",

        "success": "#833e33",

        "warning": "#ec9636",

        "error": "#ff3561",
      },
    }],

    darkTheme: "mytheme", // name of one of the included themes for dark mode
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

