import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { about } = pageRegions
const sections = Object.keys(about)

export default {
  title: 'Pages/About',
  argTypes: computeArgTypes(about, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('about', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(about, sections, args)
