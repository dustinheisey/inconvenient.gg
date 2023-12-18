import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { footer } = pageRegions
const sections = Object.keys(footer)

export default {
  title: 'Pages/Footer',
  argTypes: computeArgTypes(footer, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('footer', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(footer, sections, args)
