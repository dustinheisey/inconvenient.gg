import { html, css, LitElement } from 'lit'

export class NdsDarkModeToggle extends LitElement {
  static properties = {
    theme: { type: String }
  }

  static styles = css`
    /*! Start of darkModeStyles */
    .dark-mode-toggle {
      color: var(--color-primary);

      --size: 1.5rem;
      --icon-fill: var(--color-primary);
      --ease-1: cubic-bezier(0.25, 0, 0.5, 1);
      --ease-2: cubic-bezier(0.25, 0, 0.4, 1);
      --ease-3: cubic-bezier(0.25, 0, 0.3, 1);
      --ease-4: cubic-bezier(0.25, 0, 0.2, 1);
      --ease-5: cubic-bezier(0.25, 0, 0.1, 1);
      --ease-in-1: cubic-bezier(0.25, 0, 1, 1);
      --ease-out-5: cubic-bezier(0, 0, 0, 1);
    }

    .dark-mode-toggle {
      background: none;
      border: none;
      padding: 0;
      inline-size: var(--size);
      block-size: var(--size);
      aspect-ratio: 1/1;
      border-radius: 50%;
      cursor: pointer;
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
      outline-offset: 5px;
    }

    .dark-mode-toggle > svg {
      inline-size: 100%;
      block-size: 100%;
      stroke-linecap: round;
    }

    .sun-and-moon > .sun,
    .sun-and-moon > .moon,
    .sun-and-moon > .sun-beams {
      transform-origin: center center;
    }

    .sun-and-moon > .moon circle {
      transform: translateX(7px);
    }

    [data-theme='dark'] .sun-and-moon > .moon circle {
      transform: translateX(-7px);
    }

    [data-theme='dark'] .sun-and-moon > .sun {
      transform: scale(1.75);
    }

    [data-theme='dark'] .sun-and-moon > .sun-beams {
      opacity: 0;
    }

    .dark-mode-toggle > .sun-and-moon > .sun {
      fill: var(--icon-fill);
    }

    .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
      fill: var(--icon-fill);
    }

    .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
      stroke: var(--icon-fill);
    }

    [data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun {
      fill: var(--icon-fill);
    }

    [data-theme='dark'] .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
      fill: var(--icon-fill);
    }

    [data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun-beams {
      stroke: var(--icon-fill);
    }

    [data-theme='dark'] .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
      stroke: var(--icon-fill);
    }
    /*! End of darkModeStyles */
  `

  constructor() {
    super()
    this.theme = this.getColorPreference()
  }

  getColorPreference() {
    if (localStorage.getItem('theme-preference')) {
      return localStorage.getItem('theme-preference')
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  }

  setPreference() {
    localStorage.setItem('theme-preference', this.theme)
    this.reflectPreference()
  }

  reflectPreference() {
    document.documentElement.setAttribute('data-theme', this.theme)
    const toggleButton = this.renderRoot.querySelector('#theme-toggle')
    if (toggleButton) {
      toggleButton.setAttribute('aria-label', `Switch to ${this.theme === 'light' ? 'dark' : 'light'} mode`)
    }
  }

  onClick() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
    this.setPreference()
  }

  connectedCallback() {
    super.connectedCallback()
    this.reflectPreference()
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this.theme = e.matches ? 'dark' : 'light'
      this.setPreference()
    })
  }

  render() {
    return html`
      <button
        id="theme-toggle"
        class="dark-mode-toggle"
        aria-label="Switch to ${this.theme === 'light' ? 'dark' : 'light'} mode"
        @click=${this.onClick}
      >
        <svg
          class="sun-and-moon"
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="sun" cx="12" cy="12" r="6"></circle>
          <g class="sun-beams">
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </g>
          <g class="moon">
            <circle cx="12" cy="12" r="6" fill="var(--color-background)"></circle>
          </g>
        </svg>
      </button>
    `
  }
}

customElements.define('nds-dark-mode-toggle', NdsDarkModeToggle)
