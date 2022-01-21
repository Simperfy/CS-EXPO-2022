module.exports = {
    mode: 'jit',
    content: [
      './public/**/*.html',
      './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          csPrimary: '#9147FF',
          csSecondary: '#FFD482',
          csBGPrimary: '#333333',
        },
        fontFamily: {
          body: ['Roboto', 'sans-serif'],
          display: ['Ginto Nord', 'sans-serif']
        },
      }
    }
};