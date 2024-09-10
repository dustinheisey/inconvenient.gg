import { html, css, LitElement } from 'lit'

export class NdsList extends LitElement {
  static properties = {
    class: { type: String }, // Additional classes for styling
    theme: { type: String }, // Theme for the section (optional)
    full: { type: Boolean }, // Full width (optional)
    headline: { type: String }, // Section headline (optional)
    overline: { type: String }, // Overline text (optional)
    body: { type: String }, // Body text (optional)
    items: { type: Array }, // Array of list items
    variant: { type: String }, // List layout variant ('grid' or 'stack')
    icon: { type: String } // Default icon for all list items
  }

  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-l);
    }

    .grid {
      display: grid;
      gap: var(--space-s);
    }

    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .prose {
      margin-bottom: var(--space-m);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .inline {
      display: flex;
      align-items: center;
    }

    .align-start {
      align-items: flex-start;
    }

    .gap-xs {
      gap: var(--space-xs);
    }

    .region-headline {
      font-size: var(--font-size-xl);
    }

    .overline {
      font-size: var(--font-size-s);
      color: var(--color-primary);
    }

    .icon-secondary {
      margin-right: var(--space-xs);
    }
  `

  constructor() {
    super()
    this.class = ''
    this.theme = 'background'
    this.full = false
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.items = []
    this.variant = 'stack' // Default to 'stack' layout
    this.icon = ''
  }

  render() {
    return html`
      <section class="${this.class} theme-${this.theme} ${this.full ? 'full' : ''} stack gap-l">
        ${this.headline
          ? html`
              <div class="prose">
                ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
                <h2 class="region-headline">${this.headline}</h2>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </div>
            `
          : ''}
        ${this.variant === 'grid'
          ? html`
              <ul class="grid grid-2 gap-s">
                ${this.items.map(
                  (item) => html`
                    <li class="inline align-start gap-xs">
                      ${this.icon || item.icon
                        ? html`<span class="icon-secondary">${this.icon || item.icon}</span>`
                        : ''}
                      ${item.text || item}
                    </li>
                  `
                )}
              </ul>
            `
          : html`
              <ul class="stack gap-xs">
                ${this.items.map(
                  (item) => html`
                    <li class="inline align-start gap-xs">
                      ${this.icon || item.icon
                        ? html`<span class="icon-secondary">${this.icon || item.icon}</span>`
                        : ''}
                      ${item.text || item}
                    </li>
                  `
                )}
              </ul>
            `}
      </section>
    `
  }
}

customElements.define('nds-list', NdsList)
