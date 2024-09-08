import { components, themes } from '../../util/consts.js'

export default {
  title: 'Components/Dark Mode',
  decorators: [
    (story) =>
      `<div
        style="width: 50vw; height: 50vh; background: var(--color-background); display: grid; place-items: center;"
      >
        ${story()}
      </div>`
  ],
  argTypes: {
    theme: {
      control: 'select',
      options: themes
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = (args) =>
  components.darkMode({
    theme: args.theme
  })
