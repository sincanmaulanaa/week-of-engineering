/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        customPrimary: 'rgb(99, 102, 241)',
        customSecondary: 'rgb(161, 163, 247)',
        customDarkBg1: 'rgb(255,255,255)',
        customDarkBg2: 'rgb(255, 255, 255)',
        customDarkBg3: 'rgb(255, 255, 255)',
        customDarkBg3Hover: 'rgb(55, 56, 62)',
        customContentSubtitle: 'rgb(178, 184, 205)',
        customGrayBorder: 'rgb(255,255,255,0.1)',
        customGrayText: 'rgb(55, 56, 62)',
        customDarkBgTransparent: 'rgb(255, 255, 255, 0.7)',
        customDarkBgTransparentDarker: 'rgb(255, 255, 255, 0.5)',
        customDarkBgTransparentLighter: 'rgb(255, 255, 255, 0.7)',
      },
      fontFamily: {
        Inter: 'Inter',
      },
      screens: {
        xs: '530px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xll: '1400px',
        '2xl': '1536px',
      },
    },
  },
};
