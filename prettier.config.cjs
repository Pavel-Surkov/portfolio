/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
};

module.exports = config;
