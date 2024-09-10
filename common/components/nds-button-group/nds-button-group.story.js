import { html } from 'lit'
import './nds-button-group.js'

export default {
  title: 'Components/NdsButtonGroup',
  component: 'nds-button-group',
  argTypes: {
    buttons: {
      control: 'object',
      description: 'Array of button objects. Each object contains label, url, and variant.'
    }
  }
}

const Template = (args) => html` <nds-button-group .buttons=${args.buttons}></nds-button-group> `

export const Default = Template.bind({})
Default.args = {
  buttons: [
    { label: 'Primary Button', url: '#', variant: 'primary' },
    { label: 'Secondary Button', url: '#', variant: 'secondary' },
    { label: 'Third Button', url: '#' }
  ]
}

export const NoLinks = Template.bind({})
NoLinks.args = {
  buttons: [
    { label: 'Primary Action', variant: 'primary' },
    { label: 'Secondary Action', variant: 'secondary' },
    { label: 'Tertiary Action' }
  ]
}
