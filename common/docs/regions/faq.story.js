import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/FAQ',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.faq)
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
    ${regions.faq[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content }
    })}
  `

export const Offset = Template.bind({})
export const Accordion = Template.bind({})
export const Inline = Template.bind({})
export const BlurbGrid2 = Template.bind({})
export const BlurbGrid3 = Template.bind({})
export const CardGrid2 = Template.bind({})
export const CardGrid3 = Template.bind({})

Offset.args = { variant: 'offset-faq' }
Accordion.args = { variant: 'accordion-faq' }
Inline.args = { variant: 'inline-faq' }
BlurbGrid2.args = { variant: 'blurb-grid-2-faq' }
BlurbGrid3.args = { variant: 'blurb-grid-3-faq' }
CardGrid2.args = { variant: 'card-grid-2-faq' }
CardGrid3.args = { variant: 'card-grid-3-faq' }
