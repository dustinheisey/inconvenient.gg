export default {
  title: "Layouts/Frame",
  parameters: {
    status: {
      type: "stable",
    },
    layout: "centered",
    docs: {
      description: {
        story:
          "The Frame can be used to crop media to a desired aspect ratio and can be customized for different circumstances such as changing the aspect ratio based on viewport orientation using @media queries.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["square", "photo", "video", "vertical", "full"],
    },
  },
};

export const Square = () => `
  <div class="frame square">
      <img src="https://placehold.co/600x400" alt="image name" />
  </div>
`;

export const Photo = () => `
  <div class="frame photo">
      <img src="https://placehold.co/600x400" alt="image name" />
  </div>
`;

export const Video = () => `
  <div class="frame video">
      <img src="https://placehold.co/600x400" alt="image name" />
  </div>
`;

export const Vertical = () => `
  <div class="frame vertical">
      <img src="https://placehold.co/600x400" alt="image name" />
  </div>
`;

export const Full = () => `
  <div class="frame full">
      <img src="https://placehold.co/600x400" alt="image name" />
  </div>
`;
