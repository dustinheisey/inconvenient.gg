import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Logos',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.logos)
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
    ${regions.logos[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content, col: 3 }
    })}
  `

export const Grid = Template.bind({})
export const Simple = Template.bind({})
export const Split = Template.bind({})

Grid.args = { variant: 'grid-logos' }
Simple.args = { variant: 'simple-logos' }
Split.args = { variant: 'split-logos' }
