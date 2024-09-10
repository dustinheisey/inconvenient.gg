import { html, css, LitElement } from 'lit'

export class NdsSparkline extends LitElement {
  static properties = {
    items: { type: Array }, // Array of items to display in the sparkline
    variant: { type: String } // The layout variant ('inline', 'inline-staggered', 'block-staggered')
  }

  static styles = css`
    .sparkline {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .sparkline-inline {
      flex-direction: row;
    }

    .sparkline-inline-staggered {
      flex-direction: row;
      align-items: baseline;
    }

    .sparkline-block-staggered {
      flex-direction: column;
    }

    .line {
      background-color: var(--color-primary);
      width: 100%;
      height: 2px;
    }
  `

  constructor() {
    super()
    this.items = []
    this.variant = 'inline' // Default variant
  }

  render() {
    return html`
      <div class="sparkline ${this.getVariantClass()}">
        ${this.items.map(
          (item) => html`
            <div class="line" aria-hidden="true"></div>
            <div>${item}</div>
          `
        )}
      </div>
    `
  }

  getVariantClass() {
    switch (this.variant) {
      case 'inline-staggered':
        return 'sparkline-inline-staggered'
      case 'block-staggered':
        return 'sparkline-block-staggered'
      default:
        return 'sparkline-inline'
    }
  }
}

customElements.define('nds-sparkline', NdsSparkline)
