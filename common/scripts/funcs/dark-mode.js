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

  // Update footer background image based on the theme
  const footerBackground = document.querySelector('#footer-background')
  console.log(footerBackground)
  if (theme.value === 'dark') {
    footerBackground.src = '/svg/footer-background-2.svg'
  } else {
    footerBackground.src = '/svg/footer-background.svg'
  }
}

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  setPreference()
}

export function darkMode() {
  reflectPreference()

  window.onload = () => {
    // set on load so screen readers can get the latest value on the button
    reflectPreference()

    // now this script can find and listen for clicks on the control
    document.querySelector('#theme-toggle').addEventListener('click', onClick)
  }

  document.addEventListener('keyup', (e) => {
    if (e.key === '\\') {
      onClick()
    }
  })

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })
}
