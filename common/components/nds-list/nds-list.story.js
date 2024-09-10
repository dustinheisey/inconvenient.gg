import { html } from 'lit'
import './nds-list.js'

export default {
  title: 'Components/NdsList',
  component: 'nds-list',
  argTypes: {
    class: { control: 'text', description: 'Additional CSS classes' },
    theme: { control: 'text', description: 'Theme of the list' },
    full: { control: 'boolean', description: 'If the section should be full width' },
    headline: { control: 'text', description: 'Section headline' },
    overline: { control: 'text', description: 'Overline text' },
    body: { control: 'text', description: 'Body text' },
    items: { control: 'array', description: 'Array of list items' },
    variant: { control: 'select', options: ['grid', 'stack'], description: 'Layout variant' },
    icon: { control: 'text', description: 'Default icon for list items' }
  }
}

const Template = (args) => html`
  <nds-list
    .class=${args.class}
    .theme=${args.theme}
    .full=${args.full}
    .headline=${args.headline}
    .overline=${args.overline}
    .body=${args.body}
    .items=${args.items}
    .variant=${args.variant}
    .icon=${args.icon}
  ></nds-list>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  theme: 'background',
  full: false,
  headline: 'Our Features',
  overline: 'What we offer',
  body: 'Here are some of the key features we provide:',
  items: [
    { text: 'Feature 1', icon: '🌟' },
    { text: 'Feature 2', icon: '⚡' },
    { text: 'Feature 3', icon: '🔥' }
  ],
  variant: 'stack',
  icon: ''
}

export const GridLayout = Template.bind({})
GridLayout.args = {
  class: '',
  theme: 'background',
  full: false,
  headline: 'Feature Grid',
  overline: '',
  body: '',
  items: [
    { text: 'Feature 1', icon: '🌟' },
    { text: 'Feature 2', icon: '⚡' },
    { text: 'Feature 3', icon: '🔥' },
    { text: 'Feature 4', icon: '🚀' }
  ],
  variant: 'grid',
  icon: ''
}
