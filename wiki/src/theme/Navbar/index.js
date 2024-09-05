import React, { useRef, useEffect } from 'react'
import Logo from '/logo.svg'
import ExternalLink from '/external-link.svg'

const storageKey = 'theme-preference'
const theme = {
  value: getColorPreference()
}

function getColorPreference() {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey)
  else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value)
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
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
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
    <nav>
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
              <a href="/wiki" className="link link-navigation">
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
                    <a href="" target="_blank" className="link link-navigation cluster gap-3xs">
                      Discord
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" className="link link-navigation cluster gap-3xs">
                      Youtube
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" className="link link-navigation cluster gap-3xs">
                      TikTok
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" className="link link-navigation cluster gap-3xs">
                      Twitch
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" className="link link-navigation cluster gap-3xs">
                      Reddit
                      <ExternalLink title="External" className="icon-s" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" className="link link-navigation cluster gap-3xs">
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
          <div className="bottombar">
            <ul>
              <li>
                <a href="/" className="navigation">
                  <span>test</span>
                </a>
              </li>
              <li className="fab">
                <a href="/">
                  <span className="sr-only">test</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
