/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
        "servise-svg": {
          "dark": "#3F3F46",
          "light": "#EAEAEA"
        }
      },
      boxShadow: {
        "custom": "0 1px 10px rgba(0, 0, 0, 0.05)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaBold": "Dana Bold",
        "Lalezar": "Lalezar",
        "IRANSans": "IRANSans",
      },
      letterSpacing: {
        "tightest": "-.065em"
      },
      spacing: {
        "25": "6.25rem",
        "30": "7.5rem",
        "50": "12.5rem"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem'
        }
      },
      backgroundImage: {
        'home-mobile': 'url(../images/headerBgMobile.webp)',
        'home-desktop': 'url(../images/headerBgDesktop.webp)',
        'blog-one': 'url(../images/blogs/blog-1.png)',
        'blog-two': 'url(../images/blogs/blog-2.png)',
        'blog-thre': 'url(../images/blogs/blog-3.png)'
      }
      
    },
    screens: {
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover')
    },
 
  ],
}

