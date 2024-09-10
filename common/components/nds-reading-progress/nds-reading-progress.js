import { html, css, LitElement } from 'lit'

export class NdsReadingProgress extends LitElement {
  static styles = css`
    #reading-progress {
      z-index: 1;
      background-color: var(--color-primary);
      width: 100vw;
      position: fixed;
      left: 0;
      top: 0;
      height: 4px;
      transform: translateX(-100%);
      transition: transform 0.1s ease-out;
    }
  `

  connectedCallback() {
    super.connectedCallback()
    this.readingProgress()
  }

  readingProgress() {
    if (window.ResizeObserver) {
      const progress = this.shadowRoot.querySelector('#reading-progress')

      let timeOfLastScroll = 0
      let requestedAniFrame = false

      const scroll = () => {
        if (!requestedAniFrame) {
          requestAnimationFrame(updateProgress)
          requestedAniFrame = true
        }
        timeOfLastScroll = Date.now()
      }
      window.addEventListener('scroll', scroll)

      let winHeight = window.innerHeight
      let bottom = document.documentElement.scrollHeight

      const updateProgress = () => {
        requestedAniFrame = false
        const percent = Math.min((document.scrollingElement.scrollTop / (bottom - winHeight)) * 100, 100)
        if (progress) {
          progress.style.transform = `translateX(${percent - 100}%)`
        }
        if (Date.now() - timeOfLastScroll < 3000) {
          requestAnimationFrame(updateProgress)
          requestedAniFrame = true
        }
      }

      new ResizeObserver(() => {
        bottom =
          document.scrollingElement.scrollTop +
            document.querySelector('#comments, footer')?.getBoundingClientRect().top ??
          document.documentElement.scrollHeight
        winHeight = window.innerHeight
        scroll()
      }).observe(document.body)
    }
  }

  render() {
    return html`<div id="reading-progress"></div>`
  }
}

customElements.define('nds-reading-progress', NdsReadingProgress)
