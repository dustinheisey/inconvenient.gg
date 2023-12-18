import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Testimonials',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.testimonials)
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
    ${regions.testimonials[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content }
    })}
  `

export const QuoteSimple = Template.bind({})
export const QuoteCenter = Template.bind({})
export const AvatarStart = Template.bind({})
export const AvatarEnd = Template.bind({})

QuoteSimple.args = { variant: 'quote-simple-testimonials' }
QuoteCenter.args = { variant: 'quote-center-testimonials' }
AvatarStart.args = { variant: 'avatar-start-testimonials' }
AvatarEnd.args = { variant: 'avatar-end-testimonials' }
