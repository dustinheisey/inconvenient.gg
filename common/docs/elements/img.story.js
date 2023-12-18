export default {
  title: 'Elements/Img',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Default = () => `
  <img src="https://picsum.photos/200" alt="Random Image" />
`

export const Picture = () => `
  <picture>
    <source media="(max-width: 600px)" srcset="https://picsum.photos/400" />
    <img src="https://picsum.photos/800" alt="Random Image" />
  </picture>
`
