import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue2'

export default {
  external: ['ace-builds'],
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/vue-ace.js'
  },
  plugins: [
    commonjs(),
    vue({
      compileTemplate: false
    })
  ]
}
