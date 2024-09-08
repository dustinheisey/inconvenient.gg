import { pageRegions, themes } from "consts";
import { computeArgTypes, computeRender, computeDocs } from "funcs";
const { portfolio } = pageRegions;
const sections = Object.keys(portfolio);

export default {
  title: "Pages/Portfolio",
  argTypes: computeArgTypes(portfolio, sections, themes),
  parameters: {
    status: {
      type: "beta",
    },
    layout: "fullscreen",
    docs: {
      source: {
        transform: (src, story) =>
          computeDocs("portfolio", sections, story.args),
      },
    },
  },
};

export const Default = (args) => computeRender(portfolio, sections, args);
