import { components, themes } from '../util/consts.js'

export default {
  title: 'Components/Accordion',
  argTypes: {
    theme: {
      control: 'select',
      options: themes
    }
  },
  args: {
    theme: 'background'
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = (args) =>
  components.accordion({
    theme: args.theme
  })
