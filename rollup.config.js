import terser from '@rollup/plugin-terser'

export default {
  input: 'common/scripts/index.js',
  output: {
    file: 'common/scripts/index.min.js',
    format: 'iife'
  },
  plugins: [terser()]
}
