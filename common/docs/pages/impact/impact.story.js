import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { impact } = pageRegions
const sections = Object.keys(impact)

export default {
  title: 'Pages/Impact',
  argTypes: computeArgTypes(impact, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('impact', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(impact, sections, args)
