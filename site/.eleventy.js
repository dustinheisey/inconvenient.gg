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
      path: '../common/icons',
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
  eleventyConfig.addNunjucksShortcode('img', function (src, alt, cls, sizes = '100vw', loading) {
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
        decoding: 'async'
      }
      if (loading === 'lazy') imageAttributes.loading = 'lazy'
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
    './styles/index.min.css': 'index.min.css'
  })
  eleventyConfig.addPassthroughCopy({
    './scripts/index.min.js': 'index.min.js'
  })
  eleventyConfig.addPassthroughCopy({ public: '/' })

  // ? Filters
  // eleventyConfig.addFilter('cssmin', function (code) {
  //   return new CleanCSS({}).minify(code).styles
  // })
}
