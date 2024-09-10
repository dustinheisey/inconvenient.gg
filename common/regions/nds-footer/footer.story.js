import { regions, themes } from "../util/consts.js";

export default {
  title: "Regions/Footer",
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(regions.footer),
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
    ${regions.footer[args.variant]({
      props: {
        storybook: true,
        theme: args.theme,
        content: args.content,
        config: args.config,
      },
    })}
  `;

export const Mission = Template.bind({});
export const MissionBg = Template.bind({});
export const Newsletter = Template.bind({});
export const NewsletterBg = Template.bind({});
export const Simple = Template.bind({});
export const SimpleBg = Template.bind({});
export const Inline = Template.bind({});

Mission.args = { variant: "mission-footer" };
MissionBg.args = { variant: "mission-bg-footer" };
Newsletter.args = { variant: "newsletter-footer" };
NewsletterBg.args = { variant: "newsletter-bg-footer" };
Simple.args = { variant: "simple-footer" };
SimpleBg.args = { variant: "simple-bg-footer" };
Inline.args = { variant: "inline-footer" };
