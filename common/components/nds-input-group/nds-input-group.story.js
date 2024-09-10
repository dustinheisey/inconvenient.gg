import { html } from 'lit'
import './nds-input-group.js'

export default {
  title: 'Components/NdsInputGroup',
  component: 'nds-input-group',
  argTypes: {
    inputs: { control: 'array', description: 'Array of input and button elements' }
  }
}

const Template = (args) => html` <nds-input-group .inputs=${args.inputs}></nds-input-group> `

export const Default = Template.bind({})
Default.args = {
  inputs: [
    { type: 'text', placeholder: 'Enter text...' },
    { type: 'button', label: 'Submit' }
  ]
}

export const EmailAndSubmit = Template.bind({})
EmailAndSubmit.args = {
  inputs: [
    { type: 'email', placeholder: 'Enter your email...' },
    { type: 'button', label: 'Subscribe' }
  ]
}
