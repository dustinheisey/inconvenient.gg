export default {
  title: 'Elements/Badge',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'Badge Type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      },
      options: ['primary', 'secondary', 'tertiary']
    },
    showStatus: {
      control: 'boolean',
      description: 'Badge Status Dot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  },
  args: { type: 'primary', showStatus: false },
  parameters: {
    status: {
      type: 'stable'
    },
    layout: 'centered'
  }
}

export const Default = ({ type, showStatus }) => `
  <span class="badge badge-${type} ${showStatus ? 'status' : ''}">Badge Text</span>
`

// Badges
export const Badges = () => `
  <div class="cluster">
    <span class="badge badge-primary">Badge Text</span>
    <span class="badge badge-secondary">Badge Text</span>
    <span class="badge badge-tertiary">Badge Text</span>
  </div>
`

// Badges with status
export const BadgesWithStatus = () => `
  <div class="cluster">
    <span class="badge badge-primary status">Badge Text</span>
    <span class="badge badge-secondary status">Badge Text</span>
    <span class="badge badge-tertiary status">Badge Text</span>
  </div>
`
