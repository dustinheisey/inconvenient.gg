import { html, css, LitElement } from 'lit'

export class NdsImg extends LitElement {
  static properties = {
    src: { type: String }, // Image source
    alt: { type: String }, // Alt text for the image
    ar: { type: String }, // Aspect ratio class (optional)
    loading: { type: String }, // Lazy loading or eager loading
    variant: { type: String }, // Variant, e.g., 'avatar'
    class: { type: String } // Additional classes
  }

  static styles = css`
    .frame {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-m);
    }

    .avatar {
      border-radius: 50%;
      object-fit: cover;
    }

    img {
      width: 100%;
      height: auto;
    }

    .aspect-ratio {
      position: relative;
      width: 100%;
      padding-bottom: calc(100% / (16 / 9)); /* Example for 16:9 aspect ratio */
    }

    .aspect-ratio img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `

  constructor() {
    super()
    this.src = ''
    this.alt = ''
    this.ar = '' // Aspect ratio
    this.loading = 'lazy' // Default loading is lazy
    this.variant = '' // No variant by default
    this.class = '' // Optional additional classes
  }

  render() {
    return html`
      <div class="${this.class} frame ${this.ar ? this.ar : ''}">
        ${this.variant === 'avatar'
          ? html` <img src="https://i.pravatar.cc/300" alt="Avatar" class="avatar" loading="${this.loading}" /> `
          : html` <img src="${this.src}" alt="${this.alt}" loading="${this.loading}" /> `}
      </div>
    `
  }
}

customElements.define('nds-img', NdsImg)
