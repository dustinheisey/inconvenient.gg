import { regions, themes } from '../util/consts.js'

export default {
  title: 'Regions/Hero',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(regions.hero)
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
    ${regions.hero[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content, config: args.config }
    })}
  `

export const SplitStart = Template.bind({})
export const SplitEnd = Template.bind({})
export const AngledBlockStartStart = Template.bind({})
export const AngledBlockStartEnd = Template.bind({})
export const AngledBlockEndStart = Template.bind({})
export const AngledBlockEndEnd = Template.bind({})
export const Tiles2Start = Template.bind({})
export const Tiles2End = Template.bind({})
export const Tiles3Start = Template.bind({})
export const Tiles3End = Template.bind({})
export const ImgCenter = Template.bind({})
export const ImgStart = Template.bind({})
export const ImgEnd = Template.bind({})
export const BgStart = Template.bind({})
export const BgCenter = Template.bind({})
export const BgEnd = Template.bind({})
export const GradientStart = Template.bind({})
export const GradientCenter = Template.bind({})
export const GradientEnd = Template.bind({})

SplitStart.args = { variant: 'split-start-hero' }
SplitEnd.args = { variant: 'split-end-hero' }
AngledBlockStartStart.args = { variant: 'angled-block-start-start-hero' }
AngledBlockStartEnd.args = { variant: 'angled-block-start-end-hero' }
AngledBlockEndStart.args = { variant: 'angled-block-end-start-hero' }
AngledBlockEndEnd.args = { variant: 'angled-block-end-end-hero' }
Tiles2Start.args = { variant: 'tiles-2-start-hero' }
Tiles2End.args = { variant: 'tiles-2-end-hero' }
Tiles3Start.args = { variant: 'tiles-3-start-hero' }
Tiles3End.args = { variant: 'tiles-3-end-hero' }
ImgCenter.args = { variant: 'img-center-hero' }
ImgStart.args = { variant: 'img-start-hero' }
ImgEnd.args = { variant: 'img-end-hero' }
BgStart.args = { variant: 'bg-start-hero' }
BgCenter.args = { variant: 'bg-center-hero' }
BgEnd.args = { variant: 'bg-end-hero' }
GradientStart.args = { variant: 'gradient-start-hero' }
GradientCenter.args = { variant: 'gradient-center-hero' }
GradientEnd.args = { variant: 'gradient-end-hero' }
