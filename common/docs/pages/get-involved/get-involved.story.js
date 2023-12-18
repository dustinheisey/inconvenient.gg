import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { getInvolved } = pageRegions
const sections = Object.keys(getInvolved)

export default {
  title: 'Pages/Get Involved',
  argTypes: computeArgTypes(getInvolved, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('getInvolved', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(getInvolved, sections, args)
