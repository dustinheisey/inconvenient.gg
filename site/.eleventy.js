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
const cspPlugin = require('@jackdbd/eleventy-plugin-content-security-policy')
const CleanCSS = require('clean-css')
const faviconsPlugin = require('eleventy-plugin-gen-favicons')

module.exports = function (eleventyConfig) {
  // ? Plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(inclusiveLangPlugin)
  eleventyConfig.addPlugin(faviconsPlugin, {
    outputDir: './_site',
    manifest_: {
      name: 'An Inconvenient Modpack',
      short_name: 'Inconvenient',
      description:
        'BeeLeaf Foundation is a passionate advocate for bee conservation. Through education, habitat preservation, and policy advocacy, we’re building a future where bees flourish.',
      theme_color: '#A33614',
      background_color: '#2B201B',
      display: 'fullscreen',
      start_url: '/',
      scope: '/',
      orientation: 'portrait',
      display_override: ['window-control-overlay', 'fullscreen', 'standalone', 'browser']
    }
  })
  eleventyConfig.addPlugin(cspPlugin, {
    allowDeprecatedDirectives: true,
    directives: {
      'base-uri': ['self'],
      'font-src': ['self'],
      'script-src-elem': ['self', 'cdn.usefathom.com'],
      'style-src-elem': ['self', 'unsafe-inline']
    },
    globPatternsDetach: ['/*.png', '/*.jpeg', '/*.webp'],
    includePatterns: ['/**/**.html']
  })
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: 'https://inconvenient.gg'
    }
  })

  eleventyConfig.addPlugin(svgSprite, {
    path: '../common/icons',
    globalClasses: 'icon',
    svgSpriteShortcode: 'iconsprite',
    svgShortcode: 'icon'
  })
  eleventyConfig.addPlugin(pluginPWA, {
    swDest: './_site/sw.js',
    globDirectory: './_site',
    sourcemap: false,
    inlineWorkboxRuntime: true
  })

  // ? Shortcodes
  eleventyConfig.addNunjucksShortcode('img', function (src, alt, cls, sizes = '100vw', widths) {
    try {
      let options = {
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
      let imageAttributes = {
        class: cls,
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async'
      }
      let meta_ = Image.statsSync(src, options)
      return Image.generateHTML(meta_, imageAttributes)
    } catch (error) {
      console.log(error)
    }
  })

  eleventyConfig.addShortcode('svg', function (file, classes) {
    try {
      let relativeFilePath = `${file}.svg`
      let _ = fs.readFileSync(relativeFilePath, function (err, contents) {
        if (err) return err
        return contents
      })
      let svg = _.toString('utf8')
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
  eleventyConfig.addPassthroughCopy({ public: '/' })
  eleventyConfig.addPassthroughCopy({ '../common/styles/style.min.css': 'style.min.css' })
  eleventyConfig.addPassthroughCopy({ '_data/theme.css': 'theme.css' })
  eleventyConfig.addPassthroughCopy({ '../common/scripts/index.min.js': 'index.min.js' })

  // ? Watch Targets
  eleventyConfig.addWatchTarget('../common/scripts/index.min.js')
  eleventyConfig.addWatchTarget('../common/styles/style.min.css')
  eleventyConfig.addWatchTarget('../common/macros/**/*.njk')
  eleventyConfig.addWatchTarget('./public/*')

  // ? Filters
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  return {
    dir: {
      includes: '../common/macros'
    }
  }
}
