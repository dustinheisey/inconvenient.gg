import React from 'react'
import Logo from '/logo.webp'
import useBaseUrl from '@docusaurus/useBaseUrl'

import ExternalLink from '/external-link.svg'

import LogoDiscord from '/logo-discord.svg'
import LogoYoutube from '/logo-youtube.svg'
import LogoTikTok from '/logo-tiktok.svg'
import LogoTwitch from '/logo-twitch.svg'
import LogoReddit from '/logo-reddit.svg'
import LogoMastodon from '/logo-mastodon.svg'

function Footer() {
  return (
    <footer className="full stack gap-m align-center">
      <div className="cluster full justify-between">
        <a href="https://inconvenient.gg" className="cluster gap-xs">
          <span className="sr-only">Home</span>
          <img src={Logo} alt="An Inconvenient Modpack Logo" />
          <h3 className="section-headline">
            An <span className="color-primary">Inconvenient</span> Modpack
          </h3>
        </a>
        <ul className="cluster gap-xs align-start">
          <li>
            <a href="https://inconvenient.gg/features" className="link link-s link-navigation">
              Features
            </a>
          </li>
          <li>
            <a href="/category/introduction" className="link link-s link-navigation">
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
            <a href="https://inconvenient.gg/community" className="link link-s link-navigation">
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
      </div>
      <div className="cluster full justify-between">
        <ul className="cluster gap-xs align-start">
          <li>
            <a href="https://discord.gg/dJbfXV9JnF" target="_blank" className="btn btn-circular">
              <span className="sr-only">Discord</span>
              <LogoDiscord title="Discord" className="icon" />
              <tool-tip tip-position="block-start">Discord</tool-tip>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@inconvenientGG" target="_blank" className="btn btn-circular">
              <span className="sr-only">Youtube</span>
              <LogoYoutube title="Youtube" className="icon" />
              <tool-tip tip-position="block-start">Youtube</tool-tip>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@inconvenientdev" target="_blank" className="btn btn-circular">
              <span className="sr-only">TikTok</span>
              <LogoTikTok title="TikTok" className="icon" />
              <tool-tip tip-position="block-start">TikTok</tool-tip>
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/inconvenientgg" target="_blank" className="btn btn-circular">
              <span className="sr-only">Twitch</span>
              <LogoTwitch title="Twitch" className="icon" />
              <tool-tip tip-position="block-start">Twitch</tool-tip>
            </a>
          </li>
          <li>
            <a href="https://www.reddit.com/r/InconvenientModpack/" target="_blank" className="btn btn-circular">
              <span className="sr-only">Reddit</span>
              <LogoReddit title="Reddit" className="icon" />
              <tool-tip tip-position="block-start">Reddit</tool-tip>
            </a>
          </li>
          <li>
            <a href="https://climatejustice.social/@InconvenientDev" target="_blank" className="btn btn-circular">
              <span className="sr-only">Mastodon</span>
              <LogoMastodon title="Mastodon" className="icon" />
              <tool-tip tip-position="block-start">Mastodon</tool-tip>
            </a>
          </li>
        </ul>
        <div className="stack align-center gap-0">
          <small className="copywrite">&copy; 2024. An Inconvenient Modpack</small>
        </div>
      </div>
    </footer>
  )
}
export default React.memo(Footer)
