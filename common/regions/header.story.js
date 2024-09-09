import { regions, themes } from "../util/consts.js";

export default {
  title: "Regions/Header",
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(regions.header),
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
    ${regions.header[args.variant]({
      props: { storybook: true, theme: args.theme, config: args.config },
    })}
  `;

export const Center = Template.bind({});
export const End = Template.bind({});
export const Spaced = Template.bind({});
export const Stacked = Template.bind({});
export const Start = Template.bind({});

Center.args = { variant: "center-header" };
End.args = { variant: "end-header" };
Spaced.args = { variant: "spaced-header" };
Stacked.args = { variant: "stacked-header" };
Start.args = { variant: "start-header" };
