import { html, css, LitElement } from 'lit'

export class NdsCard extends LitElement {
  static properties = {
    headline: { type: String },
    body: { type: String },
    icon: { type: String },
    url: { type: String },
    theme: { type: String },
    variant: { type: String }, // icon, flip, or list
    size: { type: String }, // xl or default
    img: { type: Object }, // { src, alt, loading, ar }
    list: { type: Array } // Array of items if the card has a list variant
  }

  static styles = css`
    .card {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      overflow: hidden;
      border-radius: var(--radius-l);
      transition: transform 0.3s ease;
      box-shadow: var(--shadow-l);
    }

    .card-link {
      text-decoration: none;
      color: inherit;
      display: inline-block;
    }

    .card-icon {
      min-width: fit-content;
      padding: var(--space-m);
      align-items: center;
      text-align: center;
    }

    .card-link:hover {
      box-shadow: var(--shadow-xl);
      transform: translate3d(0, -2px, 0);
    }

    .card-image {
      padding: 0;
      grid-column: 1/1;
      grid-row: 1/1;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius-l);
    }

    .card-overlay {
      grid-column: 1/1;
      grid-row: 1/1;
      background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent overlay */
      opacity: 0;
      display: flex;
      justify-content: start;
      align-items: start;
      transition: opacity 0.4s ease;
    }

    .card:hover .card-overlay {
      opacity: 1;
    }

    .card-text {
      padding: var(--space-l);
    }

    /* For list variant */
    .list {
      list-style: none;
      padding: 0;
    }

    .list li {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .list-icon {
      min-width: 24px;
      height: 24px;
    }
  `

  constructor() {
    super()
    this.headline = ''
    this.body = ''
    this.icon = ''
    this.url = ''
    this.theme = 'default'
    this.variant = ''
    this.size = ''
    this.img = null
    this.list = []
  }

  render() {
    return html`
      ${this.variant === 'flip'
        ? html`
            <div class="card card-flip theme-${this.theme}" tabindex="0">
              <div class="card-image">
                ${this.img ? html` <img src="${this.img.src}" alt="${this.img.alt}" /> ` : ''}
              </div>
              <div class="card-overlay">
                <div class="card-text">
                  <h3>${this.headline}</h3>
                  ${this.list.length > 0
                    ? html`
                        <ul class="list">
                          ${this.list.map(
                            (item) =>
                              html`<li>
                                ${item.icon ? html`<span class="list-icon">${item.icon}</span>` : ''}
                                ${item.text || item}
                              </li>`
                          )}
                        </ul>
                      `
                    : html`<p>${this.body}</p>`}
                </div>
              </div>
            </div>
          `
        : html`
            ${this.url
              ? html`
                  <a href="${this.url}" class="card card-link theme-${this.theme}"> ${this.renderCardContent()} </a>
                `
              : html` <article class="card theme-${this.theme}">${this.renderCardContent()}</article> `}
          `}
    `
  }

  renderCardContent() {
    return html`
      ${this.icon ? html`<div class="icon">${this.icon}</div>` : ''}
      <h3>${this.headline}</h3>
      <p>${this.body}</p>
    `
  }
}

customElements.define('nds-card', NdsCard)
