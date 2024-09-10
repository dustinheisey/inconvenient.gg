import { html, css, LitElement } from 'lit'

export class NdsStrip extends LitElement {
  static styles = css`
    .strip {
      display: block;
      overflow-x: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scrollbar-width: none; /* For Firefox */
    }

    .strip::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Edge */
    }

    .reel > .card {
      scroll-snap-align: start;
    }
  `

  render() {
    return html`
      <div class="strip">
        <div class="reel">
          <slot></slot>
        </div>
      </div>
    `
  }
}

customElements.define('nds-strip', NdsStrip)
