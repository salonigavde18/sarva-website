/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: {
          light: '#E6EBE4',
          DEFAULT: '#8BA888',
          dark: '#4A5D47',
        },
        sand: {
          light: '#F5F1EA',
          DEFAULT: '#E5DED3',
          dark: '#C5BBB0',
        },
        charcoal: '#2C2C2C',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.2' }],
        'heading': ['2.25rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1.125rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
