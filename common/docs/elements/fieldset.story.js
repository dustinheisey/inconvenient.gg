export default {
  title: 'Elements/Fieldset',
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Fieldset = () => `
  <fieldset class="cards">
    <legend>
      <span class="required">What Services Are You Interested In?</span>
    </legend>
    <label class="input-card">
      <input type="checkbox" />
      <span>
        <svg focusable="false">
          <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
        </svg>
        Web Design & Development
      </span>
    </label>
    <label class="input-card">
      <input type="checkbox" />
      <span>
        <svg focusable="false">
          <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
        </svg>
        Web Design & Development
      </span>
    </label>
    <label class="input-card">
      <input type="checkbox" />
      <span>
        <svg focusable="false">
          <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
        </svg>
        Web Design & Development
      </span>
    </label>
  </fieldset>
`
