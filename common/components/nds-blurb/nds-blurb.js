import { html, css, LitElement } from 'lit'

export class NdsBlurb extends LitElement {
  static properties = {
    img: { type: Object }, // Object with src, alt, variant (e.g., avatar)
    date: { type: String }, // Badge date
    headline: { type: String }, // Headline text
    body: { type: String }, // Body text
    url: { type: String }, // Optional URL for headline link
    icon: { type: String }, // Optional icon name
    variant: { type: String } // 'stack' or default
  }

  static styles = css`
    .blurb {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .blurb > :is(h1, h2, h3, h4, h5, h6) + p {
      margin-top: var(--space-xs);
    }

    .blurb > svg + :is(h1, h2, h3, h4, h5, h6) {
      margin-top: var(--space-s);
    }

    .blurb > p + a {
      margin-top: var(--space-2xs);
    }

    .badge {
      display: inline-block;
      padding: var(--space-xs) var(--space-s);
      background-color: var(--color-primary);
      color: white;
      border-radius: var(--radius-s);
      text-align: end;
    }

    .title-headline {
      font-size: var(--font-size-l);
      font-weight: bold;
    }

    .section-headline a {
      color: var(--color-primary);
      text-decoration: none;
    }

    .section-headline a:hover {
      text-decoration: underline;
    }

    .frame img {
      max-width: 100%;
      height: auto;
      border-radius: 50%; /* For avatar variant */
    }

    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-s);
    }
  `

  constructor() {
    super()
    this.img = null
    this.date = ''
    this.headline = ''
    this.body = ''
    this.url = ''
    this.icon = ''
    this.variant = '' // Default is empty (no stack)
  }

  render() {
    return html`
      <div class="blurb">
        ${this.img
          ? html`
              <div class="frame">
                ${this.img.variant === 'avatar'
                  ? html` <img src="https://i.pravatar.cc/300" alt="avatar" loading="lazy" /> `
                  : html` <img src="${this.img.src}" alt="${this.img.alt}" loading="${this.img.loading || 'lazy'}" /> `}
              </div>
            `
          : ''}
        ${this.variant === 'stack'
          ? html`
              <div class="stack align-start">
                <p class="badge badge-primary">${this.date}</p>
                <h3 class="title-headline">${this.headline}</h3>
                <p>${this.body}</p>
              </div>
            `
          : html`
              <p class="badge badge-primary">${this.date}</p>
              <h3 class="${this.url ? 'section-headline' : 'title-headline'}">
                ${this.icon ? html`<span class="icon">${this.icon}</span>` : ''}
                ${this.url
                  ? html` <a href="${this.url}" class="link-navigation"> ${this.headline} </a> `
                  : html`${this.headline}`}
              </h3>
              <p>${this.body}</p>
            `}
      </div>
    `
  }
}

customElements.define('nds-blurb', NdsBlurb)
