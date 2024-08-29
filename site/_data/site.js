const config = {
  title: 'An Inconvenient Modpack',
  url: 'https://inconvenient.gg',
  description: '',
  navigation: {
    header: {
      logo: {
        src: './public/svg/logo.svg',
        alt: 'An Inconvenient Modpack'
      },
      variant: 'stacked',
      links: [
        {
          label: 'Features',
          url: '/features'
        },
        { label: 'Wiki', url: 'https://wiki.inconvenient.gg' },
        { label: 'Help Me Find Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues' },
        {
          label: 'Community',
          url: '/community',
          subLinks: [
            { label: 'Discord', url: 'https://discord.gg/dJbfXV9JnF' },
            // { label: 'Youtube', url: '/' },
            // { label: 'Tik Tok', url: '/' },
            // { label: 'Twitch', url: '/' },
            // { label: 'Reddit', url: '/' },
            { label: 'Mastodon', url: '/' }
          ]
        }
      ],
      action: { label: 'Play', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient' }
    },
    bottombar: {
      links: [
        { label: 'Home', url: '/', icon: 'earth' },
        { label: 'Features', url: '/features', icon: 'gear' },
        { label: 'Wiki', url: 'https://wiki.inconvenient.gg', icon: 'books' },
        { label: 'Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues', icon: 'bug' },
        { label: 'Community', url: '/community', icon: 'community' }
      ],
      fab: { label: 'Play Now', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', icon: 'play' }
    },
    footer: {
      logo: {
        src: './public/svg/logomark.svg',
        alt: 'An Inconvenient Modpack'
      },
      variant: 'simple-bg',
      links: [
        { label: 'Features', url: '/features' },
        { label: 'Wiki', url: 'https://wiki.inconvenient.gg' },
        { label: 'Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues' },
        { label: 'Community', url: '/community' },
        { label: 'Play Now', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient' }
      ],
      social: [
        {
          label: 'Discord',
          icon: 'logo-discord',
          url: ''
        },
        {
          label: 'Youtube',
          icon: 'logo-youtube',
          url: ''
        },
        {
          label: 'TikTok',
          icon: 'logo-tiktok',
          url: ''
        },
        {
          label: 'Reddit',
          icon: 'logo-reddit',
          url: ''
        },
        {
          label: 'Mastodon',
          icon: 'logo-mastodon',
          url: ''
        }
      ],
      copywrite: '© 2024 An Inconvenient Modpack.'
    }
  },
  pages: [
    {
      url: 'index',
      title: 'An Inconvenient Modpack: Epic Minecraft Adventure with Deep Storytelling',
      description:
        'Discover "An Inconvenient Modpack", a Minecraft experience that combines deep philosophical storytelling with immersive gameplay. Begin your journey in a transformed world, exploring custom dimensions, challenging mechanics, and a narrative that mirrors today\'s societal issues. Perfect for gamers seeking both adventure and reflection.',
      regions: {}
    },
    {
      url: 'features',
      title: 'Discover Unique Features of An Inconvenient Modpack: Advancements, Mechanics & More',
      description:
        'Explore the unique features of "An Inconvenient Modpack", from more than 400 advancements and almost 2000 custom recipes, to complex survival mechanics and intricate progression systems. Dive into a world where every element is designed to challenge your skills and your perspective.',
      regions: {}
    },
    {
      url: 'community',
      title: 'Join the An Inconvenient Modpack Community: Connect on Discord, Mastodon, YouTube & More',
      description:
        'Join our community of "An Inconvenient Modpack" players. Share your experiences, get help with challenges, and contribute to the ongoing development of this evolving Minecraft adventure. Connect with like-minded gamers who appreciate deep, meaningful gameplay.',
      regions: {}
    }
  ]
}

module.exports = config
