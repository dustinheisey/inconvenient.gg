import { html, css, LitElement } from 'lit'

export class NdsBreadcrumb extends LitElement {
  static properties = {
    breadcrumbs: { type: Array } // Array of breadcrumb items
  }

  static styles = css`
    nav.breadcrumb ol {
      margin: 0;
      padding-left: 0;
      list-style: none;
      display: flex;
      gap: var(--space-xs);
    }

    .breadcrumb li + li::before {
      display: inline-block;
      transform: rotate(15deg);
      border-right: 0.1em solid var(--color-primary);
      height: 0.8em;
      margin-inline-end: var(--space-xs);
      content: '';
    }

    nav.breadcrumb [aria-current='page'] {
      color: var(--color-primary);
      font-weight: 600;
      text-decoration: none;
    }

    .breadcrumb a {
      text-decoration: none;
      color: var(--color-on-background);
    }

    .breadcrumb a:hover {
      text-decoration: underline;
    }
  `

  constructor() {
    super()
    this.breadcrumbs = [] // Initialize empty breadcrumb array
  }

  render() {
    return html`
      <nav class="breadcrumb" aria-label="breadcrumb">
        <ol>
          ${this.breadcrumbs.map(
            (breadcrumb, index) => html`
              <li>
                ${index === this.breadcrumbs.length - 1
                  ? html` <span aria-current="page">${breadcrumb.label}</span> `
                  : html` <a href="${breadcrumb.url}">${breadcrumb.label}</a> `}
              </li>
            `
          )}
        </ol>
      </nav>
    `
  }
}

customElements.define('nds-breadcrumb', NdsBreadcrumb)
