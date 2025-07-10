module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        float: 'float 6s ease-in-out infinite',
        fadeInDown: 'fadeInDown 0.8s ease'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%': { transform: 'translateY(-50%) translateX(0)' },
          '50%': { transform: 'translateY(-50%) translateX(-20px)' },
          '100%': { transform: 'translateY(-50%) translateX(0)' }
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
}