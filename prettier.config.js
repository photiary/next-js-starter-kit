/**
 * @see https://prettier.io/docs/configuration
 *
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  endOfLine: 'auto', // LF|CRLF 자동으로 개행문자 사용 https://prettier.io/docs/en/options.html#end-of-line
  plugins: ['prettier-plugin-tailwindcss'], // https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#installation
}

export default config
