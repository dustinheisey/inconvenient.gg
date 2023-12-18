import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { resources } = pageRegions
const sections = Object.keys(resources)

export default {
  title: 'Pages/Resources',
  argTypes: computeArgTypes(resources, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('resources', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(resources, sections, args)
