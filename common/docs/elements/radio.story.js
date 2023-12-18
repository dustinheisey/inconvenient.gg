export default {
  title: 'Elements/Radio',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Radio = () => `
  <label class="radio-label">
    <input type="radio" name="radio" />
    Radio
  </label>
`

export const RadioCard = () => `
  <label class="input-card">
    <input type="radio" />
    <span>
      <svg focusable="false">
        <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
      </svg>
      Web Design & Development
    </span>
  </label>
`
