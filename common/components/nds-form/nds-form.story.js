import { html } from 'lit'
import './nds-form.js'

export default {
  title: 'Components/NdsForm',
  component: 'nds-form',
  argTypes: {
    headline: { control: 'text', description: 'The headline of the form' },
    overline: { control: 'text', description: 'Optional overline text' },
    body: { control: 'text', description: 'Description or body text' },
    inputs: { control: 'object', description: 'Array of form inputs' },
    submit: { control: 'text', description: 'Submit button text' },
    theme: { control: 'text', description: 'Optional theme class for styling' }
  }
}

const Template = (args) => html`
  <nds-form
    .headline=${args.headline}
    .overline=${args.overline}
    .body=${args.body}
    .inputs=${args.inputs}
    .submit=${args.submit}
    .theme=${args.theme}
  ></nds-form>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'Contact Us',
  overline: 'Get in touch',
  body: 'Please fill out the form below to reach us.',
  inputs: [
    { type: 'text', label: 'Your Name', id: 'name', required: true },
    { type: 'email', label: 'Email Address', id: 'email', required: true },
    { type: 'textarea', label: 'Your Message', id: 'message', required: true }
  ],
  submit: 'Send Message',
  theme: 'light'
}
