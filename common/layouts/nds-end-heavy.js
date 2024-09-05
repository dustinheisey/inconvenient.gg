import { LitElement, html } from 'lit'

export class NdsEndHeavy extends LitElement {
  render() {
    return html` <div
      class="region sidebar sidebar-split gap-m ${this.class} ${this.align ? `align-${props.align}` : ''}"
    >
      <slot name="${this.mobile === 'start' ? 'start' : 'end'}"></slot>
      <slot name="${this.mobile === 'start' ? 'end' : 'start'}"></slot>
    </div>`
  }
}
customElements.define('nds-end-heavy', NdsEndHeavy)
