import { components, themes } from '../util/consts.js'

export default {
  title: 'Components/Banner',
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
  components.banner({
    theme: args.theme
  })
