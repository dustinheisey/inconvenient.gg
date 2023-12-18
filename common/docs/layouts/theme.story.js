import { themes } from '../util/consts.js'
export default {
  title: 'Layouts/Theme',
  argTypes: {
    theme: {
      control: 'select',
      description: 'Button Variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      },
      options: themes
    }
  },
  args: {
    theme: 'background'
  },
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Default = ({ theme }) =>
  `
    <div class="stack gap-m theme-${theme}">
      <div class="cluster gap-s">
        <a class="btn">Button Text</a>
        <a class="btn btn-secondary">Button Text</a>
        <a class="btn btn-tertiary">Button Text</a>
        <a class="link link-navigation">Button Text</a>
           <svg focusable="false" class="icon icon-l">
      <use href="src/elements/text/icon/icons.svg#audio-description-1" />
    </svg>
      </div>
      <div class="cluster gap-l">
        <div class="cluster gap-s">
          <span class="badge badge-primary">Badge</span>
          <span class="badge badge-secondary">Badge</span>
          <span class="badge badge-tertiary">Badge</span>
        <div class="avatar-list">
          <img
            src="https://picsum.photos/200"
            class="avatar"
            alt="Random Image"
          />
          <img
            src="https://picsum.photos/200"
            class="avatar"
            alt="Random Image"
          />
          <img
            src="https://picsum.photos/200"
            class="avatar"
            alt="Random Image"
          />
        </div>
        </div>
      </div>
        <div class="cluster">
          <label>
            <span class="required">Required</span>
            <input class="input" placeholder="input text" />
          </label>
          <label>
            <span class="required">Required</span>
            <input class="input input-underline" placeholder="input text" />
          </label>
          <input type="radio" placeholder="input text" />
          <input type="checkbox" placeholder="input text" />
        </div>
        <div class="cluster">
          <label>
            <span class="required">Required</span>
          <textarea></textarea>
        </label>
           <label>
            <span class="required">Required</span>
          <textarea class="textarea-underline"></textarea>
        </label>
        </div>
        <div class="cluster">
<label>
  <span class="required">Required</span>
  <div class="select">
    <select>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
      <option value="Option 4">Option 4</option>
      <option value="Option 5">Option 5</option>
    </select>
    <span class="focus"></span>
  </div>
</label>
  <label>
    <span class="required">Required</span>
    <div class="select select-underline">
    <select>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
      <option value="Option 4">Option 4</option>
      <option value="Option 5">Option 5</option>
    </select>
    <span class="focus"></span>
  </div>
  </label>
        </div>
        <div class="cluster">
          <input type="range" placeholder="input text" />
        </div>
      <hr>
        <div class="prose">
          <h1 class="hero-headline">Hero Headline</h1>
          <h1 class="page-headline">Page Headline</h1>
          <h2 class="region-headline">Region Headline</h2>
          <h3 class="section-headline">Section Headline</h3>
          <h4 class="title-headline">Title Headline</h4>
          <p class="overline">Overline Text</p>
          <p class="lead">
            Dolore veniam non ex cillum aliqua tempor. Ut esse aliquip eu
            nostrud est culpa cupidatat proident laborum cillum. Et adipisicing
            nostrud cupidatat incididunt aute nulla commodo.
          </p>
          <p>
            Dolore veniam non ex cillum aliqua tempor. Ut esse aliquip eu
            nostrud est culpa cupidatat proident laborum cillum. Et adipisicing
            nostrud cupidatat incididunt aute nulla commodo.
          </p>
          <blockquote>
            <p>
              Dolore veniam non ex cillum aliqua tempor. Ut esse aliquip eu
              nostrud est culpa cupidatat proident laborum cillum. Et
              adipisicing nostrud cupidatat incididunt aute nulla commodo.
            </p>
          </blockquote>
        </div>
    </div>
  `

Default.parameters = {
  docs: {
    description: {
      story:
        'The Center component should be used whenever you want something to be horizontally centered. Use by default to center the container, or use the intrinsic modifier to center the content within the centered container.'
    }
  }
}

export const All = () =>
  `
    <div class="grid grid-3">
      <div class="card prose theme-background">
        <p class="overline">Overline Text</p>
        <h4>Background Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-dark">
        <p class="overline">Overline Text</p>
        <h4>Background Inverse Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-surface">
        <p class="overline">Overline Text</p>
        <h4>Surface Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-surface-inverse">
        <p class="overline">Overline Text</p>
        <h4>Surface Inverse Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-surface-variant">
        <p class="overline">Overline Text</p>
        <h4>Surface Variant Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-surface-variant-inverse">
        <p class="overline">Overline Text</p>
        <h4>Surface Variant Inverse Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-primary">
        <p class="overline">Overline Text</p>
        <h4>Primary Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-primary-container">
        <p class="overline">Overline Text</p>
        <h4>Primary Container Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-secondary">
        <p class="overline">Overline Text</p>
        <h4>Secondary LightHeading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-secondary-container">
        <p class="overline">Overline Text</p>
        <h4>Secondary Container Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-tertiary">
        <p class="overline">Overline Text</p>
        <h4>Tertiary Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>

        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-tertiary-container">
        <p class="overline">Overline Text</p>
        <h4>Tertiary Container Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-error">
        <p class="overline">Overline Text</p>
        <h4>Error Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>

      <div class="card prose theme-error-container">
        <p class="overline">Overline Text</p>
        <h4>Error Container Heading</h4>
        <p>
          Occaecat enim est occaecat laboris. Consectetur aliquip ullamco aute
          qui dolore cupidatat ad voluptate dolore culpa ipsum ea.
        </p>
        <div class="sidebar">
          <input placeholder="input text" class="input" />
          <a class="btn fixed">Button Text</a>
        </div>
      </div>
    </div>
  `
