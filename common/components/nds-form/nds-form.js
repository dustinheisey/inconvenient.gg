import { html, css, LitElement } from 'lit'

export class NdsForm extends LitElement {
  static properties = {
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    inputs: { type: Array }, // Array of form inputs
    submit: { type: String }, // Submit button text
    theme: { type: String } // Optional theme
  }

  static styles = css`
    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;
      padding: var(--space-m);
      border-radius: var(--radius-l);
      background-color: var(--color-background);
    }

    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-s);
    }

    .required {
      color: var(--color-error);
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-s);
    }

    .input-card {
      border: 1px solid var(--color-neutral-300);
      border-radius: var(--radius-m);
      padding: var(--space-s);
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .input-card input {
      margin-right: var(--space-xs);
    }

    .btn {
      background-color: var(--color-primary);
      color: white;
      border: none;
      padding: var(--space-m);
      border-radius: var(--radius-s);
      cursor: pointer;
    }

    textarea,
    input[type='text'],
    input[type='email'],
    input[type='range'] {
      width: 100%;
      padding: var(--space-s);
      border: 1px solid var(--color-neutral-300);
      border-radius: var(--radius-s);
    }

    .inline {
      display: flex;
      align-items: center;
      gap: var(--space-s);
    }
  `

  constructor() {
    super()
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.inputs = []
    this.submit = 'Submit'
    this.theme = ''
  }

  renderInput(input) {
    switch (input.type) {
      case 'textarea':
        return html`
          <label>
            <span class="${input.required ? 'required' : ''}">${input.label}</span>
            <textarea id="${input.id}" name="${input.id}" ?required=${input.required}></textarea>
          </label>
        `
      case 'checkbox-cards':
        return html`
          <fieldset class="cards">
            <legend><span class="${input.required ? 'required' : ''}">${input.label}</span></legend>
            ${input.cards.map(
              (card) => html`
                <label class="input-card">
                  <input type="checkbox" name="${input.name}" value="${card.value}" />
                  <span>${card.value}</span>
                </label>
              `
            )}
          </fieldset>
        `
      case 'radio-cards':
        return html`
          <fieldset class="cards">
            <legend><span class="${input.required ? 'required' : ''}">${input.label}</span></legend>
            ${input.cards.map(
              (card) => html`
                <label class="input-card">
                  <input type="radio" name="${input.name}" value="${card.value}" />
                  <span>${card.value}</span>
                </label>
              `
            )}
          </fieldset>
        `
      case 'range':
        return html`
          <label for="${input.id}" class="${input.required ? 'required' : ''}">${input.label}</label>
          <div class="inline">
            <input
              type="range"
              id="${input.id}"
              name="${input.id}"
              min="${input.min}"
              max="${input.max}"
              step="${input.step}"
              value="${input.value}"
            />
            <output>${input.output}${input.value}</output>
          </div>
        `
      default:
        return html`
          <label>
            <span class="${input.required ? 'required' : ''}">${input.label}</span>
            <input type="${input.type}" id="${input.id}" name="${input.id}" ?required=${input.required} />
          </label>
        `
    }
  }

  render() {
    return html`
      <div class="form-container ${this.theme ? `theme-${this.theme}` : ''}">
        ${this.headline
          ? html`
              <section class="prose">
                ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
                <h1>${this.headline}</h1>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </section>
            `
          : ''}
        <form class="stack align-start gap-s" method="post" data-netlify="true">
          ${this.inputs.map((input) => this.renderInput(input))}
          <button type="submit" class="btn">${this.submit}</button>
        </form>
      </div>
    `
  }
}

customElements.define('nds-form', NdsForm)
