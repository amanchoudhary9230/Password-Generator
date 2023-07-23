/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        lucidaBright: ["Lucida Bright", 'Georgia, serif'],
        rockwell: ['Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif;']
      },
      boxShadow: {
        boxShadow1: ['rgb(38, 57, 77) 0px 20px 30px -10px'],
        boxShadow2: ['rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'],
        boxShadow3: ['rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px'],
        boxShadow4: ['rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'],
        boxShadow88: ['rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'],
        boxShadow20: ['rgb(38, 57, 77) 0px 20px 30px -10px'],
        boxShadow15: ['rgba(255, 255, 255, 0.05) 0px 50px 100px -20px inset, rgba(50, 50, 93, 0) 0px 50px 100px -20px, rgba(0, 0, 0, 0.4) 0px 30px 60px -30px'],
        boxShadow56: ['(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'],
        boxShadow82: ['rgba(0, 0, 0, 0.3) 0px 12px 80px 4px'],
        boxShadow88: ['rgba(0, 0, 0, 0.6) 0px 0px 30px -8px'],
      },
    },
    colors: {
      transparantColor: 'rgba(0,0,0,0)',
      lightBlack: 'rgba(0, 0, 0, 0.3)',
      color1: '#1f303b',
      color2: '#3A6073',
      color3: '#f3e2c7',
      color4: '#c19e67',
      color5: '#b68d4c',
      color6: '#21b4e2',
      color6: '#F00',
      color7: '#FF0',
      color8: '#ABFF00',
      color9: '#24E0FF',
      bgColor1: '#1f303b',
    }
  },
  plugins: [],
}

