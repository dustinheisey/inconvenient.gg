export default {
  title: 'Elements/Paragraph',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      description: 'Link Variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'p' }
      },
      options: ['p', 'lead', 'overline', 'caption']
    }
  },
  args: { variant: 'p' },
  parameters: {
    status: {
      type: 'stable'
    },
    layout: 'centered'
  }
}

export const Default = ({ variant }) => {
  return `
    <p class="${variant === 'p' ? '' : variant}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem
      vitae odio pellentesque luctus in at justo. Nam vitae odio eget leo
      vehicula consequat. Ut molestie, tortor eget finibus vehicula, nisi elit
      bibendum elit, vel ultrices nunc massa ut nulla. In hac habitasse platea
      dictumst. Suspendisse eleifend, augue vitae luctus bibendum, sem sapien
      porta mi, ac blandit nunc lorem in nisi. Proin porttitor diam vitae massa
      facilisis, vel dictum sapien dapibus. Ut tincidunt metus eget mauris
      faucibus lacinia. Nam at mauris turpis. Duis scelerisque enim et urna
      tincidunt, nec rhoncus ex auctor. Vestibulum facilisis felis dolor, vel
      interdum enim pretium a.
    </p>
  `
}

export const Lead = () => {
  return `
    <p class="lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem
      vitae odio pellentesque luctus in at justo. Nam vitae odio eget leo
      vehicula consequat. Ut molestie, tortor eget finibus vehicula, nisi elit
      bibendum elit, vel ultrices nunc massa ut nulla.
    </p>
  `
}

export const P = () => {
  return `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem
      vitae odio pellentesque luctus in at justo. Nam vitae odio eget leo
      vehicula consequat. Ut molestie, tortor eget finibus vehicula, nisi elit
      bibendum elit, vel ultrices nunc massa ut nulla.
    </p>
  `
}

export const Overline = () => ' <p class="overline">Company News</p> '

export const Caption = () =>
  `
    <p class="caption">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem
      vitae odio pellentesque luctus in at justo.
    </p>
  `
