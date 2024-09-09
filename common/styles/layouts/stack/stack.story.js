export default {
  title: "Layouts/Stack",
  parameters: {
    status: {
      type: "stable",
    },
    layout: "centered",
  },
  argTypes: {
    gap: {
      control: {
        type: "select",
      },
      options: ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
    },
  },
  args: {
    gap: "xs",
  },
};

export const Default = ({ gap }) =>
  `
    <ul class="stack gap-${gap}">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  `;

Default.parameters = {
  docs: {
    description: {
      story:
        "The Stack layout should be used whenever elements are stacked one on top of another, except for adjacent elements like grid cells, which should not be subject to a Stack.",
    },
    source: {
      code: `
<div class="center">
</div>
    `,
    },
  },
};
