import { html } from 'lit'
import './nds-range.js'

export default {
  title: 'Components/NdsRange',
  component: 'nds-range',
  argTypes: {
    min: { control: 'number', description: 'Minimum value for the range' },
    max: { control: 'number', description: 'Maximum value for the range' },
    step: { control: 'number', description: 'Step value for the range' },
    value: { control: 'number', description: 'Initial value for the range' },
    label: { control: 'text', description: 'Label for the range input' },
    unit: { control: 'text', description: 'Unit to display with the value (e.g., $)' }
  }
}

const Template = (args) => html`
  <nds-range
    .min=${args.min}
    .max=${args.max}
    .step=${args.step}
    .value=${args.value}
    .label=${args.label}
    .unit=${args.unit}
  ></nds-range>
`

export const Default = Template.bind({})
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  label: 'Budget',
  unit: '$'
}
