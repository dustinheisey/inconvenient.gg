import { html } from 'lit'
import './nds-card.js'

export default {
  title: 'Components/NdsCard',
  component: 'nds-card',
  argTypes: {
    headline: { control: 'text', description: 'The headline text' },
    body: { control: 'text', description: 'The body text' },
    icon: { control: 'text', description: 'Optional icon' },
    url: { control: 'text', description: 'Link for the card' },
    theme: { control: 'select', options: ['default', 'dark'], description: 'Card theme' },
    variant: { control: 'select', options: ['default', 'flip', 'icon'], description: 'Card variant' },
    img: { control: 'object', description: 'Image object with src, alt' },
    list: { control: 'array', description: 'List of items for the list variant' }
  }
}

const Template = (args) => html`
  <nds-card
    .headline=${args.headline}
    .body=${args.body}
    .icon=${args.icon}
    .url=${args.url}
    .theme=${args.theme}
    .variant=${args.variant}
    .img=${args.img}
    .list=${args.list}
  ></nds-card>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'Default Card',
  body: 'This is a standard card.',
  url: '',
  theme: 'default',
  variant: 'default',
  img: {
    src: 'https://via.placeholder.com/300',
    alt: 'Placeholder Image'
  },
  list: []
}

export const FlipCard = Template.bind({})
FlipCard.args = {
  headline: 'Flip Card',
  body: 'This is a flip card with an overlay.',
  url: '',
  theme: 'default',
  variant: 'flip',
  img: {
    src: 'https://via.placeholder.com/300',
    alt: 'Placeholder Image'
  },
  list: [{ text: 'Item 1' }, { text: 'Item 2' }]
}
