import './nds-accordion.js'
import { html } from 'lit'
// import '../../index.min.css'

export default {
  title: 'Components/NdsAccordion',
  component: 'nds-accordion',
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark', 'background'] // Add your theme options here
    },
    headline: {
      control: 'text'
    },
    overline: {
      control: 'text'
    },
    body: {
      control: 'text'
    }
  }
}

const Template = (args) => html`
  <nds-accordion
    .items=${args.items}
    .theme=${args.theme}
    .headline=${args.headline}
    .overline=${args.overline}
    .body=${args.body}
  ></nds-accordion>
`

export const Default = Template.bind({})
Default.args = {
  theme: 'light',
  headline: 'Accordion Example',
  overline: 'This is an overline',
  body: 'This is a description of the accordion.',
  items: [
    {
      headline: 'Accordion Item 1',
      body: 'This is the content of the first accordion item.',
      theme: 'light',
      btn: {
        label: 'Learn more',
        url: '#',
        variant: 'primary',
        external: true
      }
    },
    {
      headline: 'Accordion Item 2',
      body: 'This is the content of the second accordion item.',
      theme: 'dark',
      btn: {
        label: 'More Info',
        url: '#',
        variant: 'secondary',
        external: false
      }
    }
  ]
}
