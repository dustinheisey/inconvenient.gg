import { LitElement, html } from 'lit'

export class NdsBlockquote extends LitElement {
  render() {
    return html`
      <figure>
        <blockquote class="${this.variant === 'accent' ? 'blockquote-accent' : ''}">
          ${this.variant !== 'accent' && html`&OpenCurlyDoubleQuote;`} ${this.quote}
          ${this.variant !== 'accent' && html`&CloseCurlyDoubleQuote;`}
        </blockquote>
        <figcaption class="overline">${this.author}</figcaption>
      </figure>
    `
  }
}
customElements.define('nds-blockquote', NdsBlockquote)
