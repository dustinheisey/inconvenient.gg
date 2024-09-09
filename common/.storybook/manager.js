// .storybook/manager.js

import { addons } from '@storybook/manager-api'

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['Tokens', 'Elements', 'Layouts', 'Components', 'Regions']
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    measure: { hidden: true },
    outline: { hidden: true },
    backgrounds: { hidden: true }
  }
})
