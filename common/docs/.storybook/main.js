export default {
  stories: ['../tokens/*.mdx', '../elements/*.story.js', '../layouts/*.story.js', '../components/*.story.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@etchteam/storybook-addon-status'
  ],
  framework: '@storybook/web-components-vite' // 👈 Add this
}
