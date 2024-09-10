import { html, css, LitElement } from 'lit'

export class NdsInputGroup extends LitElement {
  static properties = {
    inputs: { type: Array } // Array of input and button elements
  }

  static styles = css`
    .input-group {
      display: flex;
      border-radius: var(--radius-pill);
      align-items: stretch;
      overflow: hidden;
    }

    .input-group > input,
    .input-group > button {
      border-radius: 0;
      margin: 0;
      border: 1px solid var(--color-neutral-300);
      padding: var(--space-xs);
    }

    .input-group > input {
      flex-grow: 1;
      padding: var(--space-s);
      border-right: none;
    }

    .input-group > button {
      background-color: var(--color-primary);
      color: white;
      border-left: none;
      cursor: pointer;
      padding: var(--space-s) var(--space-m);
    }

    @media (--tablet-portrait-up) {
      .input-group {
        flex-wrap: nowrap;
      }
    }
  `

  constructor() {
    super()
    this.inputs = []
  }

  render() {
    return html`
      <div class="input-group">
        ${this.inputs.map((input) =>
          input.type === 'button'
            ? html`<button type="button">${input.label}</button>`
            : html`<input type="${input.type}" placeholder="${input.placeholder}" />`
        )}
      </div>
    `
  }
}

customElements.define('nds-input-group', NdsInputGroup)
