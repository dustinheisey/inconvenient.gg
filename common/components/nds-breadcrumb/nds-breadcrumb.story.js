import { html } from 'lit'
import './nds-breadcrumb.js'

export default {
  title: 'Components/NdsBreadcrumb',
  component: 'nds-breadcrumb',
  argTypes: {
    breadcrumbs: {
      control: 'object',
      description: 'Array of breadcrumb items. Each item contains label and url.'
    }
  }
}

const Template = (args) => html` <nds-breadcrumb .breadcrumbs=${args.breadcrumbs}></nds-breadcrumb> `

export const Default = Template.bind({})
Default.args = {
  breadcrumbs: [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Laptops', url: '/products/laptops' },
    { label: 'Gaming Laptop', url: '/products/laptops/gaming' }
  ]
}
