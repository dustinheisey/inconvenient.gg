export default {
  title: "Layouts/Grid",
  args: {
    columns: 3,
  },
  parameters: {
    status: {
      type: "stable",
    },
    layout: "centered",
  },
};

export const TwoColumns = () =>
  `
    <div class="grid grid-2">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `;

export const ThreeColumns = () =>
  `
    <div class="grid grid-3">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `;

export const FourColumns = () =>
  `
    <div class="grid grid-4">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `;

export const FiveColumns = () =>
  `
    <div class="grid grid-5">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `;

export const SixColumns = () =>
  `
    <div class="grid grid-6">
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
      <img src="https://placehold.co/600x400" alt="image" />
    </div>
  `;

export const Spanning = () =>
  `
    <div class="grid grid-3">
      <img src="https://placehold.co/600x400" alt="image" class="span-2" />
      <div class="frame">
        <img src="https://placehold.co/600x400" alt="image" />
      </div>
      <div class="frame">
        <img src="https://placehold.co/600x400" alt="image" />
      </div>
      <img src="https://placehold.co/600x400" alt="image" class="span-2" />
    </div>
  `;
