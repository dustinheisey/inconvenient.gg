import { html } from 'lit'
import './nds-blockquote.js'

export default {
  title: 'Components/NdsBlockquote',
  component: 'nds-blockquote',
  argTypes: {
    quote: { control: 'text', description: 'The quote text' },
    author: { control: 'text', description: 'The author of the quote' },
    variant: {
      control: 'select',
      options: ['accent', 'default'], // Provide options for the variant
      description: 'Choose between accent and default variants'
    }
  }
}

const Template = (args) => html`
  <nds-blockquote .quote=${args.quote} .author=${args.author} .variant=${args.variant}></nds-blockquote>
`

export const Default = Template.bind({})
Default.args = {
  quote: 'This is an inspirational quote.',
  author: 'Famous Author',
  variant: 'default'
}

export const Accent = Template.bind({})
Accent.args = {
  quote: 'This is a bold and highlighted quote.',
  author: 'Important Person',
  variant: 'accent'
}
