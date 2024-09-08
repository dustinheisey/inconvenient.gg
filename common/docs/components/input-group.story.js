import { components, themes } from '../../util/consts.js'

export default {
  title: 'Components/Input Group',
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
  components.inputGroup({
    theme: args.theme
  })
