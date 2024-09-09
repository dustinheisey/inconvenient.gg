export default {
  title: "Elements/Video",
  tags: ["autodocs"],
  parameters: {
    status: {
      type: "stable",
    },
    layout: "centered",
  },
};

export const Default = () => `
  <video controls>
    <source src="https://example.com/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
`;
