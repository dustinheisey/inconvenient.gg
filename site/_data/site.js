const config = {
  title: 'An Inconvenient Modpack',
  url: 'https://inconvenient.gg',
  description: '',
  navigation: {
    logo: {
      src: './public/svg/logo',
      alt: 'An Inconvenient Modpack'
    },
    header: {
      variant: 'stack',
      links: [
        {
          label: 'Features',
          url: '/features'
        },
        { label: 'Wiki', url: 'https://wiki.inconvenient.gg' },
        {
          label: 'Help Me Find Bugs',
          external: true,
          url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues'
        },
        {
          label: 'Community',
          url: '/community',
          subLinks: [
            { label: 'Discord', url: '/', external: true },
            { label: 'Youtube', url: '/', external: true },
            { label: 'Tik Tok', url: '/', external: true },
            { label: 'Twitch', url: '/', external: true },
            { label: 'Reddit', url: '/', external: true },
            { label: 'Mastodon', url: '/', external: true }
          ]
        }
      ],
      action: { label: 'Play', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', external: true },
      bottombar: {
        links: [
          { label: 'Home', url: '/', icon: 'home' },
          { label: 'Features', url: '/features', icon: 'about' },
          { label: 'Wiki', url: 'https://wiki.inconvenient.gg', icon: 'books' },
          { label: 'Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues', icon: 'advocate' },
          { label: 'Community', url: '/community', icon: 'contact' }
        ],
        fab: { label: 'Play', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', icon: 'donate' }
      }
    },
    footer: {
      variant: 'simple',
      links: [
        { label: 'Features', url: '/features' },
        { label: 'Wiki', url: 'https://wiki.inconvenient.gg', external: true },
        { label: 'Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues', external: true },
        { label: 'Community', url: '/community' },
        { label: 'Play Now', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', external: true }
      ],
      carbon: true,
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
      copywrite: '© 2024 An Inconvenient Modpack'
    }
  },
  pages: [
    {
      url: 'index',
      header: false,
      title: '',
      description: '',
      regions: {
        hero: {
          layout: 'bg-center',
          navigation: {
            logo: {
              src: './public/svg/logo',
              alt: 'An Inconvenient Modpack'
            },
            header: {
              variant: 'stack',
              links: [
                {
                  label: 'Features',
                  url: '/features'
                },
                { label: 'Wiki', url: 'https://wiki.inconvenient.gg' },
                {
                  label: 'Help Me Find Bugs',
                  external: true,
                  url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues'
                },
                {
                  label: 'Community',
                  url: '/community',
                  subLinks: [
                    { label: 'Discord', url: '/', external: true },
                    { label: 'Youtube', url: '/', external: true },
                    { label: 'Tik Tok', url: '/', external: true },
                    { label: 'Twitch', url: '/', external: true },
                    { label: 'Reddit', url: '/', external: true },
                    { label: 'Mastodon', url: '/', external: true }
                  ]
                }
              ],
              action: {
                label: 'Play',
                url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
                external: true
              },
              bottombar: {
                links: [
                  { label: 'Home', url: '/', icon: 'home' },
                  { label: 'Features', url: '/features', icon: 'about' },
                  { label: 'Wiki', url: 'https://wiki.inconvenient.gg', icon: 'books' },
                  {
                    label: 'Bugs',
                    url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues',
                    icon: 'advocate'
                  },
                  { label: 'Community', url: '/community', icon: 'contact' }
                ],
                fab: {
                  label: 'Play',
                  url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
                  icon: 'donate'
                }
              }
            }
          },
          overline: 'Awaken to a World on the Brink',
          headline: 'Will You Save It or Let It Fall?',
          body: 'After a thousand years, the Earth has changed. Your decisions will shape its future—choose wisely',
          btns: [
            { url: '/', label: 'Start Your Journey' },
            { variant: 'secondary', url: '/', label: 'Watch the Full Trailer' }
          ],
          video: { src: 'test.mp4' }
        },
        wakeUp: {
          layout: 'end-heavy',
          end: {
            component: 'text',
            size: 'region',
            overline: 'The Journey Begins',
            headline: 'Wake Up in a World Forgotten',
            body: 'You emerge from a thousand-year slumber, with no memory of who you are or what happened. The world you once knew is gone—can you uncover your past and shape the future?'
          },
          start: {
            component: 'img',
            src: 'wave.png',
            alt: 'wave'
          }
        },
        rebuild: {
          layout: 'gallery',
          overline: '',
          variant: 'masonry',
          text: 'start',
          headline: 'Rebuild a World to Rediscover Your Past',
          body: 'The remnants of a once-thriving civilization lie at your feet. As you rebuild, fragments of your memory start to return. Each step you take, each piece of technology you rediscover, brings you closer to the truth.',
          items: [
            {
              component: 'img',
              src: 'wave.png',
              alt: '1'
            },
            {
              component: 'img',
              src: 'wave.png',
              alt: '2'
            },
            {
              component: 'img',
              src: 'wave.png',
              alt: '3'
            },
            {
              component: 'img',
              src: 'wave.png',
              alt: '4'
            },
            {
              component: 'img',
              src: 'wave.png',
              alt: '5.1'
            },
            {
              component: 'img',
              src: 'wave.png',
              alt: '5.2'
            }
          ]
        },
        explore: {
          layout: 'reel',
          size: 'region',
          overline: 'Discover Your Path',
          headline: 'Explore a World Transformed',
          body: 'Travel through time and space to uncover the truth. Visit new dimensions, each telling the story of a world ravaged by climate change. Piece together the history of what happened while you slept.',
          items: [
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'story-seeker.webp', alt: 'Story Seeker' },
              headline: 'Everbright'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'adventure/1.webp', alt: 'Adventurer' },
              headline: 'Undergarden'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'engineer.webp', alt: 'Engineer' },
              headline: 'Everdawn'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'survivalist.webp', alt: 'Survivalist' },
              headline: 'The Twilight Forest'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'architect.webp', alt: 'Architect' },
              headline: 'The Nether'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'architect.webp', alt: 'Architect' },
              headline: 'The Bumblezone'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'architect.webp', alt: 'Architect' },
              headline: 'Blueleaf'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'architect.webp', alt: 'Architect' },
              headline: 'More to Come'
            }
          ]
        },
        choice: {
          layout: 'split-slider',
          start: {
            component: 'text',
            size: 'region',
            overline: '',
            headline: 'Decide the Fate of the World',
            body: 'With knowledge comes power. Will you use it to create a harmonious solarpunk utopia, or will you repeat history and usher in a cyberpunk dystopia? The choice is yours.',
            btn: { label: 'Join Now', url: '/' }
          }
        },
        action: {
          layout: 'bg-pattern',
          theme: 'primary',
          pattern: 'leaves',
          overline: 'Write Your Own Story',
          headline: 'Shape the World with Your Choices',
          body: "Every decision you make in 'An Inconvenient Modpack' leaves a mark on the world. The fate of the Earth is in your hands. Download the modpack and start crafting a story that’s uniquely yours.",
          btns: [
            { label: 'Download Now', url: '/' },
            { variant: 'secondary', label: 'Visit the Wiki', url: '/' }
          ]
        }
      }
    },
    {
      url: 'features',
      title: '',
      description: '',
      regions: {
        overview: {
          layout: 'start-heavy',
          start: { component: 'img', src: '2-visions.webp', alt: 'Impact', ar: 'square' },
          end: {
            component: 'text',
            size: 'hero',
            overline: 'A World at a Crossroads',
            headline: 'Rebuild a World or Help it Collapse',
            body: 'After a thousand years of recovery, Earth stands at a crossroads. Will you lead humanity back into darkness, or will you forge a new path towards harmony with nature?',
            btn: { label: 'Start Your Journey', url: '/' }
          },
          stats: {
            component: 'stats',
            variant: 'inline',
            class: 'text-center',
            overline: '',
            headline: '',
            body: '',
            border: true,
            region: true,
            text: 'center',
            items: [
              {
                headline: '1333+',
                body: 'Recipes'
              },
              {
                headline: '500+',
                body: 'Advancements'
              },
              {
                headline: '10',
                body: 'Chapters'
              },
              {
                headline: '10',
                body: 'Dimensions'
              },
              {
                headline: '50+',
                body: 'Mechanics'
              },
              {
                headline: '1',
                body: 'Developer'
              }
            ]
          }
        },
        personas: {
          layout: 'reel',
          size: 'region',
          overline: 'Discover Your Path',
          headline: 'Something for Every Player',
          body: "Whether you're a lore enthusiast, a thrill-seeker, a technical mastermind, a survival expert, or a master architect, 'An Inconvenient Modpack' has something tailored for you.",
          items: [
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'story-seeker.webp', alt: 'Story Seeker' },
              headline: 'Story Seeker',
              list: [{ text: '' }]
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'adventure/1.webp', alt: 'Adventurer' },
              headline: 'Adventurer'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'engineer.webp', alt: 'Engineer' },
              headline: 'Engineer'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'survivalist.webp', alt: 'Survivalist' },
              headline: 'Survivalist'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'architect.webp', alt: 'Architect' },
              headline: 'Architect'
            }
          ]
        },
        history: {
          layout: 'sparkline',
          variant: 'block',
          headline: 'The Never Ending Story',
          body: "Building 'An Inconvenient Modpack' has been a journey of innovation, challenges, and relentless passion. The project isn't complete yet, here's what I've done so far.",
          items: [
            {
              component: 'blurb',
              headline: 'The Beginning',
              body: 'Our journey began with a simple love for bees and a deep concern for their declining populations.',
              date: 'September 2023',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'The Turning Point',
              body: 'In 2015, we launched our first conservation project, planting wildflowers in a local park. This project was a turning point for us, as it showed us the power of community action. Since then, we have been working tirelessly to conserve and restore bee habitats.',
              date: 'July 2023',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'The Next Step',
              body: 'In 2018, we launched our first educational program, a series of workshops for children. These workshops were a huge success, and we have since expanded our educational programs to include webinars, community outreach, and more.',
              date: 'November 2023',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'The Future',
              body: 'We are excited to announce that we are launching our first advocacy campaign in 2020. This campaign will focus on promoting sustainable farming practices and lobbying against harmful pesticides. We are also working on a new conservation project, creating urban bee sanctuaries.',
              date: 'May 2023',
              class: 'cluster justify-between align-start'
            }
          ],
          btn: { label: 'See Roadmap', url: '/roadmap' }
        },
        faq: {
          layout: 'center',
          content: {
            component: 'accordion',
            class: 'full',
            align: 'center',
            headline: 'FAQs',
            body: 'Here are some of the most common questions to help you get started and enjoy your experience with the modpack.',
            items: [
              {
                component: 'details',
                style: { theme: '' },
                headline: 'How do I install the modpack?',
                body: 'You can install the modpack by downloading it from CurseForge or Modrinth. Follow the installation guide provided on our Wiki for step-by-step instructions.'
              },
              {
                component: 'details',
                style: { theme: '' },
                headline: 'Where can I post bugs?',
                body: 'Please report any bugs you encounter via our GitHub Issues page or join our Discord community for support and discussions.'
              },
              {
                component: 'details',
                style: { theme: '' },
                headline: 'Can I play this on a server?',
                body: 'Yes, the modpack is designed to be multiplayer-friendly! You can set up your own server using the provided server files.'
              },
              {
                component: 'details',
                style: { theme: '' },
                headline: 'Is there support for shaders?',
                body: 'Yes, the modpack is compatible with popular shaders. We recommend using OptiFine or Sodium for the best visual experience.'
              }
            ]
          }
        },
        action: {
          layout: 'bg-pattern',
          theme: 'primary',
          pattern: 'leaves',
          overline: 'Write Your Own Story',
          headline: 'Shape the World with Your Choices',
          body: "Every decision you make in 'An Inconvenient Modpack' leaves a mark on the world. The fate of the Earth is in your hands. Download the modpack and start crafting a story that’s uniquely yours.",
          btns: [
            { label: 'Download Now', url: '/' },
            { variant: 'secondary', label: 'Visit the Wiki', url: '/' }
          ]
        }
      }
    },
    {
      url: 'community',
      title: '',
      description: '',
      regions: {
        intro: {
          layout: 'start-heavy',
          end: { component: 'img', src: 'logo-large.svg', alt: 'Community' },
          start: {
            component: 'text',
            size: 'page',
            overline: 'Community',
            headline: 'Together for Bees',
            body: 'Our community is at the heart of our work at BeeLeaf Foundation. From volunteers and donors to partners and supporters, every member of our community plays a crucial role in our mission to protect bees.',
            btns: [
              {
                url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
                variant: 'primary',
                target: 'blank',
                label: 'Get on Curseforge'
              },
              { url: 'https://modrinth.com/', variant: 'primary', label: 'Get on Modrinth', target: 'blank' }
            ]
          }
        },
        social: {
          layout: 'gallery',
          inset: true,
          overline: 'Our Volunteers',
          headline: 'The Heart of Our Hive',
          body: 'Our volunteers are the heart of our hive. They help with everything from habitat restoration to community outreach. Meet some of our amazing volunteers and learn about their experiences.',
          items: [
            {
              component: 'card',
              icon: 'logo-discord',
              size: 'xl',
              url: '/',
              theme: 'discord',
              body: 'Join the community discussions and get live help'
            },
            {
              component: 'card',
              icon: 'logo-youtube',
              size: 'xl',
              url: '/',
              theme: 'youtube',
              body: 'Join the community discussions and get live help'
            },
            {
              component: 'card',
              icon: 'logo-tiktok',
              size: 'xl',
              url: '/',
              theme: 'tiktok',
              body: 'Join the community discussions and get live help'
            },
            {
              component: 'card',
              icon: 'logo-twitch',
              size: 'xl',
              url: '/',
              theme: 'twitch',
              body: 'Join the community discussions and get live help'
            },
            {
              component: 'card',
              icon: 'logo-reddit',
              size: 'xl',
              url: '/',
              theme: 'reddit',
              body: 'Join the community discussions and get live help'
            },
            {
              component: 'card',
              icon: 'logo-mastodon',
              size: 'xl',
              url: '/',
              theme: 'mastodon',
              body: 'Join the community discussions and get live help'
            }
          ]
        },
        // TODO: add showcase
        // showcase: {
        //   layout: 'end-heavy',
        //   mobile: 'start',
        //   start: {
        //     component: 'img',
        //     src: 'thriving-bee-habitat.png',
        //     alt: 'Thriving Bee Habitat'
        //   },
        //   end: {
        //     component: 'stats',
        //     overline: 'Our Donors',
        //     headline: 'Making Our Work Possible',
        //     body: 'Our donors make our work possible. Their generous contributions support our education, conservation, and advocacy efforts. Hear from some of our donors about why they choose to support BeeLeaf Foundation.',
        //     items: [
        //       {
        //         headline: '$1,000,000+',
        //         body: 'Donated to bee conservation initiatives'
        //       },
        //       {
        //         headline: '5,000+',
        //         body: 'Individual donors contributing to our mission'
        //       },
        //       {
        //         headline: '25+',
        //         body: 'Corporate sponsors partnering with BeeLeaf Foundation'
        //       },
        //       {
        //         headline: '10,000+',
        //         body: 'Volunteer hours dedicated to bee conservation'
        //       }
        //     ]
        //   }
        // },
        help: {
          layout: 'end-heavy',
          class: 'align-start',
          mobile: 'start',
          start: {
            component: 'text',
            size: 'region',
            overline: 'Join the Journey',
            headline: 'Help Me Build This Modpack',
            lead: 'We’re creating more than just a modpack—we’re building a community that explores global issues, and we need your help to make it the best it can be!',
            body: "Briefly introduce the idea that [Modpack Name] isn’t just a static project—it’s a living, evolving experience. Explain that to achieve the full potential of the modpack, you need the community's input and active involvement. Highlight the importance of the global issues addressed in the modpack and how community participation can contribute to meaningful conversations and impact."
          },
          end: {
            component: 'accordion',
            items: [
              {
                component: 'details',
                style: { theme: '' },
                headline: 'Playtest and Improve',
                body: 'Invite users to be part of the playtesting team. Explain how their gameplay can help identify bugs, balance issues, and opportunities for new content.',
                btn: { url: '/', label: 'Sign Up to Playtest' }
              },
              {
                component: 'details',
                style: { theme: '' },
                headline: 'Share Your Experiences',
                body: 'Encourage players to take screenshots or record clips of their gameplay. Ask them to share these on social media or submit them directly to you.',
                btn: { url: '/', label: 'Send Your Content' }
              },
              {
                component: 'details',
                style: { theme: '' },
                headline: 'Give Feedback and Start Discussions',
                body: 'Ask for direct feedback on features, gameplay, and story elements. Encourage players to join discussions on Discord or Reddit, particularly around the global issues featured in the modpack.',
                btn: { url: '/', label: 'Join the Discussion' }
              },
              {
                component: 'details',
                style: { theme: '' },
                headline: 'Tell Your Friends',
                body: 'Motivate players to share the modpack with their friends, stream it on Twitch, or talk about it on social media. Emphasize the power of word-of-mouth in growing the community.',
                btn: { url: '/', label: 'Share with Friends' }
              }
            ]
          }
        },
        action: {
          layout: 'bg-pattern',
          theme: 'primary',
          pattern: 'leaves',
          overline: 'Write Your Own Story',
          headline: 'Shape the World with Your Choices',
          body: "Every decision you make in 'An Inconvenient Modpack' leaves a mark on the world. The fate of the Earth is in your hands. Download the modpack and start crafting a story that’s uniquely yours.",
          btns: [
            { label: 'Download Now', url: '/' },
            { variant: 'secondary', label: 'Visit the Wiki', url: '/' }
          ]
        }
      }
    }
  ]
}

module.exports = config
