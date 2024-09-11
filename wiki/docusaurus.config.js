import { themes as prismThemes } from 'prism-react-renderer'

export default {
  title: 'An Inconvenient Wiki',
  tagline: 'A Player\'s Guide to "An Inconvenient Modpack"',
  favicon: 'favicon.svg',
  url: 'https://wiki.inconvenient.gg',
  baseUrl: '/',
  themes: [],
  plugins: [],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js'
        },
        blog: false
      }
    ]
  ],
  staticDirectories: ['../common/icons', '../site/public/svg', '../site/public/img'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'An Inconvenient Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'logo.webp'
        },
        items: [
          {
            href: 'https://inconvenient.gg/features',
            position: 'right',
            label: 'Features'
          },
          {
            type: 'docSidebar',
            sidebarId: 'wiki',
            position: 'right',
            label: 'Wiki'
          },
          {
            href: 'https://github.com/dustinheisey/An-Inconvenient-Modpack',
            label: 'GitHub',
            position: 'right'
          },
          {
            href: 'https://inconvenient.gg/community',
            position: 'right',
            label: 'Community'
          },
          {
            href: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
            label: 'Play Now',
            position: 'right'
          }
        ]
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
}
