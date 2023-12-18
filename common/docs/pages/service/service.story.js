import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { service } = pageRegions
const sections = Object.keys(service)

export default {
  title: 'Pages/Service',
  argTypes: computeArgTypes(service, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('service', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(service, sections, args)
