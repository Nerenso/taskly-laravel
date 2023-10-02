import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const { withAnimations } = require("animated-tailwindcss");

module.exports = withAnimations({
  // your (existing) Tailwind CSS config here
  darkMode: "class",
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.vue",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        inter: "Inter",
      },
    },
  },

  plugins: [forms],
});

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: [
//     "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
//     "./storage/framework/views/*.php",
//     "./resources/views/**/*.blade.php",
//     "./resources/js/**/*.vue",
//   ],

//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Figtree", ...defaultTheme.fontFamily.sans],
//         inter: "Inter",
//       },
//     },
//   },

//   plugins: [forms],
// };
