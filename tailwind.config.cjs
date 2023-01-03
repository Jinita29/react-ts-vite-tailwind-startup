/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        League: ['League Spartan', 'sans serif'],
        Ubuntu: ['Ubuntu', 'sans serif'],
      },
      colors: {
        theme: '#ffd391',
        dark: '#171717s',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xxs: '370px',
      xs: '480px',
      sm: '576px',
      md: '767px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
      xxxl: '1536px',
      '4xl': '1600px',
    },
  },
  plugins: [],
};
