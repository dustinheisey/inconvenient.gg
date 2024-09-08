import { regions, themes } from "../util/consts.js";

export default {
  title: "Regions/Feature",
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(regions.feature),
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
    layout: "centered",
  },
};

const Template = (args) =>
  `
    ${regions.feature[args.variant]({
      props: { storybook: true, theme: args.theme, content: args.content },
    })}
  `;

export const CardGrid = Template.bind({});
export const ImgStart = Template.bind({});
export const List = Template.bind({});
export const OffsetGrid = Template.bind({});
export const OffsetList = Template.bind({});
export const ImgEnd = Template.bind({});
export const BgPattern = Template.bind({});
export const BlurbGrid = Template.bind({});
export const Description = Template.bind({});

CardGrid.args = { variant: "card-grid-feature" };
ImgStart.args = { variant: "img-start-feature" };
List.args = { variant: "list-feature" };
OffsetGrid.args = { variant: "offset-grid-feature" };
OffsetList.args = { variant: "offset-list-feature" };
ImgEnd.args = { variant: "img-end-feature" };
BgPattern.args = { variant: "bg-pattern-feature" };
BlurbGrid.args = { variant: "blurb-grid-feature" };
Description.args = { variant: "description-feature" };
