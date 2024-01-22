/** @type {import('tailwindcss').Config} */

export const darkMode = ['class'];
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
    square: 'square',
    roman: 'upper-roman',
  },
  extend: {
    colors: {
      'primary-500': '#e716a1',
      'primary-600': '#5D5FEF',
      'secondary-500': '#FFB620',
      'off-white': '#D0DFFF',
      red: '#FF5A5A',
      'dark-1': '#000000',
      'dark-2': '#09090A',
      'dark-3': '#101012',
      'dark-4': '#5a5a5a',
      'light-1': '#FFFFFF',
      'light-2': '#EFEFEF',
      'light-3': '#7878A3',
      'light-4': '#5C5C7B',
      original: '#FFBA26',
      'original-dark': '#454749',
      'original-bg': '#191c1e',
      'lode-bg': '#191919',
      'lode-purple': '#877eff',
      'lode-confirm': '#34a62e',
      'lode-recebido': '#444444',
      'lode-enviado': '#5b53bc',
    },
    screens: {
      xs: '480px',
    },
    width: {
      420: '420px',
      465: '465px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
};
export const plugins = [import('tailwindcss-animate')];
