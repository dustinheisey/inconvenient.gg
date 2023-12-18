import { components, themes } from '../util/consts.js'

export default {
  title: 'Components/Button Group',
  argTypes: {
    theme: {
      control: 'select',
      options: themes
    },
    variant: {
      control: { type: 'select' },
      options: ['start', 'center', 'end']
    }
  },
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

const Template = (args) =>
  components.buttonGroup({
    theme: args.theme
  })

export const Start = Template.bind({})
export const Center = Template.bind({})
export const End = Template.bind({})

Start.args = {
  location: 'start'
}
Center.args = {
  location: 'center'
}
End.args = {
  location: 'end'
}
