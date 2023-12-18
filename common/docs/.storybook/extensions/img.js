const nunjucks = require('nunjucks/browser/nunjucks-slim')

class ImgTag {
  constructor() {
    this.tags = ['img']
  }

  parse(parser, nodes) {
    const token = parser.nextToken()
    const args = parser.parseSignature(null, true)
    parser.advanceAfterBlockEnd(token.value)

    return new nodes.CallExtension(this, 'run', args)
  }

  run(context) {
    return new nunjucks.runtime.SafeString(
      `<img src="https://generative-placeholders.glitch.me/image?width=600&height=300" alt="" />`
    )
  }
}

module.exports = new ImgTag()
