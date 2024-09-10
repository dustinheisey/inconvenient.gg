import { html } from 'lit'
import './nds-split-img.js'

export default {
  title: 'Components/NdsSplitImgSlider',
  component: 'nds-split-img',
  argTypes: {
    beforeImage: { control: 'text', description: 'URL of the before image' },
    afterImage: { control: 'text', description: 'URL of the after image' },
    position: { control: 'number', description: 'Initial position of the slider' }
  }
}

const Template = (args) => html`
  <nds-split-img
    .beforeImage=${args.beforeImage}
    .afterImage=${args.afterImage}
    .position=${args.position}
  ></nds-split-img>
`

export const Default = Template.bind({})
Default.args = {
  beforeImage: 'https://via.placeholder.com/800x800/ff0000',
  afterImage: 'https://via.placeholder.com/800x800/00ff00',
  position: 50
}
