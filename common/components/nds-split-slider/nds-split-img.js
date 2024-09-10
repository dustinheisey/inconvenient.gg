import { html, css, LitElement } from 'lit'

export class NdsSplitImg extends LitElement {
  static properties = {
    beforeImage: { type: String }, // The "before" image source
    afterImage: { type: String }, // The "after" image source
    position: { type: Number } // Slider position (default is 50%)
  }

  static styles = css`
    img {
      display: block;
      max-width: 100%;
    }

    .container {
      display: grid;
      place-content: center;
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      --position: 50%;
    }

    .image-container {
      max-width: 800px;
      position: relative;
      aspect-ratio: 1/1;
    }

    .slider-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }

    .image-before {
      position: absolute;
      inset: 0;
      width: var(--position);
    }

    input.slider {
      position: absolute;
      cursor: pointer;
      opacity: 0;
      width: 100%;
      height: 100%;
    }

    .slider-line {
      position: absolute;
      inset: 0;
      width: 0.2rem;
      height: 100%;
      background-color: var(--color-background);
      left: var(--position);
      transform: translateX(-50%);
      pointer-events: none;
    }

    .slider-button {
      position: absolute;
      background-color: var(--color-on-background);
      color: var(--color-background);
      padding: 0.5rem;
      border-radius: 100vw;
      display: grid;
      place-items: center;
      top: 50%;
      left: var(--position);
      transform: translate(-50%, -50%);
      pointer-events: none;
      box-shadow: var(--shadow-xs);
    }
  `

  constructor() {
    super()
    this.beforeImage = ''
    this.afterImage = ''
    this.position = 50 // Default slider position (50%)
  }

  handleSliderInput(e) {
    this.position = e.target.value
  }

  render() {
    return html`
      <div class="container" style="--position: ${this.position}%">
        <div class="image-container">
          <img src="${this.afterImage}" alt="After Image" class="slider-image" />
          <div class="image-before" style="width: ${this.position}%">
            <img src="${this.beforeImage}" alt="Before Image" class="slider-image" />
          </div>
          <div class="slider-line"></div>
          <div class="slider-button">⇔</div>
          <input
            type="range"
            class="slider"
            min="0"
            max="100"
            value="${this.position}"
            @input="${this.handleSliderInput}"
          />
        </div>
      </div>
    `
  }
}

customElements.define('nds-split-img', NdsSplitImg)
