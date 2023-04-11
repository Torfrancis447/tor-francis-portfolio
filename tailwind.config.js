/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 5s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': '0% 50%',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '100% 50%',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position' : '0% 50%',
          }
        },
      },
      // boxShadow: {
      //   'xl' : '0 2px 15px -3px rgb(0 0 0 / 0.1)',
      // }
    },
  },
  plugins: [],
};
