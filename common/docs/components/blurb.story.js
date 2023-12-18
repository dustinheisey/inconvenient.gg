import { components, themes } from '../util/consts.js'

export default {
  title: 'Components/Blurb',
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
  components.blurb({
    theme: args.theme
  })
