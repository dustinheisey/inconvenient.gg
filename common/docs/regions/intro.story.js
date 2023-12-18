import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Intro',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.intro)
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
    layout: 'fullscreen'
  }
}

const Template = (args) =>
  `
    ${regions.intro[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content }
    })}
  `

export const Center = Template.bind({})
export const Start = Template.bind({})
export const End = Template.bind({})
export const ImgEnd = Template.bind({})
export const ImgStart = Template.bind({})

Center.args = { variant: 'center-intro' }
Start.args = { variant: 'start-intro' }
End.args = { variant: 'end-intro' }
ImgEnd.args = { variant: 'img-end-intro' }
ImgStart.args = { variant: 'img-start-intro' }
