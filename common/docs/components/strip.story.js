import { components, themes } from '../../util/consts.js'

export default {
  title: 'Components/Strip',
  decorators: [(story) => `<div style="inline-size: 50vw;">${story()}</div>`],
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
  components.strip({
    theme: args.theme
  })
