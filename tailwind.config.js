/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily : {
       spartan: ["League Spartan", "sans-serif"],

    },
    colors:{
      skyblue:"#7C5DFA",
      lightblue:"#9277FF",
      navyblue:"#1E2139",
      navylightblue:"#1E2139",
      lightgray:"#DFE3FA",
      gray:"#888EB0",
      olive:"7E88C3",
      black:"#0C0E16",
      orange:"#EC5757",
      lightorange:"#9277FF",
      bglight:"#F8F8F8",
      darkblue1:"141625"
    }},
    
  },
  plugins: [],
}

