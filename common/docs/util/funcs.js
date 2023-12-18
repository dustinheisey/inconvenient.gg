export function storyProps(props) {
  return {
    storybookArgs: props
  }
}

export function getProperty(prop) {
  return getComputedStyle(document.querySelector(':root')).getPropertyValue(prop)
}

export function computeArgTypes(page, sections, themes) {
  return sections.reduce((acc, section) => {
    acc[`${section}Variant`] = {
      control: 'select',
      options: Object.keys(page[section]),
      table: {
        category: section.charAt(0).toUpperCase() + section.slice(1)
      }
    }
    acc[`${section}Theme`] = {
      control: 'select',
      options: themes,
      table: {
        category: section.charAt(0).toUpperCase() + section.slice(1)
      }
    }
    return acc
  }, {})
}

export function computeDocs(page, sections, args) {
  let render = ''
  sections.forEach((section) => {
    if (args[`${section}Variant`] && args[`${section}Theme`]) {
      render += `{{ section({ variant: '${args[`${section}Variant`]}', theme: '${
        args[`${section}Theme`]
      }', content: content.${page}.${section} }) }}
`
    } else if (args[`${section}Variant`]) {
      render += `{{ ${args[`${section}Variant`].split('-').pop()}({ variant: '${args[`${section}Variant`].substring(
        0,
        args[`${section}Variant`].lastIndexOf('-')
      )}', content: content.${page}.${section} }) }}
`
    }
  })
  return render
}

export function computeRender(page, sections, args) {
  let render = ''

  sections.forEach((section) => {
    if (args[`${section}Variant`])
      render += page[section][args[`${section}Variant`]]({
        props: { theme: args[`${section}Theme`], content: args.content, config: args.config }
      })
  })

  return render
}
