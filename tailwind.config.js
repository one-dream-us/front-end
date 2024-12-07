/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#79FF8D',
        secondary: '#FFED85',
        'secondary-hover': '#A7FFB4',
        'custom-black': '#1A1A1A',
        'custom-green-light': '#92DE9E',
        'custom-green': '#5BBF6A',
        'custom-green-dark': '#2A5931',
        'custom-yellow-light': '#FFFBE3',
        'custom-cream-light': '#FAFFF4',
        'custom-coral-dark': '#FB8888',
        'custom-blue-light': '#C5ECFF',
        'custom-gray-dark': '#333333',
        'custom-gray-medium': '#656565',
        'custom-gray': '#8D8D8D',
        'custom-gray-light': '#E7E7E7',
        'custom-gray-lighter': '#F7F7F7',
        'custom-gray-800': '#424242',
        'custom-gray-700': '#616161',
        'custom-gray-600': '#757575',
        'custom-gray-500': '#9e9e9e',
        'custom-gray-400': '#bdbdbd',
        'custom-gray-300': '#e0e0e0',
        'custom-gray-200': '#eeeeee',
        'custom-gray-100': '#f5f5f5',
        'custom-gray-h': '#4D4D4D',
        'custom-gray-light-h': '#CBCBCB',
        'custom-gary-dark-h': '#757575',
        'custom-kakao-yellow': '#FEE500',
        'custom-green-money': '#79FF8D',
        'hover-30': '#CBCBCB',
        'hover-80': '#4D4D4D',
        'green-hover': '#A7FFB4',
      },
      height: {
        'custom-video-md': 'calc(212px + ((424 - 212) * ((100vw - 375px) / (768 - 375))))',
      },
      margin: {
        'custom-video-md': 'calc(230px + ((424 - 212) * ((100vw - 375px) / (768 - 375))))',
      },
      screens: {
        desktop: { min: '1440px' },
      },
      boxShadow: {
        custom: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        login: '0px 6px 12px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        checked: "url('@/assets/icons/check.svg')",
        'close-default': "url('@/assets/icons/close-default.svg')",
        'close-grey': "url('@/assets/icons/close-grey.svg')",
      },
      lineHeight: {
        170: '1.7',
      },
      animation: {
        'toast-slide-in': 'toastSlideIn 0.1s ease-out forwards',
        'toast-slide-out': 'toastSlideOut 0.1s ease-in forwards',
      },
      keyframes: {
        toastSlideIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        toastSlideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
