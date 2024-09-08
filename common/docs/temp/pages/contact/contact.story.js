import { pageRegions, themes } from "consts";
import { computeArgTypes, computeRender, computeDocs } from "funcs";
const { contact } = pageRegions;
const sections = Object.keys(contact);

export default {
  title: "Pages/Contact",
  argTypes: computeArgTypes(contact, sections, themes),
  parameters: {
    status: {
      type: "beta",
    },
    layout: "fullscreen",
    docs: {
      source: {
        transform: (src, story) => computeDocs("contact", sections, story.args),
      },
    },
  },
};

export const Default = (args) => computeRender(contact, sections, args);
