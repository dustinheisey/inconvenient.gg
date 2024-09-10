import { regions, themes } from "../util/consts.js";

export default {
  title: "Regions/Gallery",
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(regions.gallery),
    },
    theme: {
      control: "select",
      options: themes,
    },
  },
  parameters: {
    status: {
      type: "stable",
    },
    layout: "fullscreen",
  },
};

const Template = (args) =>
  `
    ${regions.gallery[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content },
    })}
  `;

export const CardGrid = Template.bind({});
export const ImgGrid = Template.bind({});
export const Masonry = Template.bind({});
export const Start = Template.bind({});
export const Stack = Template.bind({});
export const TextGrid = Template.bind({});

CardGrid.args = { variant: "card-grid-gallery" };
ImgGrid.args = { variant: "img-grid-gallery" };
Masonry.args = { variant: "masonry-gallery" };
Start.args = { variant: "start-gallery" };
Stack.args = { variant: "stack-gallery" };
TextGrid.args = { variant: "text-grid-gallery" };
