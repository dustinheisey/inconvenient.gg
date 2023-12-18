import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Stats',
  decorators: [(story) => `<div style="inline-size: 95vw">${story()}</div>`],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.stats)
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
    ${regions.stats[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content }
    })}
  `

export const Inline = Template.bind({})
export const ImgStart = Template.bind({})
export const ImgEnd = Template.bind({})
export const SplitStart = Template.bind({})
export const SplitEnd = Template.bind({})
export const Description = Template.bind({})

Inline.args = { variant: 'inline-stats' }
ImgStart.args = { variant: 'img-start-stats' }
ImgEnd.args = { variant: 'img-end-stats' }
SplitStart.args = { variant: 'split-start-stats' }
SplitEnd.args = { variant: 'split-end-stats' }
Description.args = {
  variant: 'description-stats'
}
