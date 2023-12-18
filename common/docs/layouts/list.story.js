export default {
  title: 'Layouts/List',
  decorators: [
    (story) => `<div style="inline-size: 50vw; margin: auto;">${story()}</div>`
  ],
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'centered'
  }
}

export const Default = () =>
  `
    <ul class="list">
      <li>Product Features</li>
      <li>Customer Reviews</li>
      <li>FAQs</li>
      <li>Contact Information</li>
      <li>Shipping and Returns</li>
      <li>Terms and Conditions</li>
    </ul>
  `

Default.parameters = {
  docs: {
    description: {
      story:
        'The Center component should be used whenever you want something to be horizontally centered. Use by default to center the container, or use the intrinsic modifier to center the content within the centered container.'
    },
    source: {
      code: `
<div class="center">
</div>
    `
    }
  }
}

export const OL = () =>
  `
    <ol class="list list-marker">
      <li>Product Features</li>
      <li>Customer Reviews</li>
      <li>FAQs</li>
      <li>Contact Information</li>
      <li>Shipping and Returns</li>
      <li>Terms and Conditions</li>
    </ol>
  `

export const Ul = () =>
  `
    <ul class="list list-marker">
      <li>Product Features</li>
      <li>Customer Reviews</li>
      <li>FAQs</li>
      <li>Contact Information</li>
      <li>Shipping and Returns</li>
      <li>Terms and Conditions</li>
    </ul>
  `

export const SVG = () =>
  `
    <ul class="list list-marker">
      <li>
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Product Features
      </li>
      <li>
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Customer Reviews
      </li>
      <li>
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        FAQs
      </li>
      <li>
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Contact Information
      </li>
      <li>
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Shipping and Returns
      </li>
      <li>
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        Terms and Conditions
      </li>
    </ul>
  `
