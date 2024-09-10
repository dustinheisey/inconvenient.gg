import { html } from 'lit'
import './nds-img.js'

export default {
  title: 'Components/NdsImg',
  component: 'nds-img',
  argTypes: {
    src: { control: 'text', description: 'Image source URL' },
    alt: { control: 'text', description: 'Alt text for the image' },
    ar: { control: 'text', description: 'Aspect ratio class (optional)' },
    loading: { control: 'text', description: 'Loading attribute (lazy or eager)' },
    variant: { control: 'select', options: ['default', 'avatar'], description: 'Image variant' },
    class: { control: 'text', description: 'Additional CSS classes' }
  }
}

const Template = (args) => html`
  <nds-img
    .src=${args.src}
    .alt=${args.alt}
    .ar=${args.ar}
    .loading=${args.loading}
    .variant=${args.variant}
    .class=${args.class}
  ></nds-img>
`

export const Default = Template.bind({})
Default.args = {
  src: 'https://via.placeholder.com/600x400',
  alt: 'Placeholder Image',
  ar: '',
  loading: 'lazy',
  variant: 'default',
  class: ''
}

export const Avatar = Template.bind({})
Avatar.args = {
  variant: 'avatar',
  ar: '',
  loading: 'lazy',
  class: ''
}
