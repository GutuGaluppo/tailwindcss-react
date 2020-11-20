const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
				require('autoprefixer'),

				// UNCOMMENT THE FOLLOWING CODE TO USE THE CODE FOR PRODUCTION - To minify our CSS size
				
				// require("@fullhuman/postcss-purgecss")({
				// 	content: ["./src/**/*.js", "./public/index.html"],
				// 	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)|| [],
				// }),
    ],
};
