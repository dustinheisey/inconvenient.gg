import { html } from 'lit'
import './nds-sparkline.js'

export default {
  title: 'Components/NdsSparkline',
  component: 'nds-sparkline',
  argTypes: {
    items: { control: 'array', description: 'Array of items to display in the sparkline' },
    variant: {
      control: 'select',
      options: ['inline', 'inline-staggered', 'block-staggered'],
      description: 'Layout variant'
    }
  }
}

const Template = (args) => html` <nds-sparkline .items=${args.items} .variant=${args.variant}></nds-sparkline> `

export const Default = Template.bind({})
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  variant: 'inline'
}

export const InlineStaggered = Template.bind({})
InlineStaggered.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  variant: 'inline-staggered'
}

export const BlockStaggered = Template.bind({})
BlockStaggered.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  variant: 'block-staggered'
}
