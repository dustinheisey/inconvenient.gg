import { LitElement, html } from 'lit'

export class NdsStartHeavy extends LitElement {
  render() {
    return html` <div
      class="region sidebar sidebar-split gap-m ${this.class} ${this.align ? `align-${props.align}` : ''}"
    >
      <slot name="${this.mobile === 'end' ? 'start' : 'end'}"></slot>
      <slot name="${this.mobile === 'end' ? 'end' : 'start'}"></slot>
    </div>`
  }
}
customElements.define('nds-start-heavy', NdsStartHeavy)
