import './nds-banner.js'
import { html } from 'lit'

export default {
  title: 'Components/NdsBanner',
  component: 'nds-banner',
  argTypes: {
    dismissible: {
      control: 'boolean',
      description: 'Determines if the banner can be dismissed',
      defaultValue: true
    },
    content: {
      control: 'text',
      description: 'Content inside the banner'
    }
  }
}

const Template = (args) => html` <nds-banner ?dismissible=${args.dismissible}> ${args.content} </nds-banner> `

export const Default = Template.bind({})
Default.args = {
  dismissible: true,
  content: 'This is a banner notification!'
}

export const NonDismissible = Template.bind({})
NonDismissible.args = {
  dismissible: false,
  content: 'This banner cannot be dismissed.'
}
