export default {
  title: "Layouts/Inline",
  parameters: {
    status: {
      type: "beta",
    },
    layout: "centered",
  },
};

export const Default = () =>
  `
      <div class="inline">
        <svg focusable="false">
          <use href="src/elements/text/icon/icons.svg#audio-description-1" />
        </svg>
        <span>Product Features</span>
      </div>
  `;
