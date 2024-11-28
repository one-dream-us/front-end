/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00DE5A',
        secondary: '#03C75A',
        'custom-black': '#1A1A1A',
        'custom-green-light': '#92DE9E',
        'custom-green': `#5BBF6A`,
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
      },
    },
  },
  plugins: [],
};
