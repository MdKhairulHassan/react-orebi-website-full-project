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
      },
      backgroundImage: {
        'banner': "url('./assets/banner.png')",
        'Adspart2': "url('./assets/Ads_part2.png')",
      },
    },
  },
  plugins: [],
}