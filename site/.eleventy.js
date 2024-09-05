const Image = require('@11ty/eleventy-img')
const path = require('path')
const fs = require('fs')
const minify = require('html-minifier').minify
const pluginPWA = require('eleventy-plugin-pwa-v2')
const pluginNavigation = require('@11ty/eleventy-navigation')
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const svgSprite = require('eleventy-plugin-svg-sprite')
const sitemap = require('@quasibit/eleventy-plugin-sitemap')
const CleanCSS = require('clean-css')
const { promisify } = require('util')
const { DateTime } = require('luxon')
const stat = promisify(fs.stat)
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const execFile = promisify(require('child_process').execFile)
// const purgeCssPlugin = require("eleventy-plugin-purgecss");
// const criticalCss = require("eleventy-critical-css");

module.exports = (eleventyConfig, options = {}) => {
  // ? Plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(inclusiveLangPlugin)
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://inconvenient.gg'
    }
  })
  eleventyConfig.addPlugin(svgSprite, [
    {
      path: '../common/common/icons',
      globalClasses: 'icon',
      svgSpriteShortcode: 'icons',
      svgShortcode: 'icon'
    }
  ])
  eleventyConfig.addPlugin(pluginPWA, {
    swDest: './_site/sw.js',
    globDirectory: './_site',
    sourcemap: false,
    inlineWorkboxRuntime: true
  })
  // eleventyConfig.addPlugin(purgeCssPlugin, {
  //   config: "./purgecss.config.js",
  // });
  // eleventyConfig.addPlugin(criticalCss);

  // ? Shortcodes
  eleventyConfig.addNunjucksShortcode('img', function (src, alt, cls, sizes = '100vw', widths) {
    try {
      const options = {
        widths: [400, 800, 1280, null],
        formats: ['webp', 'jpeg'],
        outputDir: './_site/img/',
        filenameFormat: function (id, src, width, format, options) {
          const extension = path.extname(src)
          const name = path.basename(src, extension)

          return `${name}-${width}w.${format}`
        }
      }
      Image(src, options)
      const imageAttributes = {
        class: cls,
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async'
      }
      const metadata = Image.statsSync(src, options)
      return Image.generateHTML(metadata, imageAttributes)
    } catch (error) {
      console.log(error)
    }
  })
  eleventyConfig.addShortcode('svg', function (file, classes) {
    try {
      const relativeFilePath = `${file}.svg`
      const data = fs.readFileSync(relativeFilePath, function (err, contents) {
        if (err) return err
        return contents
      })
      const svg = data.toString('utf8')
      if (classes) {
        return svg.replace('<svg', `<svg class="${classes}"`)
      }
      return svg
    } catch (error) {
      console.log(error)
    }
  })

  // ? Transforms
  eleventyConfig.addTransform('minify-html', (rawContent, outputPath) => {
    let content = rawContent
    if (outputPath && outputPath.endsWith('.html')) {
      content = minify(content, {
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        sortClassName: true,
        sortAttributes: true,
        html5: true,
        decodeEntities: true,
        removeOptionalTags: true
      })
    }
    return content
  })

  // ? Passthrough Copies
  eleventyConfig.addPassthroughCopy({
    'common/common/styles/index.min.css': 'index.min.css'
  })
  eleventyConfig.addPassthroughCopy({
    './scripts/index.min.js': 'index.min.js'
  })
  eleventyConfig.addPassthroughCopy({ public: '/' })
  eleventyConfig.addPassthroughCopy({ admin: '/admin' })

  // ? Filters
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  // ? Filters
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })
  eleventyConfig.addFilter('tagsOnly', (tag) => {
    return tag.filter((item) => item !== 'post')
  })
  eleventyConfig.addFilter('getCategory', (categories, categoryTag) => {
    let postCategory = categoryTag.find((item) => item !== 'post')
    return categories.find((item) => item.data.label === postCategory)
  })
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('LLL dd, yyyy')
  })
  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('LL-dd-yyyy')
  })
  eleventyConfig.addFilter('splitlines', (input) => {
    const parts = input.split(' ')
    const lines = parts.reduce(function (prev, current) {
      if (!prev.length) {
        return [current]
      }

      let lastOne = prev[prev.length - 1]

      if (lastOne.length + current.length > 19) {
        return [...prev, current]
      }

      prev[prev.length - 1] = lastOne + ' ' + current

      return prev
    }, [])

    return lines
  })

  async function lastModifiedDate(filename) {
    try {
      const { stdout } = await execFile('git', ['log', '-1', '--format=%cd', filename])
      return new Date(stdout)
    } catch (e) {
      console.error(e.message)
      // Fallback to stat if git isn't working.
      const stats = await stat(filename)
      return stats.mtime // Date
    }
  }
  // Cache the lastModifiedDate call because shelling out to git is expensive.
  // This means the lastModifiedDate will never change per single eleventy invocation.
  const lastModifiedDateCache = new Map()
  eleventyConfig.addNunjucksAsyncFilter('lastModifiedDate', function (filename, callback) {
    const call = (result) => {
      result.then((date) => callback(null, date))
      result.catch((error) => callback(error))
    }
    const cached = lastModifiedDateCache.get(filename)
    if (cached) {
      return call(cached)
    }
    const promise = lastModifiedDate(filename)
    lastModifiedDateCache.set(filename, promise)
    call(promise)
  })

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.linkAfterHeader({
      assistiveText: (title) => `Permalink to “${title}”`,
      visuallyHiddenClass: 'sr-only',
      wrapper: ['<div class="inline-header">', '</div>']
    }),
    permalinkSymbol: '#'
  })

  eleventyConfig.setLibrary('md', markdownLibrary)
}
