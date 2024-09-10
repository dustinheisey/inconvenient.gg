import { html, css, LitElement } from 'lit'

export class NdsRange extends LitElement {
  static properties = {
    min: { type: Number }, // Minimum value for the range
    max: { type: Number }, // Maximum value for the range
    step: { type: Number }, // Step value for the range
    value: { type: Number }, // Initial value for the range
    label: { type: String }, // Label for the range
    unit: { type: String } // Unit to display (e.g., '$')
  }

  static styles = css`
    .range-wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--space-s);
    }

    .range-output {
      font-size: var(--font-size-m);
      font-weight: bold;
      margin-top: var(--space-xs);
    }

    .range-input {
      width: 100%;
      padding: var(--space-s);
    }
  `

  constructor() {
    super()
    this.min = 0
    this.max = 100
    this.step = 1
    this.value = 50
    this.unit = '$'
  }

  handleInput(event) {
    this.value = event.target.value
  }

  render() {
    return html`
      <div class="range-wrapper">
        <label for="range-input">${this.label}</label>
        <input
          id="range-input"
          class="range-input"
          type="range"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          .value="${this.value}"
          @input="${this.handleInput}"
        />
        <output id="range-output" class="range-output">${this.unit}${this.value}</output>
      </div>
    `
  }
}

customElements.define('nds-range', NdsRange)
