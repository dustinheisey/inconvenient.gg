import { html, css, LitElement } from 'lit'

export class NdsSubgallery extends LitElement {
  static properties = {
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    items: { type: Array }, // Array of items to display
    variant: { type: String }, // 'masonry', 'stack', or default grid
    col: { type: Number }, // Number of columns for grid variant
    class: { type: String } // Optional additional class for styling
  }

  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-m);
    }

    .prose {
      margin-bottom: var(--space-m);
    }

    .masonry {
      column-count: 3;
      column-gap: var(--space-m);
    }

    .masonry .masonry-item {
      break-inside: avoid;
      margin-bottom: var(--space-m);
    }

    .grid {
      display: grid;
      gap: var(--space-m);
    }

    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    .center {
      text-align: center;
    }

    .align-center {
      justify-content: center;
    }

    .page-headline {
      font-size: var(--font-size-xl);
    }

    .overline {
      font-size: var(--font-size-s);
      color: var(--color-primary);
    }
  `

  constructor() {
    super()
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.items = []
    this.variant = 'grid' // Default to grid variant
    this.col = 2 // Default to 2 columns
    this.class = ''
  }

  render() {
    return html`
      <div class="stack ${this.class}">
        ${this.headline
          ? html`
              <section class="prose center stack align-center text-center">
                ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
                <h2 class="page-headline">${this.headline}</h2>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </section>
            `
          : ''}
        ${this.variant === 'masonry'
          ? html`
              <div class="masonry col-3 gap-m">
                ${this.items.map((item) => html`<div class="masonry-item">${item}</div>`)}
              </div>
            `
          : this.variant === 'stack'
            ? html` <div class="stack gap-m">${this.items.map((item) => html`${item}`)}</div> `
            : html` <div class="grid grid-${this.col}">${this.items.map((item) => html`${item}`)}</div> `}
      </div>
    `
  }
}

customElements.define('nds-subgallery', NdsSubgallery)
