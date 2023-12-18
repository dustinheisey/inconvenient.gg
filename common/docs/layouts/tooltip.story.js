export default {
  title: 'Layouts/Tooltip',
  parameters: {
    status: {
      type: 'stable'
    },
    layout: 'centered'
  },
  argTypes: {
    position: {
      control: {
        type: 'select'
      },
      options: ['block-start', 'block-end', 'inline-start', 'inline-end']
    }
  },
  args: {
    position: 'block-start'
  }
}

export const Default = ({ position }) =>
  `
    <p>
      The
      <abbr>
        HTML
        <tool-tip tip-position="${position}">
          Hypertext Markup Language
        </tool-tip>
      </abbr>
      abbr element.
    </p>
  `
