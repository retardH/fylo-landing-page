/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xlg: "800px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        introBg: "hsl(217, 28%, 15%)",
        mainBg: "hsl(218, 28%, 13%)",
        footerBg: "hsl(216, 53%, 9%)",
        testimonialBg: "hsl(219, 30%, 18%)",
        newCyan: "hsl(176, 68%, 64%)",
        newBlue: "hsl(198, 60%, 50%)",
        errorRed: "hsl(0, 100%, 63%)"
      },
      fontFamily: {
        bodyFont: '"Open Sans", "sans-serif"',
        otherFont: '"Raleway", "sans-serif"'
      },
      content: {
        'quote': 'url("./images/bg-quotes.png")',
        'exp': "EXAMPLE",
      }
    },
  },
  plugins: [],
}
