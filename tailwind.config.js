/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        TextColor: '#767676',
        TextHColor: '#262626',
        BorderColor: '#97979766',
        BorderInfoColor: '#F0F0F0',
        InformationColor: '#6D6D6D',
        CategoryBG: '#F5F5F3',
        BannerBG: '#F5F7F9',
        bgcheckout: '#F7F8F9',
        StarColor: '#FFD881',
      },
      fontFamily: {
      'dms': ['DM Sans',],
      },
      maxWidth: {
        'headerContainer': '1200px',
        'laptopContainer': '948px',
        'tabletContainer': '738px',
        'androidContainer': '546px',
        'mobileContainer': '300px',
      },
      backgroundImage: {
        'banner': "url('./assets/banner.png')",
        'Adspart2': "url('./assets/Ads_part2.png')",
      },
      screens: {
      'laptop': {'min': '992px', 'max': '1220.98px',},
      // => @media (min-width: 992px) { ... }

      'tablet': {'min': '768px', 'max': '991.98px',},
      // => @media (min-width: 768px) { ... }

      'android': {'min': '576px', 'max': '767.98px',},
      // => @media (min-width: 576px) { ... }

      'mobile': {'min': '320px', 'max': '575.98px',},
      // => @media (min-width: 320px) { ... }

      // 'sm': {'min': '100px', 'max': '319.98px',},
      // // => @media (min-width: 100px) { ... }
     },
    },
  },
  plugins: [],
}