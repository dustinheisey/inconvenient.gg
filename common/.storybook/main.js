export default {
  stories: [
    '../styles/tokens/**/*.mdx',
    '../styles/elements/**/*.story.js',
    '../styles/layouts/**/*.story.js',
    '../components/**/*.story.js'
  ],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', 'storybook-dark-mode'],
  framework: '@storybook/web-components-vite' // 👈 Add this
}
