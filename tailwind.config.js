/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'uniq': '0 0 25px #0ef',
        'regIndicatorShadow': '0px -10px 0 0 #081b29',
        'blue-35px': '0 0 35px #1cd8fd',
      },
      transitionDelay: {
        'mathJ': 'calc(.1s * var(--j))',
        'mathI': 'calc(.1s * var(--i))',
      },
      animation: {
        'showRight': 'showRight 1s ease forwards',
        'loadingRotate1': 'loadingRotate1 2s linear infinite',
        'loadingRotate2': 'loadingRotate2 2s linear infinite',
        'loadingRotate3': 'loadingRotate3 2s linear infinite',
        'spin':  ' spin infinite 10s linear',
        'animLine1': 'lineAnim1 1s infinite',
        'animLine2': 'lineAnim2 1s infinite',
        'animLine3': 'lineAnim3 1s infinite',
        'animLine4': 'lineAnim4 1s infinite',
      },
      
      keyframes: {
        loadingRotate1: {
          '0% ': {transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)'}, 
          '100%': { transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)'}
        },
        loadingRotate2: {
          '0% ': {transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)'}, 
          '100%': { transform: 'rotateX(50deg) rotateY(-10deg) rotateZ(360deg)'}
        },
        loadingRotate3: {
          '0% ': {transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)'}, 
          '100%': { transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)'}
        },
        spin:{
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'}
        },
        lineAnim1:{
          '0%':{left:'-100%'},
          '48%':{left:'0'},
          '48.1%':{left:'-100%'},
          '100%':{left:'-100%'}
        },
        lineAnim2:{
          '0%':{top:'-100%'},
          '100%':{top:'100%'}
        },
        lineAnim3:{
          '0%':{right:'-100%'},
          '100%':{right:'100%'}
        },
        lineAnim4:{
          '0%':{bottom:'-100%'},
          '100%':{bottom:'100%'}
        }
      }
    },
    screens: {
      'first-break': '351px',
      'second-break': '576px',
      'third-break': '768px',
      'fourth-break': '930px',
      'fifth-break': '1250px',
      'sixth-break': '1450px',
    }
    
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

