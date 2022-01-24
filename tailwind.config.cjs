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
          csPrimaryDark: '#2D2638',
          csSecondary: '#FFD482',
          csSecondaryDark: '#38342C',
          csBGPrimary: '#333333',
          csBGSpeakers: '#D0C7B7'
        },
        fontFamily: {
          body: ['Roboto', 'sans-serif'],
          display: ['Ginto Nord', 'sans-serif']
        },
      }
    }
};