import { html, css, LitElement } from 'lit'

export class NdsNavbar extends LitElement {
  static properties = {
    config: { type: Object }, // Navbar configuration for links, actions, etc.
    class: { type: String }, // Optional additional class for the navbar
    type: { type: String } // Type of navbar (e.g., article with reading progress)
  }

  static styles = css`
    nav {
      position: relative;
      padding: var(--inset-page);
    }

    #reading-progress {
      z-index: 1;
      background-color: var(--color-primary);
      width: 100vw;
      position: absolute;
      left: 0;
      block-size: 3px;
      bottom: 0;
      right: 0;
      transform: translate(-100vw, 0);
      will-change: transform;
      pointer-events: none;
    }

    .navbar {
      position: sticky;
      top: -200px;
      z-index: 999;
    }

    .navbar.floating {
      box-shadow: var(--shadow-l);
      animation: transition 0.2s ease-in-out;
      animation-fill-mode: forwards;
    }

    .navbar .topbar,
    .navbar a.btn {
      display: none;
    }

    .bottombar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .bottombar > ul {
      inline-size: 100%;
      display: flex;
      align-items: stretch;
      justify-content: space-around;
      background: var(--color-surface);
      box-shadow: var(--shadow-l);
    }

    .bottombar > ul > li {
      flex: 1;
    }

    .fab {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--color-primary);
      box-shadow: var(--shadow-l);
      border-radius: var(--radius-circle);
      padding: var(--space-m);
      aspect-ratio: 1/1;
      color: var(--color-on-primary);
      position: absolute;
      bottom: 100%;
      right: var(--space-3xs);
    }

    @keyframes transition {
      from {
        top: -200px;
        background-color: transparent;
      }
      to {
        top: 0;
        background-color: var(--color-surface);
      }
    }
  `

  constructor() {
    super()
    this.config = {}
    this.class = ''
    this.type = ''
  }

  connectedCallback() {
    super.connectedCallback()
    this.scrollingNav() // Initialize the floating navbar logic
  }

  scrollingNav() {
    const navbar = this.shadowRoot.querySelector('nav')
    const top = navbar.offsetTop

    const floating = () => {
      if (window.scrollY > top) {
        navbar.classList.add('floating')
      } else {
        navbar.classList.remove('floating')
      }
    }

    window.addEventListener('scroll', floating)
  }

  renderLinks(links) {
    return html`
      <ul class="topbar cluster gap-m">
        ${links.map(
          (link) => html`
            <li>
              ${link.subLinks
                ? html`
                    <drop-down>
                      <a href="${link.url}" class="link link-navigation">${link.label}</a>
                      <ul>
                        ${link.subLinks.map(
                          (subLink) => html`
                            <li>
                              <a
                                href="${subLink.url}"
                                class="link link-navigation ${subLink.external ? 'external' : ''}"
                                ?target="${subLink.external ? '_blank' : ''}"
                              >
                                ${subLink.label} ${subLink.external ? html`<span>🔗</span>` : ''}
                              </a>
                            </li>
                          `
                        )}
                      </ul>
                    </drop-down>
                  `
                : html`
                    <a href="${link.url}" class="link link-navigation ${link.external ? 'external' : ''}">
                      ${link.label}
                    </a>
                  `}
            </li>
          `
        )}
      </ul>
    `
  }

  renderBottombar(bottombar) {
    return html`
      <div class="bottombar">
        <ul>
          ${bottombar.links.map(
            (item) => html`
              <li>
                <a href="${item.url}" class="navigation">
                  <span>${item.icon}</span>
                  <span>${item.label}</span>
                </a>
              </li>
            `
          )}
          <li class="fab">
            <a href="${bottombar.fab.url}">
              <span class="sr-only">${bottombar.fab.label}</span>
              ${bottombar.fab.icon}
            </a>
          </li>
        </ul>
      </div>
    `
  }

  render() {
    return html`
      <nav class="navbar">
        <div class="${this.class} stack region gap-xs align-center no-inset">
          <a href="/">
            <span class="sr-only">Home</span>
            <svg><!-- Insert logo SVG here --></svg>
          </a>

          ${this.config.header ? this.renderLinks(this.config.header.links) : ''}

          <div class="cluster gap-xs">
            <button
              type="button"
              class="dark-mode-toggle"
              id="theme-toggle"
              title="Toggles light & dark"
              aria-live="polite"
            >
              <svg focusable="false" class="sun-and-moon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                <circle class="sun" cx="12" cy="12" r="6" fill="var(--color-primary)" />
                <!-- Sun beams and moon paths -->
              </svg>
            </button>

            <a href="${this.config.header.action.url}" class="btn"> ${this.config.header.action.label} </a>
          </div>

          ${this.config.header.bottombar ? this.renderBottombar(this.config.header.bottombar) : ''}
        </div>

        ${this.type === 'article' ? html`<div id="reading-progress" aria-hidden="true"></div>` : ''}
      </nav>
    `
  }
}

customElements.define('nds-navbar', NdsNavbar)
