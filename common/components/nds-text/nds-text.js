import { html, css, LitElement } from 'lit'

export class NdsText extends LitElement {
  static properties = {
    headline: { type: String }, // Main headline
    overline: { type: String }, // Overline text
    lead: { type: String }, // Lead paragraph
    body: { type: String }, // Main body content
    btn: { type: Object }, // Single button object (url, label, variant, external)
    btns: { type: Array }, // Multiple buttons array (each button has url, label, variant, external)
    input: { type: Object }, // Input group (type, placeholder, btn label)
    navbar: { type: Object }, // Navbar configuration
    sticky: { type: Boolean }, // Sticky class for the container
    justify: { type: String }, // Justify text alignment
    align: { type: String }, // Align text alignment
    size: { type: String }, // Size of headline (hero, page, region, title)
    accent: { type: String }, // Accent text inside the headline
    class: { type: String } // Additional classes
  }

  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }

    .sticky {
      position: sticky;
      top: 0;
    }

    .prose {
      font-size: var(--font-size-m);
      line-height: var(--line-height-body);
    }

    .navbar {
      display: block;
      width: 100%;
    }

    .hero-headline {
      font-size: var(--font-size-hero);
    }

    .page-headline {
      font-size: var(--font-size-xl);
    }

    .region-headline {
      font-size: var(--font-size-l);
    }

    .title-headline {
      font-size: var(--font-size-m);
    }

    .lead {
      font-size: var(--font-size-l);
      font-weight: bold;
    }

    .btn {
      display: inline-block;
      padding: var(--space-s) var(--space-m);
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      text-align: center;
      text-decoration: none;
      border-radius: var(--radius-s);
      transition: background-color 0.3s;
    }

    .input-group {
      display: flex;
      gap: var(--space-s);
    }

    input.input {
      padding: var(--space-s);
      border: 1px solid var(--color-neutral-300);
      border-radius: var(--radius-s);
    }

    button.btn {
      padding: var(--space-s) var(--space-m);
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      border: none;
      cursor: pointer;
      border-radius: var(--radius-s);
    }
  `

  constructor() {
    super()
    this.headline = ''
    this.overline = ''
    this.lead = ''
    this.body = ''
    this.btn = null
    this.btns = []
    this.input = null
    this.navbar = null
    this.sticky = false
    this.justify = 'start'
    this.align = 'start'
    this.size = 'region'
    this.accent = ''
    this.class = ''
  }

  renderNavbar() {
    return html`
      <header class="navbar">
        <nav class="inset-0">
          <div class="cluster justify-between region inset-0 gap-m">
            <a href="/">
              <span class="sr-only">Home</span>
              <svg><!-- Insert your SVG logo here --></svg>
            </a>
            <div class="cluster">
              <ul class="topbar cluster gap-m">
                ${this.navbar.header.links.map(
                  (link) => html`
                    <li>
                      <a href="${link.url}" class="link link-navigation"> ${link.label} </a>
                    </li>
                  `
                )}
              </ul>
              <div class="cluster gap-xs">
                <button class="dark-mode-toggle" id="theme-toggle" title="Toggles light & dark">
                  <svg><!-- Dark mode SVG here --></svg>
                </button>
                <a href="${this.navbar.header.action.url}" class="btn">${this.navbar.header.action.label}</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    `
  }

  renderButtons() {
    return html`
      <div class="cluster gap-2xs">
        ${this.btns.map(
          (btn) => html` <a href="${btn.url}" class="btn ${btn.variant ? btn.variant : ''}"> ${btn.label} </a> `
        )}
      </div>
    `
  }

  renderInputGroup() {
    return html`
      <div class="input-group">
        <input type="${this.input.type}" placeholder="${this.input.placeholder}" class="input" />
        <button type="submit" class="btn">${this.input.btn}</button>
      </div>
    `
  }

  renderHeadline() {
    return html`
      ${this.size === 'hero'
        ? html`<h1 class="hero-headline">
            ${this.accent ? html`<span class="color-primary">${this.accent}</span>` : ''} ${this.headline}
          </h1>`
        : this.size === 'page'
          ? html`<h1 class="page-headline">${this.headline}</h1>`
          : this.size === 'region'
            ? html`<h2 class="region-headline">${this.headline}</h2>`
            : html`<h3 class="title-headline">${this.headline}</h3>`}
    `
  }

  render() {
    return html`
      <div class="stack gap-xl ${this.class} ${this.sticky ? 'sticky' : ''}">
        ${this.navbar ? this.renderNavbar() : ''}

        <section class="prose auto stack gap-xs justify-${this.justify} align-${this.align} grow-1">
          ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''} ${this.renderHeadline()}
          ${this.lead ? html`<p class="lead">${this.lead}</p>` : ''}
          <p>${this.body}</p>
          ${this.btn ? html`<a href="${this.btn.url}" class="btn">${this.btn.label}</a>` : ''}
          ${this.btns.length ? this.renderButtons() : ''} ${this.input ? this.renderInputGroup() : ''}
        </section>
      </div>
    `
  }
}

customElements.define('nds-text', NdsText)
