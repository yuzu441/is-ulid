const typescript = require('rollup-plugin-typescript2')
const pkg = require('./package.json')

const moduleName = pkg.name.replace(/^\@.*\//, '')
const banner = `/*!
${moduleName}.js v${pkg.version}
${pkg.homepage}
Released under the ${pkg.license} License.
*/`

module.exports = {
  input: './src/index.ts',
  external: ['class-validator'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: 'inline',
      banner,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: 'inline',
      banner,
    },
  ],
  plugins: [typescript()],
}
