/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ocean': '#0c5f7a',
        'sand': '#f5e6d3',
        'coral': '#ff6b4a',
        'seafoam': '#7dd3c0',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  safelist: [
    { pattern: /^bg-/ },
    { pattern: /^text-/ },
    { pattern: /^hover:bg-/ },
    { pattern: /^md:/ },
    { pattern: /^font-/ },
    { pattern: /^px-/ },
    { pattern: /^py-/ },
    { pattern: /^mb-/ },
    { pattern: /^mt-/ },
    { pattern: /^w-/ },
    { pattern: /^h-/ },
  ],
  plugins: [],
}
