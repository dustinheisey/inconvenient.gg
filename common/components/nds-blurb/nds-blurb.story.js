import { html } from 'lit'
import './nds-blurb.js'

export default {
  title: 'Components/NdsBlurb',
  component: 'nds-blurb',
  argTypes: {
    headline: { control: 'text', description: 'The headline text' },
    body: { control: 'text', description: 'The body text' },
    date: { control: 'text', description: 'Date badge text' },
    url: { control: 'text', description: 'URL for the headline' },
    variant: { control: 'select', options: ['stack', 'default'], description: 'Layout variant (stack or default)' },
    img: { control: 'object', description: 'Image object with src, alt, variant' },
    icon: { control: 'text', description: 'Optional icon name' }
  }
}

const Template = (args) => html`
  <nds-blurb
    .headline=${args.headline}
    .body=${args.body}
    .date=${args.date}
    .url=${args.url}
    .variant=${args.variant}
    .img=${args.img}
    .icon=${args.icon}
  ></nds-blurb>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'This is a blurb headline',
  body: 'This is the body text for the blurb.',
  date: 'September 2024',
  url: '',
  variant: 'default',
  img: {
    src: 'https://via.placeholder.com/300',
    alt: 'Placeholder image',
    variant: 'default',
    loading: 'lazy'
  },
  icon: '🌟'
}

export const StackVariant = Template.bind({})
StackVariant.args = {
  headline: 'Blurb in Stack Layout',
  body: 'This blurb is in stack layout mode.',
  date: 'October 2024',
  url: '',
  variant: 'stack',
  img: {
    src: 'https://via.placeholder.com/300',
    alt: 'Placeholder image',
    variant: 'avatar',
    loading: 'lazy'
  },
  icon: ''
}
