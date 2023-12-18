import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { donate } = pageRegions
const sections = Object.keys(donate)

export default {
  title: 'Pages/Donate',
  argTypes: computeArgTypes(donate, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('donate', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(donate, sections, args)
