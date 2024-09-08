import { pageRegions, themes } from "consts";
import { computeArgTypes, computeRender, computeDocs } from "funcs";
const { blog } = pageRegions;
const sections = Object.keys(blog);

export default {
  title: "Pages/Blog",
  argTypes: computeArgTypes(blog, sections, themes),
  parameters: {
    status: {
      type: "beta",
    },
    layout: "fullscreen",
    docs: {
      source: {
        transform: (src, story) => computeDocs("blog", sections, story.args),
      },
    },
  },
};

export const Default = (args) => computeRender(blog, sections, args);
