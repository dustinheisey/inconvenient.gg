import { components, themes } from '../../util/consts.js'

export default {
  title: 'Components/Navigation',
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
  components.navbar({
    theme: args.theme
  })
