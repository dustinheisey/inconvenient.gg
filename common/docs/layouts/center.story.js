export default {
  title: 'Layouts/Center',
  args: { intrinsic: false },
  parameters: {
    status: {
      type: 'stable'
    },
    layout: 'centered'
  }
}

export const Container = () =>
  `
    <div class="center prose">
      <h2>Start your free trial today</h2>
      <p>Experience the difference for yourself</p>
      <button class="btn">Sign up now</button>
    </div>
  `

export const Intrinsic = () =>
  `
    <div class="center-intrinsic prose">
      <h2>Start your free trial today</h2>
      <p>Experience the difference for yourself</p>
      <button class="btn">Sign up now</button>
    </div>
  `
