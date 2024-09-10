import React, { useRef, useEffect } from 'react'
import Logo from '/logo.svg'
import ExternalLink from '/external-link.svg'
import Home from '/home.svg'
import Star from '/star.svg'
import Books from '/books.svg'
import Bug from '/bug.svg'
import Chat from '/chat.svg'
import Play from '/play.svg'

const storageKey = 'theme-preference'
const theme = {
  value: getColorPreference()
}

function getColorPreference() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
}

let footerVariant = 'light'

function setPreference() {
  reflectPreference()
}

function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', theme.value)
  document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme.value)
}

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  setPreference()
}

function Navbar() {
  const themeToggleRef = useRef(null)

  useEffect(() => {
    // Reflect the initial theme preference on mount
    reflectPreference()

    // Set up the click event listener on the theme toggle button
    const themeToggleButton = themeToggleRef.current
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', onClick)
    }

    // Set up keyup event listener for keyboard shortcut
    const handleKeyUp = (e) => {
      if (e.key === '\\') {
        onClick()
      }
    }
    document.addEventListener('keyup', handleKeyUp)

    // Set up media query listener for system theme changes
    let mediaQuery
    if (typeof window !== 'undefined') {
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    }
    const handleMediaChange = ({ matches: isDark }) => {
      theme.value = isDark ? 'dark' : 'light'
      setPreference()
    }
    mediaQuery.addEventListener('change', handleMediaChange)

    // Clean up event listeners on unmount
    return () => {
      if (themeToggleButton) {
        themeToggleButton.removeEventListener('click', onClick)
      }
      document.removeEventListener('keyup', handleKeyUp)
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return (
    <nav style={{ zIndex: 1 }}>
      <div className="stack region gap-xs align-center no-inset">
        <a href="/">
          <span className="sr-only">Home</span>
          <Logo title="An Inconvenient Modpack Logo" />
        </a>
        <div className="cluster">
          <ul className="topbar cluster gap-m">
            <li>
              <a href="/features" className="link link-navigation">
                Features
              </a>
            </li>
            <li>
              <a href="https://wiki.inconvenient.gg" className="link link-navigation" target="_blank">
                Wiki
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dustinheisey/An-Inconvenient-Modpack/issues"
                target="_blank"
                className="link link-navigation cluster gap-3xs"
              >
                Help Me Find Bugs
                <ExternalLink title="External" className="icon-s" />
              </a>
            </li>
            <li>
              <drop-down>
                <a href="/community" className="link link-navigation">
                  Community
                </a>
                <ul>
                  <li>
                    <a
                      href="https://discord.gg/dJbfXV9JnF"
                      target="_blank"
                      className="link link-navigation cluster gap-3xs"
                    >
                      Discord
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@inconvenientGG"
                      target="_blank"
                      className="link link-navigation cluster gap-3xs"
                    >
                      Youtube
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@inconvenientdev"
                      target="_blank"
                      className="link link-navigation cluster gap-3xs"
                    >
                      TikTok
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitch.tv/inconvenientgg"
                      target="_blank"
                      className="link link-navigation cluster gap-3xs"
                    >
                      Twitch
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/InconvenientModpack/"
                      target="_blank"
                      className="link link-navigation cluster gap-3xs"
                    >
                      Reddit
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://climatejustice.social/@InconvenientDev"
                      target="_blank"
                      className="link link-navigation cluster gap-3xs"
                    >
                      Mastodon
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                </ul>
              </drop-down>
            </li>
          </ul>
          <div className="cluster gap-xs">
            <button
              type="button"
              className="dark-mode-toggle"
              id="theme-toggle"
              title="Toggles light & dark"
              aria-live="polite"
              ref={themeToggleRef}
            >
              <svg
                focusable="false"
                className="sun-and-moon"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="var(--color-primary)" />
                <g className="sun-beams" stroke="var(--color-primary)">
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
                <mask className="moon" id="moon-mask">
                  <rect x="0" y="0" height="100%" width="100%" fill="white" />
                  <circle cx="24" cy="10" r="6" fill="black" />
                </mask>
              </svg>
              <tool-tip tip-position="block-end">
                Toggle <span className="badge badge-primary">\</span>
              </tool-tip>
            </button>
            <a
              href="https://www.curseforge.com/minecraft/modpacks/inconvenient"
              target="_blank"
              className="btn cluster gap-3xs"
            >
              Play Now
              <ExternalLink title="External" className="icon-s" />
            </a>
          </div>
          {/* <div className="bottombar">
            <ul>
              <li>
                <a href="/" className="navigation">
                  <Home title="Home" className="icon-s" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/features" className="navigation">
                  <Star title="Star" className="icon-s" />
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a href="https://wiki.inconvenient.gg" className="navigation" target="_blank">
                  <Books title="Books" className="icon-s" />
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dustinheisey/An-Inconvenient-Modpack/issues"
                  className="navigation"
                  target="_blank"
                >
                  <Bug title="Bug" className="icon-s" />
                  Bugs
                </a>
              </li>
              <li>
                <a href="/community" className="navigation">
                  <Chat title="Chat" className="icon-s" />
                  <span>Community</span>
                </a>
              </li>
            </ul>
            <li className="fab">
              <a href="https://www.curseforge.com/minecraft/modpacks/inconvenient" target="_blank">
                <Play title="Play" className="icon-s" />
                <span className="sr-only">Play Now</span>
              </a>
            </li>
          </div> */}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
