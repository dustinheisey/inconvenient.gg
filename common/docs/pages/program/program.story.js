import { pageRegions, themes } from 'consts'
import { computeArgTypes, computeRender, computeDocs } from 'funcs'
const { program } = pageRegions
const sections = Object.keys(program)

export default {
  title: 'Pages/Program',
  argTypes: computeArgTypes(program, sections, themes),
  parameters: {
    status: {
      type: 'beta'
    },
    layout: 'fullscreen',
    docs: {
      source: {
        transform: (src, story) => computeDocs('program', sections, story.args)
      }
    }
  }
}

export const Default = (args) => computeRender(program, sections, args)
