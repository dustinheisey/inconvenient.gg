export default {
  title: 'Elements/Input',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      description: 'Input Variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'simple' }
      },
      options: ['simple', 'underline']
    }
  },
  args: { variant: 'simple' },
  parameters: {
    status: {
      type: 'stable'
    },
    layout: 'centered'
  }
}

export const Default = ({ variant }) => `
  <label>
    Input Label
    <input class="input ${variant === 'simple' ? '' : `input-${variant}`}" />
  </label>
`

export const SimpleInput = () => `
  <label>Input Label</label>
  <input class="input" placeholder="Simple Input" />
`

SimpleInput.parameters = {
  docs: {
    description: {
      story:
        'Simple inputs should be used for basic input fields where no additional emphasis or styling is required. They should be used for fields like email, username, or password input fields.'
    },
    source: {
      code: `
<input class="input" placeholder="Simple Input" />
      `
    }
  }
}

export const UnderlineInput = () => `
  <label>Input Label</label>
  <input class="input input-underline" placeholder="Underline Input" />
`

UnderlineInput.parameters = {
  docs: {
    description: {
      story:
        'Underline inputs should be used when the input field needs additional emphasis, but a solid fill or outline is not desired. They should be used for fields like website URL, phone number, or address input fields.'
    },
    source: {
      code: `
<input class="input input-underline" placeholder="Underline Input" />
      `
    }
  }
}
