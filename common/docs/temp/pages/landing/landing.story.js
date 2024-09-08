import { pageRegions, themes } from "consts";
import { computeArgTypes, computeRender, computeDocs } from "funcs";
const { landing } = pageRegions;
const sections = Object.keys(landing);

export default {
  title: "Pages/Landing",
  argTypes: computeArgTypes(landing, sections, themes),
  parameters: {
    status: {
      type: "beta",
    },
    layout: "fullscreen",
    docs: {
      source: {
        transform: (src, story) => computeDocs("landing", sections, story.args),
      },
    },
  },
};

export const Default = (args) => computeRender(landing, sections, args);
