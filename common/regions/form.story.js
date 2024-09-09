import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Form',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.form)
    },
    theme: {
      control: 'select',
      options: themes
    }
  },
  parameters: {
    status: {
      type: 'stable'
    },
    layout: 'centered'
  }
}

const Template = (args) =>
  `
    ${regions.form[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content }
    })}
  `

export const Center = Template.bind({})
export const SplitStart = Template.bind({})
export const SplitEnd = Template.bind({})

Center.args = { variant: 'center-form' }
SplitStart.args = { variant: 'split-start-form' }
SplitEnd.args = { variant: 'split-end-form' }
