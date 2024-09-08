import { pageRegions, themes } from "consts";
import { computeArgTypes, computeRender, computeDocs } from "funcs";
const { header } = pageRegions;
const sections = Object.keys(header);

export default {
  title: "Pages/Header",
  argTypes: computeArgTypes(header, sections, themes),
  parameters: {
    status: {
      type: "beta",
    },
    layout: "fullscreen",
    docs: {
      source: {
        transform: (src, story) => computeDocs("header", sections, story.args),
      },
    },
  },
};

export const Default = (args) => computeRender(header, sections, args);
