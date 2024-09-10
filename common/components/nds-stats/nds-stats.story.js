import { html } from 'lit'
import './nds-stats.js'

export default {
  title: 'Components/NdsStats',
  component: 'nds-stats',
  argTypes: {
    headline: { control: 'text', description: 'Section headline' },
    overline: { control: 'text', description: 'Section overline' },
    body: { control: 'text', description: 'Section body' },
    variant: { control: 'select', options: ['inline', 'stack', 'grid'], description: 'Layout variant' },
    items: { control: 'array', description: 'Array of items (headline and body)' },
    border: { control: 'boolean', description: 'Show border at the top' },
    region: { control: 'boolean', description: 'Apply region styling (center and padding)' },
    center: { control: 'boolean', description: 'Center-align items' },
    class: { control: 'text', description: 'Additional CSS class' }
  }
}

const Template = (args) => html`
  <nds-stats
    .headline=${args.headline}
    .overline=${args.overline}
    .body=${args.body}
    .variant=${args.variant}
    .items=${args.items}
    .border=${args.border}
    .region=${args.region}
    .center=${args.center}
    .class=${args.class}
  ></nds-stats>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'Our Achievements',
  overline: 'Company Stats',
  body: 'We’ve achieved great things over the years, and here are some key highlights.',
  variant: 'grid',
  items: [
    { headline: '10k+', body: 'Customers served worldwide' },
    { headline: '500+', body: 'Employees across the globe' },
    { headline: '20', body: 'Years in business' },
    { headline: '99%', body: 'Customer satisfaction rate' }
  ],
  border: false,
  region: false,
  center: true,
  class: ''
}

export const Inline = Template.bind({})
Inline.args = {
  ...Default.args,
  variant: 'inline'
}

export const Stacked = Template.bind({})
Stacked.args = {
  ...Default.args,
  variant: 'stack'
}
