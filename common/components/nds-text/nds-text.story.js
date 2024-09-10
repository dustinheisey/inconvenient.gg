import { html } from 'lit'
import './nds-text.js'

export default {
  title: 'Components/NdsText',
  component: 'nds-text',
  argTypes: {
    class: { control: 'text', description: 'Additional CSS class' },
    sticky: { control: 'boolean', description: 'Sticky section' },
    headline: { control: 'text', description: 'Headline text' },
    overline: { control: 'text', description: 'Overline text' },
    body: { control: 'text', description: 'Body text' },
    size: { control: 'select', options: ['hero', 'page', 'region', 'title'], description: 'Headline size' },
    btn: { control: 'object', description: 'Button configuration' },
    btns: { control: 'array', description: 'Multiple buttons configuration' },
    input: { control: 'object', description: 'Input group configuration' }
  }
}

const Template = (args) => html`
  <nds-text
    class="${args.class}"
    ?sticky="${args.sticky}"
    .headline="${args.headline}"
    .overline="${args.overline}"
    .body="${args.body}"
    .size="${args.size}"
    .btn="${args.btn}"
    .btns="${args.btns}"
    .input="${args.input}"
  ></nds-text>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  sticky: false,
  headline: 'Welcome to the Hero Section',
  overline: 'Overline text',
  body: 'This is the main body of the text section.',
  size: 'hero',
  btn: { url: '#', label: 'Learn More', variant: 'primary' },
  btns: [],
  input: null
}
