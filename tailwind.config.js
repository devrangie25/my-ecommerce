/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        harmonia: ['Harmonia, Arial, sans-serif']
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", {
      mytheme: {
        "primary": "#a36448",

        "secondary": "#357955",

        "secondary-1": "#833e33",

        "accent": "#e5d6cb",

        "accent-1": "#f1e7dd",

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
  plugins: [require('daisyui')],
}

