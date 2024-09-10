import { html } from 'lit'
import './nds-strip.js'

export default {
  title: 'Components/NdsStrip',
  component: 'nds-strip',
  argTypes: {
    children: { control: 'array', description: 'Items inside the strip' }
  }
}

const Template = (args) => html`
  <nds-strip>
    ${args.children.map(
      (child) => html`
        <div
          class="card"
          style="display:inline-block; width: 200px; height: 200px; background-color: lightgray; margin: 0 10px;"
        >
          ${child}
        </div>
      `
    )}
  </nds-strip>
`

export const Default = Template.bind({})
Default.args = {
  children: ['Card 1', 'Card 2', 'Card 3', 'Card 4']
}
