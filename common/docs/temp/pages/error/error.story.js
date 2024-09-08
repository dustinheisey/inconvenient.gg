import { pageRegions, themes } from "consts";
import { computeArgTypes, computeRender, computeDocs } from "funcs";
const { error } = pageRegions;
const sections = Object.keys(error);

export default {
  title: "Pages/Error",
  argTypes: computeArgTypes(error, sections, themes),
  parameters: {
    status: {
      type: "beta",
    },
    layout: "fullscreen",
    docs: {
      source: {
        transform: (src, story) => computeDocs("error", sections, story.args),
      },
    },
  },
};

export const Default = (args) => computeRender(error, sections, args);
