/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      "ck-photo": "url('../src/assets/CK-Marching-Photo.jpg')",
    },
    extend: {
      colors: {
        overlay: "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
