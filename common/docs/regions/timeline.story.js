import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Timeline',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.timeline)
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
    ${regions.timeline[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content }
    })}
  `

export const InlineStart = Template.bind({})
export const InlineStaggered = Template.bind({})
export const BlockStart = Template.bind({})
export const BlockStaggered = Template.bind({})

InlineStart.args = { variant: 'inline-start-timeline' }
InlineStaggered.args = { variant: 'inline-staggered-timeline' }
BlockStart.args = { variant: 'block-start-timeline' }
BlockStaggered.args = { variant: 'block-staggered-timeline' }
