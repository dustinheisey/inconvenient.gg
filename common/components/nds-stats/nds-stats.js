import { html, css, LitElement } from 'lit'

export class NdsStats extends LitElement {
  static properties = {
    headline: { type: String }, // Section headline
    overline: { type: String }, // Section overline
    body: { type: String }, // Section body text
    variant: { type: String }, // Layout variant ('inline', 'stack', or 'grid')
    items: { type: Array }, // Array of stats (each with headline and body)
    border: { type: Boolean }, // Optionally show border
    region: { type: Boolean }, // Apply region styling
    center: { type: Boolean }, // Center align items if true
    class: { type: String } // Additional class for custom styling
  }

  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }

    .border-block-start {
      border-block-start: 2px solid var(--color-primary);
    }

    .region {
      margin: var(--space-xl);
      padding: var(--space-xl);
    }

    .align-center {
      justify-content: center;
      text-align: center;
    }

    .grid {
      display: grid;
      gap: var(--space-l);
    }

    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .switcher {
      display: flex;
      flex-wrap: wrap;
    }

    .switch-phone {
      gap: var(--space-xl);
    }

    .section-headline {
      font-size: var(--font-size-xl);
      font-weight: bold;
    }

    .prose {
      margin: 0;
    }

    .gap-3xs {
      gap: var(--space-3xs);
    }
  `

  constructor() {
    super()
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.variant = 'grid' // Default to grid layout
    this.items = []
    this.border = false
    this.region = false
    this.center = false
    this.class = ''
  }

  renderItems() {
    return this.items.map(
      (item) => html`
        <div class="prose stack gap-3xs ${this.center ? 'align-center text-center' : ''}">
          <h3 class="section-headline">${item.headline}</h3>
          <p>${item.body}</p>
        </div>
      `
    )
  }

  render() {
    return html`
      <div
        class="stack gap-xl ${this.border ? 'border-block-start' : ''} ${this.region
          ? 'region align-center inset-xl'
          : ''}"
      >
        ${this.headline
          ? html`
              <section>
                ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
                <h2 class="region-headline">${this.headline}</h2>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </section>
            `
          : ''}
        ${this.variant === 'inline'
          ? html` <div class="switcher switch-phone align-start gap-xl ${this.class}">${this.renderItems()}</div> `
          : this.variant === 'stack'
            ? html` <div class="stack gap-l fixed ${this.class}">${this.renderItems()}</div> `
            : html` <div class="${this.class} grid grid-2 fixed">${this.renderItems()}</div> `}
      </div>
    `
  }
}

customElements.define('nds-stats', NdsStats)
