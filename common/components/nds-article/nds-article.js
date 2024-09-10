import { html, css, LitElement } from 'lit'

class NdsArticle extends LitElement {
  static properties = {
    img: { type: Object },
    time: { type: Object },
    headline: { type: String },
    body: { type: String },
    btn: { type: Object }
  }

  render() {
    return html`
      <article class="sidebar">
        ${this.img && this.img.src
          ? html`
              <div class="fixed frame avatar-img">
                <img src="${this.img.src}" alt="${this.img.alt || ''}" loading="${this.img.loading || 'lazy'}" />
              </div>
            `
          : ''}
        <div>
          ${this.time
            ? html`
                <div class="cluster">
                  <time datetime="${this.time.time}">${this.time.label}</time>
                </div>
              `
            : ''}
          <div class="prose">
            ${this.btn
              ? html`<h2 class="title-section">${this.headline}</h2>`
              : html`<a href="/"><h2 class="title-section">${this.headline}</h2></a>`}
            <p>${this.body}</p>
            ${this.btn ? html` <a class="btn" href="${this.btn.href}">${this.btn.label}</a> ` : ''}
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('nds-article', NdsArticle)
