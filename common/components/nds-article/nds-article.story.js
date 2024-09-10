import './nds-article.js'
import { html } from 'lit'

export default {
  title: 'Components/NdsArticle',
  component: 'nds-article',
  argTypes: {
    headline: { control: 'text' },
    body: { control: 'text' },
    img: { control: 'object' },
    time: { control: 'object' },
    btn: { control: 'object' }
  }
}

const Template = (args) => html`
  <nds-article
    .img=${args.img}
    .time=${args.time}
    .headline=${args.headline}
    .body=${args.body}
    .btn=${args.btn}
  ></nds-article>
`

export const Default = Template.bind({})
Default.args = {
  headline: 'This is an article headline',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  img: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    loading: 'lazy'
  },
  time: {
    time: '2024-09-09',
    label: 'September 9, 2024'
  },
  btn: {
    href: '#',
    label: 'Read more'
  }
}

export const NoImage = Template.bind({})
NoImage.args = {
  headline: 'This is an article headline',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  time: {
    time: '2024-09-09',
    label: 'September 9, 2024'
  }
}
