module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // Add other PostCSS plugins as needed
      ],
    },
  },
};
