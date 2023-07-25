/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        vivek: {

          50: '#e7ebff',
          100: '#bdc3f8',
          200: '#929bed',
          300: '#6772e5',
          400: '#3c4adc',
          500: '#2431c3',
          600: '#1a2698',
          700: '#121b6e',
          800: '#081044',
          900: '#03041c',

        }

      },
      colors: {
        navcol: {
           50: '#eee8ff',
          100: '#c8bdf7',
          200: '#2B3148',
        300: '#7F7F7F',
          400: '#333338',
            500: '#404043',
              600: '#321899',
                700: '#24116e',
                  800: '#140944',
                    900: '#08021b',

      }
    }
  },
plugins: [],
}

}