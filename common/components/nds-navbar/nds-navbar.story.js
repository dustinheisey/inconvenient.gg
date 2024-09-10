import { html } from 'lit'
import './nds-navbar.js'

export default {
  title: 'Components/NdsNavbar',
  component: 'nds-navbar',
  argTypes: {
    config: { control: 'object', description: 'Navbar configuration object' },
    class: { control: 'text', description: 'CSS class for the navbar' },
    type: { control: 'text', description: 'Type of navbar (e.g., article)' }
  }
}

const Template = (args) => html`
  <nds-navbar .config=${args.config} .class=${args.class} .type=${args.type}></nds-navbar>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  type: '',
  config: {
    header: {
      links: [
        { label: 'Home', url: '/' },
        {
          label: 'About',
          url: '/about',
          subLinks: [
            { label: 'Team', url: '/team' },
            { label: 'History', url: '/history' }
          ]
        },
        { label: 'Services', url: '/services' },
        { label: 'Contact', url: '/contact' }
      ],
      action: { url: '/get-started', label: 'Get Started' },
      bottombar: {
        links: [
          { label: 'Dashboard', url: '/dashboard', icon: '🏠' },
          { label: 'Messages', url: '/messages', icon: '✉️' }
        ],
        fab: { url: '/new', label: 'New Post', icon: '➕' }
      }
    }
  }
}
