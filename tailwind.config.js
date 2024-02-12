/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-background': 'hsl(189, 41%, 97%)',
        'primary': 'hsl(183, 100%, 15%)',
        'secondary': 'hsl(186, 14%, 43%)',
        'gray-cyan': 'hsl(184, 14%, 56%)',
        'light-gray-cyan': 'hsl(185, 41%, 84%)',
        'lightest-gray-cyan': 'hsl(189, 41%, 97%)',
        'strong-cyan': 'hsl(172, 67%, 45%)',
      }
    },
  },
  plugins: [],
};
