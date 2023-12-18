/** @type { import('@storybook/html-webpack5').StorybookConfig } */
import path from 'path'

const config = {
  stories: ['../**/*.story.js', '../**/*.mdx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@etchteam/storybook-addon-status'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.njk$/,
      use: [
        {
          loader: 'simple-nunjucks-loader',
          options: {
            extensions: {
              Img: path.join(__dirname, 'extensions/img.js'),
              Icon: path.join(__dirname, 'extensions/icon.js'),
              Svg: path.join(__dirname, 'extensions/svg.js')
            }
          }
        }
      ]
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      consts: path.resolve(__dirname, '../util/consts.js'),
      funcs: path.resolve(__dirname, '../util/funcs.js')
    }

    // Return the altered config
    return config
  }
}
export default config
