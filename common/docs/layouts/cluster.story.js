export default {
  title: 'Layouts/Cluster',
  args: {
    justify: 'start',
    align: 'center'
  },
  decorators: [(story) => ` <div style="width: 75vw">${story()}</div> `],
  parameters: {
    status: {
      type: 'stable'
    },
    layout: 'centered'
  }
}

export const JustifyStart = () =>
  `
    <ul class="cluster justify-start">
      <li><a href="#" class="link link-navigation">Link 1</a></li>
      <li><a href="#" class="link link-navigation">Link 2</a></li>
      <li><a href="#" class="link link-navigation">Link 3</a></li>
      <li><a href="#" class="link link-navigation">Link 4</a></li>
    </ul>
  `

export const JustifyCenter = () =>
  `
    <ul class="cluster justify-center">
      <li><a href="#" class="link link-navigation">Link 1</a></li>
      <li><a href="#" class="link link-navigation">Link 2</a></li>
      <li><a href="#" class="link link-navigation">Link 3</a></li>
      <li><a href="#" class="link link-navigation">Link 4</a></li>
    </ul>
  `

export const JustifyEnd = () =>
  `
    <ul class="cluster justify-end">
      <li><a href="#" class="link link-navigation">Link 1</a></li>
      <li><a href="#" class="link link-navigation">Link 2</a></li>
      <li><a href="#" class="link link-navigation">Link 3</a></li>
      <li><a href="#" class="link link-navigation">Link 4</a></li>
    </ul>
  `
