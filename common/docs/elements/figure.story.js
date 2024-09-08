export default {
  title: "Elements/Figure",
  tags: ["autodocs"],
  parameters: {
    status: {
      type: "beta",
    },
    layout: "centered",
  },
};

export const Default = () => `
  <figure>
    <img src="https://picsum.photos/200" alt="Random Image" />
    <figcaption>This is a caption for the image.</figcaption>
  </figure>
`;
