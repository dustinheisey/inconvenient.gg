import { html, css, LitElement } from 'lit'

export class NdsButtonGroup extends LitElement {
  static properties = {
    buttons: { type: Array } // Array of button objects (label, url, variant)
  }

  static styles = css`
    .button-group {
      display: flex;
      gap: var(--space-s); /* Adjust spacing between buttons */
      flex-wrap: wrap;
    }

    .button {
      padding: var(--space-xs) var(--space-m);
      background-color: var(--color-primary);
      color: white;
      border: none;
      border-radius: var(--radius-s);
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      display: inline-block;
    }

    .button.secondary {
      background-color: var(--color-secondary);
    }

    .button:hover {
      opacity: 0.9;
    }

    .button:focus {
      outline: 2px solid var(--color-outline);
    }

    .button-group a {
      text-decoration: none;
      color: inherit;
    }
  `

  constructor() {
    super()
    this.buttons = [] // Initialize with an empty button array
  }

  render() {
    return html`
      <div class="button-group">
        ${this.buttons.map(
          (button) => html`
            ${button.url
              ? html` <a href="${button.url}" class="button ${button.variant}"> ${button.label} </a> `
              : html` <button class="button ${button.variant}">${button.label}</button> `}
          `
        )}
      </div>
    `
  }
}

customElements.define('nds-button-group', NdsButtonGroup)
