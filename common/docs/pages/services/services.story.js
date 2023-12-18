import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { services } = pageRegions
const sections = Object.keys(services)

export default {
  title: 'Pages/Services',
  argTypes: computeArgTypes(services, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('services', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(services, sections, args)
