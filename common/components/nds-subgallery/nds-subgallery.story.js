import { html } from 'lit'
import './nds-subgallery.js'

export default {
  title: 'Components/NdsSubgallery',
  component: 'nds-subgallery',
  argTypes: {
    headline: { control: 'text', description: 'Headline text' },
    overline: { control: 'text', description: 'Optional overline text' },
    body: { control: 'text', description: 'Body text' },
    items: { control: 'array', description: 'Array of items to display' },
    variant: { control: 'select', options: ['masonry', 'stack', 'grid'], description: 'Gallery layout variant' },
    col: { control: 'number', description: 'Number of columns for grid variant' },
    class: { control: 'text', description: 'Optional CSS class' }
  }
}

const Template = (args) => html`
  <nds-subgallery
    .headline=${args.headline}
    .overline=${args.overline}
    .body=${args.body}
    .items=${args.items}
    .variant=${args.variant}
    .col=${args.col}
    .class=${args.class}
  ></nds-subgallery>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'Gallery',
  overline: 'A collection of images',
  body: 'Explore our gallery of images below.',
  items: [
    html`<img src="https://via.placeholder.com/300" alt="Item 1" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 2" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 3" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 4" />`
  ],
  variant: 'grid',
  col: 2,
  class: ''
}

export const MasonryLayout = Template.bind({})
MasonryLayout.args = {
  headline: 'Masonry Gallery',
  overline: '',
  body: '',
  items: [
    html`<img src="https://via.placeholder.com/300" alt="Item 1" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 2" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 3" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 4" />`
  ],
  variant: 'masonry',
  class: ''
}

export const StackLayout = Template.bind({})
StackLayout.args = {
  headline: 'Stacked Gallery',
  overline: '',
  body: '',
  items: [
    html`<img src="https://via.placeholder.com/300" alt="Item 1" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 2" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 3" />`,
    html`<img src="https://via.placeholder.com/300" alt="Item 4" />`
  ],
  variant: 'stack',
  class: ''
}
