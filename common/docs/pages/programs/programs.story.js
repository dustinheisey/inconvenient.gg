import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { programs } = pageRegions
const sections = Object.keys(programs)

export default {
  title: 'Pages/Programs',
  argTypes: computeArgTypes(programs, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('programs', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(programs, sections, args)
