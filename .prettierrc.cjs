/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  tailwindConfig: './tailwind.config.js',
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
};

module.exports = config;
