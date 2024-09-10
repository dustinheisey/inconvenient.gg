import { html, css, LitElement } from 'lit'

class NdsAccordion extends LitElement {
  static properties = {
    items: { type: Array },
    theme: { type: String },
    headline: { type: String },
    overline: { type: String },
    body: { type: String }
  }

  static styles = [
    css`
      details > summary {
        list-style-type: none;
        cursor: pointer;
        position: relative;
        padding-inline-end: var(--space-xl);
      }

      details {
        display: block;
        text-align: start;
      }

      details > summary::-webkit-details-marker {
        display: none;
      }

      details > summary::before {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        content: '+';
        font-size: var(--font-size-l);
      }

      details[open] > summary::before {
        content: '-';
        font-size: var(--font-size-xl);
      }

      details[open] > summary {
        margin-block-end: var(--space-s);
      }

      .accordion-container {
        margin: var(--space-xl) 0;
      }
      .title-headline {
        font-size: var(--font-size-l);
        font-weight: bold;
      }
      .stack {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
      }
      .align-center {
        align-items: center;
      }
      .align-start {
        align-items: flex-start;
      }
      .text-center {
        text-align: center;
      }
      hr {
        border: none;
        border-top: 1px solid var(--color-neutral-300);
        margin: var(--space-m) 0;
      }
      /* Add more component-specific styles here */
    `
  ]

  render() {
    return html`
      <div class="accordion-container ${this.theme}">
        ${this.headline
          ? html`
              <section class="stack align-center gap-xs">
                ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
                <h2 class="region-headline">${this.headline}</h2>
              </section>
            `
          : ''}
        ${this.body
          ? html`
              <section class="stack align-center text-center">
                <p>${this.body}</p>
              </section>
            `
          : ''}
        <div class="accordion-items">
          ${this.items.map(
            (item) => html`
              <details class="${item.theme ? 'theme-' + item.theme : ''}">
                <summary>
                  <h3 class="title-headline">${item.headline}</h3>
                </summary>
                ${item.btn
                  ? html`
                      <div class="stack align-start gap-xs">
                        <p>${item.body}</p>
                        <a
                          href="${item.btn.url}"
                          class="btn ${item.btn.variant || ''} ${item.btn.external ? 'external' : ''}"
                          ${item.btn.external ? 'target="_blank"' : ''}
                        >
                          ${item.btn.label} ${item.btn.external ? html`<i class="external-icon">↗</i>` : ''}
                        </a>
                      </div>
                    `
                  : html`<p>${item.body}</p>`}
              </details>
              <hr />
            `
          )}
        </div>
      </div>
    `
  }
}

customElements.define('nds-accordion', NdsAccordion)
