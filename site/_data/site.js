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
        { label: 'Wiki', url: '/wiki' },
        {
          label: 'Help Me Find Bugs',
          external: true,
          url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues'
        },
        {
          label: 'Community',
          url: '/community',
          subLinks: [
            { label: 'Discord', url: 'https://discord.gg/dJbfXV9JnF', external: true }
            // { label: 'Youtube', url: '/', external: true },
            // { label: 'Tik Tok', url: '/', external: true },
            // { label: 'Twitch', url: '/', external: true },
            // { label: 'Reddit', url: '/', external: true },
            // { label: 'Mastodon', url: '/', external: true }
          ]
        }
      ],
      action: { label: 'Play', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', external: true },
      bottombar: {
        links: [
          { label: 'Home', url: '/', icon: 'home' },
          { label: 'Features', url: '/features', icon: 'about' },
          { label: 'Wiki', url: '/wiki', icon: 'books' },
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
        { label: 'Wiki', url: '/wiki', external: true },
        { label: 'Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues', external: true },
        { label: 'Community', url: '/community' },
        { label: 'Play Now', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', external: true }
      ],
      carbon: true,
      social: [
        {
          label: 'Discord',
          icon: 'logo-discord',
          url: 'https://discord.gg/dJbfXV9JnF'
        }
        // {
        //   label: 'Youtube',
        //   icon: 'logo-youtube',
        //   url: ''
        // },
        // {
        //   label: 'TikTok',
        //   icon: 'logo-tiktok',
        //   url: ''
        // },
        // {
        //   label: 'Reddit',
        //   icon: 'logo-reddit',
        //   url: ''
        // },
        // {
        //   label: 'Mastodon',
        //   icon: 'logo-mastodon',
        //   url: ''
        // }
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
                { label: 'Wiki', url: '/wiki' },
                {
                  label: 'Help Me Find Bugs',
                  external: true,
                  url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues'
                },
                {
                  label: 'Community',
                  url: '/community',
                  subLinks: [
                    { label: 'Discord', url: 'https://discord.gg/dJbfXV9JnF', external: true }
                    // { label: 'Youtube', url: '/', external: true },
                    // { label: 'Tik Tok', url: '/', external: true },
                    // { label: 'Twitch', url: '/', external: true },
                    // { label: 'Reddit', url: '/', external: true },
                    // { label: 'Mastodon', url: '/', external: true }
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
                  { label: 'Wiki', url: '/wiki', icon: 'books' },
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
            {
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
              external: true,
              label: 'Start Your Journey'
            }
            // { variant: 'secondary', url: '/', label: 'Watch the Full Trailer' }
          ],
          video: { src: 'bunker.mp4' }
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
            src: 'vision-1.jpg',
            alt: 'wave'
          }
        },
        rebuild: {
          layout: 'gallery',
          overline: 'overline',
          variant: 'masonry',
          text: 'start',
          headline: 'Rebuild to Rediscover',
          body: 'The remnants of a once-thriving civilization lie at your feet. As you rebuild, fragments of your memory start to return. Each step you take, each piece of technology you rediscover, brings you closer to the truth.',
          items: [
            {
              component: 'img',
              src: 'vision-1.jpg',
              alt: '1'
            },
            {
              component: 'img',
              src: 'vision-1.jpg',
              alt: '2'
            },
            {
              component: 'img',
              src: 'vision-1.jpg',
              alt: '3'
            },
            {
              component: 'img',
              src: 'vision-1.jpg',
              alt: '4'
            },
            {
              component: 'img',
              src: 'vision-1.jpg',
              alt: '5.1'
            },
            {
              component: 'img',
              src: 'vision-1.jpg',
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
              headline: 'Everbright',
              body: 'Occaecat cupidatat amet Lorem dolore qui cillum ipsum dolor nulla. Sint nisi elit amet incididunt in dolor.'
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
            overline: 'overline',
            headline: 'Decide the Fate of the World',
            body: 'With knowledge comes power. Will you use it to create a harmonious solarpunk utopia, or will you repeat history and usher in a cyberpunk dystopia? The choice is yours.',
            btn: {
              label: 'Play Now',
              external: true,
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient'
            }
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
            {
              label: 'Download Now',
              external: true,
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient'
            },
            { variant: 'secondary', label: 'Visit the Wiki', url: '/wiki' }
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
          align: 'stretch',
          start: { component: 'img', src: 'feature-split.webp', alt: 'Impact', ar: 'square' },
          end: {
            component: 'text',
            size: 'hero',
            overline: 'A World at a Crossroads',
            headline: 'Explore, Create, and Transform',
            body: 'Enjoy a wealth of engaging and immersive gamplay, and connect with the world around you and the choices you make. Every feature of this modpack has been carefully crafted to offer you the tools to uncover stories, build thriving communities, and master survival in a world transformed by climate change. Whether you’re a story seeker, adventurer, engineer, architect, or survivalist, this modpack empowers you to shape the future in your own way.',
            btn: {
              label: 'Start Your Journey',
              external: true,
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient'
            }
          },
          stats: {
            component: 'stats',
            variant: 'inline',
            class: 'text-center',
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
          body: "Whether you're drawn to uncover ancient stories, navigate new worlds, master intricate systems, survive harsh realities, or design the future, 'An Inconvenient Modpack' has been crafted to connect with your unique style. Your choices, your impact.",
          items: [
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'story-seeker.webp', alt: 'Story Seeker' },
              headline: 'Story Seeker',
              icon: 'book',
              list: [
                'Rebuild civilization and uncover your forgotten past through your nightmares.',
                'Reflect on your journey through journal entries and personal discoveries.',
                "Find ancient stories detailing climate change from the victims' perspectives.",
                'Experience immersive dreams that reveal both harsh truths and hopeful possibilities.',
                'Choose between joining a Solarpunk community or climbing the ranks of Corpo Corporation',
                'Face climate catastrophes head-on or restore the environment with public works projects'
              ]
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'adventure/1.webp', alt: 'Adventurer' },
              headline: 'Adventurer',
              icon: 'compass',
              list: [
                'Wake up in a bunker and explore the remnants of a world before climate change',
                'Discover overhauled world generation with layered stone and massive ore clusters.',
                'Explore 10 diverse dimensions filled with unique challenges.',
                'Battle formidable bosses across various worlds.',
                'Survive hordes of enemies that spawn every few nights.',
                'Defend against waves of enemies emerging from mysterious gateways.',
                'Collect powerful relics that enhance your abilities.'
              ]
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'engineer.webp', alt: 'Engineer' },
              headline: 'Engineer',
              icon: 'settings',
              list: [
                'Tackle dozens of complex engineering challenges.',
                'Progression focused on automation and efficiency.',
                'Utilize realistic production methods for crafting various items.',
                'Master systems like pottery, metallurgy, witchcraft, and blood magic, or dive into petroleum engineering and animal agriculture.',
                'Choose between managing pollution or designing eco-friendly setups.',
                'Reverse-engineer 12 milestone feats to unlock the End.'
              ]
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'survivalist.webp', alt: 'Survivalist' },
              headline: 'Survivalist',
              icon: 'energy',
              list: [
                'Manage thirst as you explore harsh environments.',
                'Survive extreme temperatures with climate challenges.',
                'Upgrade health and stamina by completing advancements.',
                'Protect your sanity, or suffer unsettling consequences.',
                'Navigate the dangerous effects of pollution on the world.',
                'Face smarter, faster enemies, with zombies that track you by scent and attack in groups.'
              ]
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'architect.webp', alt: 'Architect' },
              headline: 'Architect',
              icon: 'block',
              list: [
                'Design and construct using thousands of new blocks and materials.',
                'Use advanced technologies to streamline massive building projects and quickly bring your vision to life.',
                'Terraform the environment, building in landscapes either devastated by climate change or restored to natural beauty through your designs.',
                'Build your own railways and public transportation systems.',
                'Create intricate production lines and enormous factories.',
                'Build your own Solarpunk society the way you want to'
              ]
            }
          ]
        },
        history: {
          layout: 'sparkline',
          variant: 'block',
          overline: 'The Journey So Far',
          headline: 'The Never Ending Story',
          body: "Building 'An Inconvenient Modpack' has been a personal journey of discovery, challenges, and excitement. This project isn’t just about gameplay; it’s about finding ways to connect global issues—like climate change and sustainability—with the stories we create in the game. Here’s a look at how far we’ve come.",
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
          ]
          // btn: { label: 'See Roadmap', url: '/roadmap' }
        },
        faq: {
          layout: 'center',
          content: {
            component: 'accordion',
            class: 'full',
            align: 'center',
            overline: 'Get Started',
            headline: 'Frequently Asked Questions',
            body: 'Here are some of the most common questions to help you get started and enjoy your experience with the modpack.',
            items: [
              {
                component: 'details',
                headline: 'How do I install the modpack?',
                body: 'You can install the modpack by downloading it from CurseForge or Modrinth. Follow the installation guide provided on our Wiki for step-by-step instructions.',
                btn: {
                  url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
                  external: true,
                  variant: 'secondary',
                  label: 'Download Now'
                }
              },
              {
                component: 'details',
                headline: 'Where can I post bugs?',
                body: 'Please report any bugs you encounter via our GitHub Issues page or join our Discord community for support and discussions.',
                btn: {
                  url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues',
                  external: true,
                  variant: 'secondary',
                  label: 'Report Issues on Github'
                }
              },
              {
                component: 'details',
                headline: 'Can I play this on a server?',
                body: 'Yes, the modpack is designed to be multiplayer-friendly! You can set up your own server using the provided server files.'
              },
              {
                component: 'details',
                headline: 'Is there support for shaders?',
                body: 'Yes, the modpack is compatible with popular shaders. Occulus is already installed so you should be able to add any shader and it will run.'
              }
            ]
          }
        },
        action: {
          layout: 'bg-pattern',
          theme: 'primary',
          pattern: 'leaves',
          overline: 'Write Your Own Story',
          headline: 'Download and Shape the Future',
          body: 'Explore new worlds, uncover forgotten histories, and make decisions that will shape the fate of humanity. Begin your journey today, and if you want to learn more, explore the wiki for insights into the issues and themes you’ll encounter. Together, we can imagine a new world and work toward creating it.',
          btns: [
            {
              label: 'Download Now',
              external: true,
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient'
            },
            { variant: 'secondary', label: 'Visit the Wiki', url: '/wiki' }
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
          align: 'stretch',
          end: { component: 'img', src: 'community.webp', alt: 'Community' },
          start: {
            component: 'text',
            size: 'page',
            overline: 'Be Apart of the Story',
            headline: 'Join the Movement to Shape a Better Future',
            body: 'My vision is to create a community built on Solarpunk principles—where mutual aid, collaboration, and restoration of the planet are at the heart of everything we do. Together, we can build not only a new world in the game but also inspire real-world change by imagining and acting on a better future. Will you help me create this vision?',
            btns: [
              {
                url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
                variant: 'secondary',
                external: true,
                label: 'Get on Curseforge'
              },
              { url: 'https://modrinth.com/', variant: 'secondary', label: 'Get on Modrinth', external: true }
            ]
          }
        },
        social: {
          layout: 'gallery',
          inset: true,
          overline: 'Connect and Engage',
          headline: 'Join the Conversation',
          body: "I aim to create a vibrant community built on collaboration, storytelling, and action. Whether you're seeking tips, sharing gameplay, or joining discussions, these platforms are where we connect to shape the modpack's future. Let’s explore how our choices, both in-game and in life, can drive meaningful change. Join a community ready to explore, rebuild, and inspire.",
          items: [
            {
              component: 'card',
              icon: 'logo-discord',
              size: 'xl',
              url: 'https://discord.gg/dJbfXV9JnF',
              theme: 'discord',
              body: 'Join the community discussions and get live help'
            }
            // {
            //   component: 'card',
            //   icon: 'logo-youtube',
            //   size: 'xl',
            //   url: '/',
            //   theme: 'youtube',
            //   body: 'Watch tutorials, gameplay videos, and deep dives into the modpack.'
            // },
            // {
            //   component: 'card',
            //   icon: 'logo-tiktok',
            //   size: 'xl',
            //   url: '/',
            //   theme: 'tiktok',
            //   body: 'Discover quick tips, behind-the-scenes content, and player moments.'
            // },
            // {
            //   component: 'card',
            //   icon: 'logo-twitch',
            //   size: 'xl',
            //   url: '/',
            //   theme: 'twitch',
            //   body: 'Join live streams of me fixing bugs and playtesting the modpack.'
            // },
            // {
            //   component: 'card',
            //   icon: 'logo-reddit',
            //   size: 'xl',
            //   url: '/',
            //   theme: 'reddit',
            //   body: 'Share your experiences, discuss strategies, and connect with other players.'
            // },
            // {
            //   component: 'card',
            //   icon: 'logo-mastodon',
            //   size: 'xl',
            //   url: '/',
            //   theme: 'mastodon',
            //   body: 'Stay updated with the latest modpack news and community discussions.'
            // }
          ]
        },
        // TODO: add showcase
        help: {
          layout: 'end-heavy',
          class: 'align-start',
          mobile: 'start',
          start: {
            component: 'text',
            size: 'region',
            overline: 'Join the Journey',
            headline: 'Help Shape the Future of This Modpack',
            lead: 'An Inconvenient Modpack is more than just a modpack. It’s an evolving experience that asks players to think critically about global issues like climate change, capitalism, and the path toward a hopeful future. But to bring this vision to life, I need your help.',
            body: 'This project thrives on community collaboration. Your feedback and participation will not only shape the modpack’s journey but also deepen the conversations we need to have about our world today. Together, we can tell a story of resilience, hope, and prove that we have the power to change the course of our future—both in the game and beyond.'
          },
          end: {
            component: 'accordion',
            items: [
              {
                component: 'details',
                headline: 'Playtest and Improve',
                body: 'Help me make An Inconvenient Modpack the best it can be by playtesting for me. Your gameplay insights are invaluable in identifying bugs, balance issues, and opportunities for new content. Together, we’ll fine-tune the experience to make it more engaging for everyone.',
                btn: {
                  url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues',
                  external: true,
                  variant: 'secondary',
                  label: 'Report Issues on Github'
                }
              },
              {
                component: 'details',
                headline: 'Share Your Experiences',
                body: 'Your journey through the modpack is unique, and we want to see it! Share your favorite moments, take screenshots, or record gameplay clips. Spread the word on social media or submit your content directly to help inspire others and highlight the impact of your story.',
                btn: {
                  url: 'https://discord.gg/dJbfXV9JnF',
                  variant: 'secondary',
                  external: true,
                  label: 'Share on Discord'
                }
              },
              {
                component: 'details',
                headline: 'Give Feedback and Start Discussions',
                body: 'The project is constantly evolving, and your feedback plays a key role in shaping the future of the modpack. Share your thoughts on features, gameplay, and story elements. Join discussions on Discord or Reddit to dive deeper into the global issues explored in the modpack and help spark new ideas.',
                btn: {
                  url: 'https://discord.gg/dJbfXV9JnF',
                  external: true,
                  variant: 'secondary',
                  label: 'Join the Discussion on Discord'
                }
              },
              {
                component: 'details',
                headline: 'Tell Your Friends',
                body: 'Help grow our community by sharing the modpack with friends, streaming your experience, or spreading the word on social media. Word-of-mouth is powerful, and your voice can help bring more players into the journey to rebuild our world.',
                btn: {
                  url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
                  external: true,
                  variant: 'secondary',
                  label: 'Spread the Word'
                }
              }
            ]
          }
        },
        action: {
          layout: 'bg-pattern',
          theme: 'primary',
          pattern: 'leaves',
          overline: 'Write Your Own Story',
          headline: 'Download and Shape the Future',
          body: 'Explore new worlds, uncover forgotten histories, and make decisions that will shape the fate of humanity. Begin your journey today, and if you want to learn more, explore the wiki for insights into the issues and themes you’ll encounter. Together, we can imagine a new world and work toward creating it.',
          btns: [
            {
              label: 'Download Now',
              external: true,
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient'
            },
            { variant: 'secondary', label: 'Visit the Wiki', url: '/wiki' }
          ]
        }
      }
    }
  ]
}

module.exports = config
