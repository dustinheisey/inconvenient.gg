// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'An Inconvenient Wiki',
  tagline: 'A Player\'s Guide to "An Inconvenient Modpack"',
  favicon: 'favicon.svg',

  // Set the production url of your site here
  url: 'https://inconvenient.gg',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wiki',
  staticDirectories: ['../common/media/icons', '../common/media/svg'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        },
        theme: {
          customCss: [
            '../common/index.min.css',
            './src/css/color.css',
            './src/css/typography.css',
            './src/css/overrides.css'
          ]
        }
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'An Inconvenient Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wiki',
            position: 'left',
            label: 'Wiki'
          },
          {
            href: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
            label: 'Play Now',
            position: 'right'
          },
          {
            href: 'https://github.com/dustinheisey/An-Inconvenient-Modpack',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro'
          //     }
          //   ]
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus'
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus'
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus'
          //     }
          //   ]
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog'
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus'
          //     }
          //   ]
          // }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} An Inconvenient Modpack. Built with Docusaurus.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
}

export default config
