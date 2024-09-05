import React from 'react'
import Logo from '/logo.svg'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Background from '/footer-background.svg'

import ExternalLink from '/external-link.svg'

import LogoDiscord from '/logo-discord.svg'
import LogoYoutube from '/logo-youtube.svg'
import LogoTikTok from '/logo-tiktok.svg'
import LogoReddit from '/logo-reddit.svg'
import LogoMastodon from '/logo-mastodon.svg'

function Footer() {
  return (
    <footer className="bg-img">
      <img src={useBaseUrl('/footer-background.svg')} />
      <div className="full stack gap-m align-center region">
        <a href="/">
          <span className="sr-only">Home</span>
          <Logo title="An Inconvenient Modpack Logo" />
        </a>
        <ul className="cluster gap-xs align-start">
          <li>
            <a href="/features" className="link link-s link-navigation">
              Features
            </a>
          </li>
          <li>
            <a href="/wiki" className="link link-s link-navigation">
              Wiki
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dustinheisey/An-Inconvenient-Modpack/issues"
              target="_blank"
              className="link link-s link-navigation cluster gap-3xs"
            >
              Help Me Find Bugs
              <ExternalLink title="External" className="icon-xs" />
            </a>
          </li>
          <li>
            <a href="/community" className="link link-s link-navigation">
              Community
            </a>
          </li>
          <li>
            <a
              href="https://www.curseforge.com/minecraft/modpacks/inconvenient"
              target="_blank"
              className="link link-s link-navigation align-center cluster gap-3xs"
            >
              <span>Play</span>
              <ExternalLink title="External" className="icon-xs" />
            </a>
          </li>
        </ul>
        <ul className="cluster gap-xs align-start">
          <li>
            <a href="/" target="_blank" className="btn btn-circular">
              <span className="sr-only">Discord</span>
              <LogoDiscord title="Discord" className="icon" />
              <tool-tip tip-position="block-start">Discord</tool-tip>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" className="btn btn-circular">
              <span className="sr-only">Youtube</span>
              <LogoYoutube title="Youtube" className="icon" />
              <tool-tip tip-position="block-start">Youtube</tool-tip>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" className="btn btn-circular">
              <span className="sr-only">TikTok</span>
              <LogoTikTok title="TikTok" className="icon" />
              <tool-tip tip-position="block-start">TikTok</tool-tip>
            </a>
          </li>

          <li>
            <a href="/" target="_blank" className="btn btn-circular">
              <span className="sr-only">Reddit</span>
              <LogoReddit title="Reddit" className="icon" />
              <tool-tip tip-position="block-start">Reddit</tool-tip>
            </a>
          </li>

          <li>
            <a href="/" target="_blank" className="btn btn-circular">
              <span className="sr-only">Mastodon</span>
              <LogoMastodon title="Mastodon" className="icon" />
              <tool-tip tip-position="block-start">Mastodon</tool-tip>
            </a>
          </li>
        </ul>
        <div className="stack align-center gap-0">
          <div className="cluster full theme-surface justify-center">
            <div id="wcb" className="carbonbadge wcb-d"></div>
            <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
          </div>
          <small className="copywrite">&copy; 2024. An Inconvenient Modpack</small>
        </div>
      </div>
    </footer>
  )
}
export default React.memo(Footer)
