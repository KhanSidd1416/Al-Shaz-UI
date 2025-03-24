// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '2.5xl': '1646px',
      '3xl': '1720px',
      '4xl': '1920px',
    },
    extend: {
      transitionProperty: {
        'drop-shadow': 'filter',
      },
      dropShadow: (theme) => ({
        gold: `0px 0px 10px ${theme('colors.hinkal.gold.100')}`,
        gray: `0px 0px 10px #585858`,
        white: `0px 0px 5px white`,
        purple: `0px 0px 5px ${theme('colors.hinkal.purple.100')}`,
        lidoGray: '0px 3.39px 5.65px rgba(0,0,0,0.35)',
      }),
      boxShadow: {
        gold: '0px 0px 35px rgba(255, 243, 177, 0.8)',
        'gold-b': '0px 10px 20px rgba(255, 243, 177, 0.4)',
        'light-inset': 'inset 0px 0px 30px 0px rgba(255, 255, 255, 0.24)',
        'dark-inset': 'inset 0px 8px 80px 0px rgba(0, 0, 0, 0.60)',
        'dark-inset-1': 'inset 0px 7.166px 78.825px 0px rgba(0, 0, 0, 0.65)',
        'dark-inset-small': 'inset 0px 0px 4px 0px rgba(0, 0, 0, 0.60)',
        'inset-lido-gray': 'inset 0px -2.26px 2.26px rgba(0,0,0,0.53), inset 0px 0px 4px #FFF',
        search: 'inset 0px 4px 124px 0px #000',
        'inset-search': 'inset 0px 4px 124px 0px rgba(0, 0, 0, 1)',
        'inset-gray': 'inset 0px 0px 10px 0px rgba(255, 255, 255, 0.50)',
        'inner-white-blur': 'inset 0px 0px 10px 0px rgba(255, 255, 255, 0.50)',
        'inner-shadow-black-circle':
          'inset 0px -2.26px 2.26px 0px rgba(0, 0, 0, 0.53), inset 0px 0px 4px 0px #FFF, 0px 3.39px 5.65px 0px rgba(0, 0, 0, 0.35);',
        home: 'inset 0px 4.157px 45.73px 0px rgba(0, 0, 0, 0.65)',
      },
      backgroundImage: (theme) => ({
        'radial-gradient-black': `radial-gradient(#000000 10%, #3B3B3B)`,
        // Next two don't match the description but are the closest to design
        'gradient-white': `linear-gradient(to top right, rgb(40, 40, 40), rgb(127, 127, 127))`,
        'gradient-white-90': `linear-gradient(90, rgba(255, 255, 255, 0.4), #595454)`,
        'gradient-gold': `linear-gradient(180deg, ${theme('colors.hinkal.gold.100')}, ${theme(
          'colors.hinkal.gold.200',
        )})`,
        'gradient-home': `linear-gradient(180deg, ${theme('colors.hinkal.green.100')}, ${theme(
          'colors.hinkal.green.200',
        )})`,
        'gradient-deposit': `linear-gradient(180deg, ${theme('colors.hinkal.orange.100')}, ${theme(
          'colors.hinkal.orange.200',
        )})`,
        'gradient-swap': `linear-gradient(180deg, ${theme('colors.hinkal.blue.100')}, ${theme(
          'colors.hinkal.blue.200',
        )})`,
        'gradient-purple': `linear-gradient(90deg, ${theme('colors.hinkal.purple.100')}, ${theme(
          'colors.hinkal.purple.200',
        )})`,
        'gradient-stake': `linear-gradient(180deg, ${theme('colors.hinkal.pink.100')}, ${theme(
          'colors.hinkal.pink.200',
        )})`,
        'gradient-nav': 'linear-gradient(58deg, rgba(255, 255, 255, 0.3), rgba(130, 130, 130, 1));',
        'gradient-withdraw': `linear-gradient(180deg, ${theme('colors.hinkal.red.100')}, ${theme('colors.hinkal.red.200')})`,
        'gradient-anonymityStaking': `linear-gradient(180deg, #FFFFFF, ${theme('colors.hinkal.gray.600')})`,
        'gradient-light-gray-58': `linear-gradient(58deg, #1E1E1E -9.15%, #828282 103.02%)`,
        'gradient-light-gray': `linear-gradient(90deg, ${theme('colors.hinkal.gray.800')}, ${theme('colors.hinkal.gray.500')})`,

        'gradient-dark-gray': `linear-gradient(45deg, ${theme('colors.hinkal.gray.700')}, ${theme('colors.hinkal.gray.800')})`,
        'gradient-white-165':
          'linear-gradient(165deg, rgba(255, 255, 255, 0.7) 0%, #5F5F5F 30%, #5F5F5F 70%,  rgba(255, 255, 255, 0.7))',
        // Dark color doesn't match the description but is the closest to design
        'wab-stroke-95': `linear-gradient(95deg, rgb(255, 255, 255, 0.7), rgba(34, 34, 34), rgba(34, 34, 34), rgb(255, 255, 255, 0.7));`,
        'wab-stroke-110': `linear-gradient(110deg, rgb(255, 255, 255, 0.7), rgba(34, 34, 34), rgba(34, 34, 34), rgb(255, 255, 255, 0.7));`,
        'wab-stroke-140': `linear-gradient(140deg, rgb(255, 255, 255, 0.7), rgba(34, 34, 34), rgba(34, 34, 34), rgb(255, 255, 255, 0.7));`,
        'wab-stroke-160': `linear-gradient(160deg, rgb(255, 255, 255, 0.7), rgba(34, 34, 34), rgba(34, 34, 34), rgb(255, 255, 255, 0.7));`,
        'wab-stroke-175': `linear-gradient(175deg, rgb(255, 255, 255, 0.7), rgba(34, 34, 34), rgba(34, 34, 34), rgb(255, 255, 255, 0.7));`,
        'wab-stroke-gold-150': `linear-gradient(150deg, rgba(255, 244, 186), rgba(34, 34, 34), rgba(34, 34, 34), rgba(255, 244, 186));`,
        'widget-bg-stroke-180': `linear-gradient(180deg, rgba(135, 135, 135, 1), rgba(63, 63, 63, 1));`,
      }),
      colors: {
        hinkal: {
          gold: {
            100: '#FFF3B1',
            200: '#CCB94F',
            300: '#2E2403',
          },
          gray: {
            10: '#8d8d8d',
            100: '#515151',
            200: '#292929',
            300: '#242424',
            400: '#191919',
            500: '#5F5F5F1A',
            600: '#585858',
            700: '#24242480',
            800: '#87878780',
          },
          corporate: {
            10: '#008b71',
          },
          green: {
            100: '#0C5D4E',
            200: '#4CA291',
          },
          orange: {
            100: '#F56822',
            200: '#DF941C',
          },
          blue: {
            100: '#0392E9',
            200: '#07BCFF',
          },
          purple: {
            100: '#7b4a6f',
            200: '#44293d',
            300: '#a56e97',
          },
          pink: {
            100: '#FC76E7',
            200: '#C42CD8',
          },
          red: {
            100: '#FB8D89',
            200: '#E0545D',
          },
          success: '#23C78B',
          error: '#E35151',
        },
      },
      fontFamily: {
        blauer: ['"Blauer Nue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
