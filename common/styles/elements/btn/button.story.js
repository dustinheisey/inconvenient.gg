export default {
  title: "Elements/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      description: "Button Variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary", "tertiary", "circular"],
    },
    label: {
      description: "Button Label",
      control: {
        type: "text",
      },
    },
    size: {
      control: "select",
      description: "Button Size",
      options: ["s", "m", "l"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
  },
  args: { variant: "primary", size: "m", label: "Button Label" },
  parameters: {
    status: {
      type: "beta",
    },
    layout: "centered",
  },
};

export const Default = ({ variant, size, label }) =>
  ` <button class="btn btn-${variant} btn-${size}">${label}</button> `;

export const PrimaryButton = () => `
  <div class="cluster gap-m">
    <button class="btn btn-s">Primary Button</button>
    <button class="btn">Primary Button</button>
    <button class="btn btn-l">Primary Button</button>
  </div>
`;

PrimaryButton.parameters = {
  docs: {
    description: {
      story:
        'Primary buttons should be used for the most important actions on a page or in a flow. They should be used sparingly to draw attention to the main action that you want users to take. Examples of primary button usage include "Submit", "Save", "Purchase", or "Sign Up".',
    },
    source: {
      code: `
<button class="btn">
    Primary Button
</button>
    `,
    },
  },
};

export const SecondaryButtons = () => `
  <div class="cluster gap-m">
    <button class="btn btn-secondary btn-s">Secondary Button</button>
    <button class="btn btn-secondary btn-m">Secondary Button</button>
    <button class="btn btn-secondary btn-l">Secondary Button</button>
  </div>
`;

SecondaryButtons.parameters = {
  docs: {
    description: {
      story:
        'Secondary buttons should be used for actions that are important but not as important as primary actions. They should be used when you want to provide users with additional options that are relevant to the current context, but not the main focus of the page or flow. Examples of secondary button usage include "Cancel", "Back", or "Skip".',
    },
    source: {
      code: `
<button class="btn btn-secondary">
    Secondary Button
</button>
    `,
    },
  },
};

export const TertiaryButtons = () =>
  `
    <div class="cluster gap-m">
      <button class="btn btn-tertiary btn-s">Tertiary Button</button>
      <button class="btn btn-tertiary btn-m">Tertiary Button</button>
      <button class="btn btn-tertiary btn-l">Tertiary Button</button>
    </div>
  `;

TertiaryButtons.parameters = {
  docs: {
    description: {
      story:
        'Tertiary buttons should be used for actions that are not as important as primary or secondary actions, but still relevant to the current context. They should be used when you want to provide users with more options that are less important or less frequently used. Examples of tertiary button usage include "Learn More", "View Details", or "Filter".',
    },
    source: {
      code: `
<button class="btn btn-tertiary">
    Tertiary Button
</button>
    `,
    },
  },
};

export const CircularButtons = () => `
  <div class="cluster gap-m">
    <button class="btn btn-circular btn-s">
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      <span class="sr-only">Audio Description</span>
    </button>
    <button class="btn btn-circular btn-m">
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      <span class="sr-only">Audio Description</span>
    </button>
    <button class="btn btn-circular btn-l">
      <svg focusable="false" class="icon">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      <span class="sr-only">Audio Description</span>
    </button>
  </div>
`;

CircularButtons.parameters = {
  docs: {
    description: {
      story:
        'Circular buttons should be used for actions that require less attention or have less importance than other types of buttons. They should be used when you want to provide users with quick access to actions that are frequently used or secondary to the main actions on the page or in the flow. Examples of circular button usage include "Add", "Delete", or "Edit". On mobile, a large circular button should be placed to the bottom right corner of the screen with the primary action of the website.',
    },
    source: {
      code: `
<button class="btn btn-circular">
    <svg focusable="false" class="icon">
      <use href="src/elements/text/icon/icons.svg#audio-description-1" />
    </svg>
</button>
    `,
    },
  },
};

export const IconLeftButtons = () => `
  <div class="cluster gap-m">
    <button class="btn">
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      Button with Icon
    </button>
    <button class="btn btn-secondary">
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      Button with Icon
    </button>
    <button class="btn btn-tertiary">
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      Button with Icon
    </button>
  </div>
`;

export const IconRightButtons = () => `
  <div class="cluster gap-m">
    <button class="btn">
      Button with Icon
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
    </button>
    <button class="btn btn-secondary">
      Button with Icon
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
    </button>
    <button class="btn btn-tertiary">
      Button with Icon
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
    </button>
  </div>
`;

export const IconButtons = () => `
  <div class="cluster gap-m">
    <button class="btn">
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      <span class="sr-only">Audio Description</span>
    </button>
    <button class="btn btn-secondary">
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      <span class="sr-only">Audio Description</span>
    </button>
    <button class="btn btn-tertiary">
      <svg focusable="false" class="icon icon-s">
        <use href="src/elements/text/icon/icons.svg#audio-description-1" />
      </svg>
      <span class="sr-only">Audio Description</span>
    </button>
  </div>
`;
