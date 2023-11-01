import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'mainColor': '#3DB9BE',
        'mainTransparency': 'rgb(61, 185, 190, 0.7)',
        'transparency': 'rgba(255,255,255,0.1)',
        'transparencyPayment': 'rgba(0,0,0,0.5)',
        'hoverColor': '#008996',
        'l-purple': '#3A3A5F',
        'footerBg': '#f1f1f1',
        'footerSecond': '#212a2f',
        'activeFooter': '#f0f5ff',
        'activeBorder': '#1773b0',
        'bgCheckout': '#f5f5f5'
      }
    },
  },
  plugins: [],
}
export default config
