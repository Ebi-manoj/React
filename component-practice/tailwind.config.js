/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // ✅ HTML root file
    './src/**/*.{js,jsx}', // ✅ All React component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
