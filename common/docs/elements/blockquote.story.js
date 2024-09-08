export default {
  title: "Elements/Blockquote",
  tags: ["autodocs"],
  parameters: {
    status: {
      type: "beta",
    },
    layout: "centered",
  },
};

export const Default = () => `
  <blockquote class="blockquote-accent">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.
    </p>
    <footer>
      Someone famous in <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
`;
