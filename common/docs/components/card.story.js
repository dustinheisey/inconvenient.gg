import { components, themes } from '../util/consts.js'

export default {
  title: 'Components/Card',
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
  components.card({
    theme: args.theme
  })
