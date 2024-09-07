const config = {
  title: 'An Inconvenient Modpack',
  url: 'https://inconvenient.gg',
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
            { label: 'Discord', url: 'https://discord.gg/dJbfXV9JnF', external: true },
            { label: 'Youtube', url: 'TODO', external: true },
            { label: 'Tik Tok', url: 'TODO', external: true },
            // { label: 'Twitch', url: 'TODO', external: true },
            // { label: 'Reddit', url: 'TODO', external: true },
            { label: 'Mastodon', url: 'TODO', external: true }
          ]
        }
      ],
      action: { label: 'Play Now', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', external: true },
      bottombar: {
        links: [
          { label: 'Home', url: '/', icon: 'home' },
          { label: 'Features', url: '/features', icon: 'about' },
          { label: 'Wiki', url: 'https://wiki.inconvenient.gg', icon: 'books' },
          { label: 'Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues', icon: 'advocate' },
          { label: 'Community', url: '/community', icon: 'contact' }
        ],
        fab: { label: 'Play Now', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', icon: 'donate' }
      }
    },
    footer: {
      variant: 'simple',
      links: [
        { label: 'Features', url: '/features' },
        { label: 'Wiki', url: 'https://wiki.inconvenient.gg' },
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
        },
        {
          label: 'Youtube',
          icon: 'logo-youtube',
          url: 'TODO'
        },
        {
          label: 'TikTok',
          icon: 'logo-tiktok',
          url: 'TODO'
        },
        // {
        //   label: 'Reddit',
        //   icon: 'logo-reddit',
        //   url: 'TODO'
        // },
        {
          label: 'Mastodon',
          icon: 'logo-mastodon',
          url: 'TODO'
        }
      ],
      copywrite: '© 2024 An Inconvenient Modpack'
    }
  },
  pages: [
    {
      url: 'index',
      header: false,
      title: 'An Inconvenient Modpack – Awaken, Rebuild, and Shape the Future',
      description:
        'Awaken in a world transformed. Rebuild civilization, explore new dimensions, and uncover the truth. Your choices shape the future. Download now and start your journey.',
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
                    { label: 'Discord', url: 'https://discord.gg/dJbfXV9JnF', external: true },
                    { label: 'Youtube', url: 'TODO', external: true },
                    { label: 'Tik Tok', url: 'TODO', external: true },
                    // { label: 'Twitch', url: 'TODO', external: true },
                    // { label: 'Reddit', url: 'TODO', external: true },
                    { label: 'Mastodon', url: 'TODO', external: true }
                  ]
                }
              ],
              action: {
                label: 'Play Now',
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
                  label: 'Play Now',
                  url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
                  icon: 'donate'
                }
              }
            }
          },
          overline: 'The Earth is Dying • But It’s Not Too Late',
          headline: 'Awaken, Uncover, and Decide Humanity’s Fate',
          body: 'You’ve been asleep for a thousand years. The world you once knew is gone. Can you rise above the ruins, face the consequences of humanity’s mistakes, and rebuild what was lost? Or will you let the Earth fall into chaos once more?',
          btns: [
            {
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient',
              external: true,
              label: 'Begin Your Journey'
            }
            // { variant: 'secondary', url: 'TODO', label: 'Watch the Full Trailer' }
          ],
          video: { src: 'bunker.mp4' }
        },
        wakeUp: {
          layout: 'start-heavy',
          end: {
            component: 'text',
            size: 'region',
            overline: "You've Slept Far Too Long",
            headline: 'Awaken in a World You No Longer Recognize',
            body: 'You open your eyes in a cold, desolate bunker, and it feels like you’re still trapped in a dream—a nightmare. A thousand years have passed, and the world you knew has vanished. Can you survive long enough to uncover the truth?'
          },
          start: {
            component: 'img',
            src: 'bunker.png',
            ar: 'square',
            alt: 'Underground Bunker'
          }
        },
        rebuild: {
          layout: 'gallery',
          overline: 'Piece Together What’s Left',
          variant: 'masonry',
          text: 'start',
          headline: 'Rebuild to Remember',
          body: 'As you rebuild the shattered world, fragments of your memory return, and you begin to wake up, piece by piece. Each step forward reveals a truth you’ve long forgotten—about yourself, the past, and the role you played in humanity’s downfall. Will rebuilding the world help you wake from this nightmare?',
          items: [
            {
              component: 'card',
              icon: 'leather',
              size: 'xl',
              theme: 'clay',
              url: 'https://wiki.inconvenient.gg/milestones/leather-making',
              headline: 'Leather making'
            },
            {
              component: 'card',
              size: 'xl',
              theme: 'slate',
              url: 'https://wiki.inconvenient.gg/nightmares/cold',
              body: 'I am sitting in an office chair, looking at my desktop. It has multiple files open, showing schematic plans for an underground bunker.'
            },
            {
              component: 'card',
              icon: 'compass',
              size: 'xl',
              theme: 'beige',
              url: 'https://wiki.inconvenient.gg/milestones/navigation',
              headline: 'Navigation'
            },
            {
              component: 'card',
              size: 'xl',
              theme: 'olive',
              url: 'https://wiki.inconvenient.gg/nightmares/undead',
              body: 'I read multiple reports of a strange illness affecting people across the world, causing their skin to rot and their minds to become increasingly confused and violent.'
            },
            {
              component: 'card',
              icon: 'ingot',
              size: 'xl',
              theme: 'slate',
              url: 'https://wiki.inconvenient.gg/milestones/metallurgy',
              headline: 'Metallurgy'
            },
            {
              component: 'card',
              icon: 'sprout',
              size: 'xl',
              theme: 'olive',
              url: 'https://wiki.inconvenient.gg/milestones/agriculture',
              headline: 'Agriculture'
            },
            {
              component: 'card',
              size: 'xl',
              theme: 'beige',
              url: 'https://wiki.inconvenient.gg/nightmares/exotic',
              body: "I'm reading news that mass die-offs of wild fish have been occurring due to ocean acidification."
            },
            {
              component: 'card',
              icon: 'tree',
              size: 'xl',
              theme: 'olive',
              url: 'https://wiki.inconvenient.gg/milestones/natural-magic',
              headline: 'Natural Magic'
            },

            {
              component: 'card',
              icon: 'needle',
              size: 'xl',
              theme: 'clay',
              url: 'https://wiki.inconvenient.gg/milestones/textiles',
              headline: 'Textiles'
            },
            {
              component: 'card',
              icon: 'pottery',
              size: 'xl',
              theme: 'beige',
              url: 'https://wiki.inconvenient.gg/milestones/pottery',
              headline: 'Pottery'
            },
            {
              component: 'card',
              icon: 'blood',
              size: 'xl',
              theme: 'rust',
              url: 'https://wiki.inconvenient.gg/milestones/blood-magic',
              headline: 'Blood Magic'
            },
            {
              component: 'card',
              icon: 'pig',
              size: 'xl',
              theme: 'clay',
              url: 'https://wiki.inconvenient.gg/milestones/animal-husbandry',
              headline: 'Animal Husbandry'
            },

            {
              component: 'card',
              icon: 'palette',
              size: 'xl',
              theme: 'rust',
              url: 'https://wiki.inconvenient.gg/milestones/dye-making',
              headline: 'Dye making'
            },
            {
              component: 'card',
              icon: 'electronics',
              size: 'xl',
              theme: 'beige',
              url: 'https://wiki.inconvenient.gg/milestones/electronics',
              headline: 'Electronics'
            },
            {
              component: 'card',
              icon: 'gunpowder',
              size: 'xl',
              theme: 'slate',
              url: 'https://wiki.inconvenient.gg/milestones/gunpowder',
              headline: 'Gunpowder'
            },

            {
              component: 'card',
              icon: 'cooking',
              size: 'xl',
              theme: 'rust',
              url: 'https://wiki.inconvenient.gg/milestones/cooking',
              headline: 'Cooking'
            },
            {
              component: 'card',
              icon: 'barrel',
              size: 'xl',
              theme: 'slate',
              url: 'https://wiki.inconvenient.gg/milestones/petroleum',
              headline: 'Petroleum'
            },
            {
              component: 'card',
              size: 'xl',
              theme: 'olive',
              url: 'https://wiki.inconvenient.gg/nightmares/wither',
              body: "I'm watching the news of a Category 6 hurricane that has been sweeping through the country for weeks now. It's bringing with it massive floods that have forced millions to evacuate and lose their homes."
            }
          ],
          btn: { url: 'https://wiki.inconvenient.gg/milestones', label: 'See Dozens More Milestones' }
        },
        explore: {
          layout: 'reel',
          size: 'region',
          overline: "The Past Won't Stay Buried",
          headline: 'Explore New Worlds to Discover the Truth',
          body: "The ruins of humanity’s downfall are scattered across distant worlds. Only by traveling through these dimensions can you uncover the hidden stories of what happened while you slept. Can you piece together the truth before you're lost in the chaos of the past?",
          items: [
            {
              component: 'card',
              variant: 'flip',
              img: { ar: 'square', src: 'everbright.png', alt: 'Everbright' },
              headline: 'Everbright',
              body: 'Step into the snowy expanses of Everbright, where a mysterious, long-lost civilization once thrived. The frosty beauty of this land hides the darker truths of a world that ignored its warnings. Will you explore its icy secrets?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'undergarden.png', alt: 'Undergarden' },
              headline: 'Undergarden',
              body: 'In the eerie caverns of Undergarden, something far worse than darkness awaits. Nature has reclaimed this place, but it left behind a haunting legacy. Can you navigate its forgotten depths?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'everdawn.png', alt: 'Everdawn' },
              headline: 'Everdawn',
              body: 'Everdawn is alive with heat and chaos. Its warm lands are teeming with life, but something more sinister lurks beneath. The remnants of past disasters remain. What will you uncover here?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'twilight.png', alt: 'The Twilight Forest' },
              headline: 'The Twilight Forest',
              body: 'In the abandoned streets of The Twilight Forest, echoes of a great tragedy persist. This once-flourishing land now lies in silence. Can you face the shadows of its forgotten past?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'nether.png', alt: 'The Nether' },
              headline: 'The Nether',
              body: 'Once a thriving industrial hub, The Nether now burns in the aftermath of unchecked greed. With fire and brimstone all around, this place tells a cautionary tale. What role will you play?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'bumblezone.png', alt: 'The Bumblezone' },
              headline: 'The Bumblezone',
              body: 'Explore the buzzing world inside The Bumblezone, a realm of endless honeycombs and hidden danger. But don’t be fooled by its golden glow—this world has seen better days. Will you find hope here?'
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'blueleaf.png', alt: 'Blueleaf' },
              headline: 'Blueleaf',
              body: 'A paradise of endless resources and wealth, Blueleaf glimmers with opportunity. But behind its beauty lies a world of exploitation and ambition. Will you rise to the top or take a different path?'
            }
          ]
        },
        choice: {
          layout: 'split-slider',
          start: {
            component: 'text',
            size: 'region',
            overline: 'The Future is in Your Hands',
            headline: 'Will You Dream of a New World or Stay Trapped in The Nightmare?',
            body: 'We’ve been living in a dream—a nightmare that we mistake for reality. You now have the power to wake up, to reject the broken path we’re on, dream a new dream, and create a new world. Or will you stay trapped, letting the Earth spiral further into chaos? The future is yours to decide.',
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
          body: 'Every decision you make in An Inconvenient Modpack leaves a mark on the world. The fate of the Earth is in your hands. Download the modpack and start crafting a story that’s uniquely yours.',
          btns: [
            {
              label: 'Download Now',
              external: true,
              url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient'
            },
            { variant: 'secondary', label: 'Visit the Wiki', url: 'https://wiki.inconvenient.gg' }
          ]
        }
      }
    },
    {
      url: 'features',
      title: 'Explore Features of An Inconvenient Modpack – Survival, Storytelling, and Innovation',
      description:
        'Discover the core features of An Inconvenient Modpack. Rebuild civilization, explore unique dimensions, and master survival with 1333+ recipes, 10 chapters, and more.',
      regions: {
        overview: {
          layout: 'start-heavy',
          align: 'stretch',
          start: { component: 'img', src: 'feature-split.webp', alt: '2 Visions of The Future', ar: 'square' },
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
            center: true,
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
          body: "Whether you're drawn to uncover ancient stories, navigate new worlds, master intricate systems, survive harsh realities, or design the future, An Inconvenient Modpack has been crafted to connect with your unique style. Your choices, your impact.",
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
                'Choose between joining a Solarpunk community or climbing the ranks of Corpo Corporation.',
                'Face climate catastrophes head-on or restore the environment with public works projects.'
              ]
            },
            {
              component: 'card',
              variant: 'flip',
              img: { src: 'adventure.webp', alt: 'Adventurer' },
              headline: 'Adventurer',
              icon: 'compass',
              list: [
                'Wake up in a bunker and explore the remnants of a world before climate change.',
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
                'Build your own Solarpunk society the way you want to.'
              ]
            }
          ]
        },
        history: {
          layout: 'sparkline',
          variant: 'block',
          overline: 'The Journey So Far',
          headline: 'The Never Ending Story',
          body: "Building An Inconvenient Modpack has been a long and evolving process—spanning several years of challenges, creativity, and inspiration. What started as a simple idea turned into a complex, story-driven experience that tackles real-world issues through the lens of gameplay. While the timeline below gives you a glimpse into some of the key features and milestones, it's important to note that the dates are rough estimates. After working on this for 3-4 years, exact timelines have blurred, and the scope of the project continues to grow.",
          items: [
            {
              component: 'blurb',
              headline: 'The Beginning',
              body: "I was playing sevTech with my boyfriend and thought, 'This is great but I can do better'",
              date: 'August 2021',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Chapters 1 - 5',
              body: 'A solid foundation was laid with a deep array of recipes, advancements, and mechanics that players would explore in the early chapters of their journey.',
              date: 'September 2021',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'The Stories Begin',
              body: 'The narrative started to unfold through Patchouli entries, bringing a rich backstory to life and connecting it with the gameplay.',
              date: 'November 2021',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Milestones',
              body: 'Major milestones were marked by Ender Eye rewards and significant progression, offering players a structured way to feel the weight of their accomplishments.',
              date: 'January 2022',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'The Bunker & The Lost City',
              body: 'Players wake up in an underground bunker while the surface, dominated by decaying cities—The Lost Cities—awaits exploration.',
              date: 'February 2022',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Gateways',
              body: 'Gateways from other dimensions began to open, restoring life to the overworld. At first, the world is empty except for zombies, but with each completed gateway, the world starts to rejuvenate.',
              date: 'April 2022',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Nightmares & Lost Pages',
              body: 'Each milestone brings fragmented memories in the form of nightmares, while scraps of paper across dimensions tell stories of a climate-ravaged world from a thousand years ago.',
              date: 'May 2022',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: '1.18.2',
              body: 'The modpack was updated to version 1.18.2, incorporating new challenges and features.',
              date: 'Late 2022',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Relics',
              body: 'Ancient relics became rewards for completing dimension gateways, granting players powerful artifacts that shaped their future progression.',
              date: 'Around November 2022',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Release Alpha Version to Curseforge',
              body: "An Inconvenient Modpack reached its first public release on Curseforge, allowing players to dive into the modpack's world, complete with server files.",
              date: 'February 2023',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Feature Complete up to Chapter 6',
              body: 'With Chapters 1 through 5.2 playtested and refined, the focus shifted to wrapping up the final chapters, polishing the experience for all players.',
              date: 'Ongoing - Need Help',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'The Dream',
              body: 'The modpack leads to the ultimate truth—players are faced with hard choices that shape their path.',
              date: 'Coming in 2024',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Restore the World & Build a Solarpunk Community',
              body: 'Will you wake up and rebuild the world with sustainable technology and hope for the future?',
              date: 'Coming in 2024',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Adapt to Climate Catastrophe & Rise to The Top of Corpo Corporation',
              body: 'Or will you stay asleep, climbing the corporate ladder in a dystopian world?',
              date: 'Coming in 2024',
              class: 'cluster justify-between align-start'
            },
            {
              component: 'blurb',
              headline: 'Ascension',
              body: 'Explore the cosmos, terraform new worlds, and achieve technological dominance—leaving Earth behind.',
              date: 'Coming in 2024',
              class: 'cluster justify-between align-start'
            }
          ]
          // btn: { label: 'See Roadmap', url: '/TODO' }
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
            { variant: 'secondary', label: 'Visit the Wiki', url: 'https://wiki.inconvenient.gg' }
          ]
        }
      }
    },
    {
      url: 'community',
      title: 'Join the Community of An Inconvenient Modpack – Collaborate, Rebuild, and Inspire',
      description:
        'Become part of a Solarpunk-inspired community. Collaborate, playtest, and help shape the future of An Inconvenient Modpack. Join the movement and start making an impact.',
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
              { url: 'https://modrinth.com/TODO', variant: 'secondary', label: 'Get on Modrinth', external: true }
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
              icon: 'logo-mastodon',
              size: 'xl',
              url: 'TODO',
              theme: 'mastodon',
              body: 'Stay updated with the latest modpack news and community discussions.'
            },
            {
              component: 'card',
              icon: 'logo-discord',
              size: 'xl',
              url: 'https://discord.gg/dJbfXV9JnF',
              theme: 'discord',
              body: 'Join the community discussions and get live help.'
            },
            {
              component: 'card',
              icon: 'logo-youtube',
              size: 'xl',
              url: 'TODO',
              theme: 'youtube',
              body: 'Watch tutorials, gameplay videos, and deep dives into the modpack.'
            },
            {
              component: 'card',
              icon: 'logo-tiktok',
              size: 'xl',
              url: 'TODO',
              theme: 'tiktok',
              body: 'Discover quick tips, and behind-the-scenes content.'
            }
            // {
            //   component: 'card',
            //   icon: 'logo-twitch',
            //   size: 'xl',
            //   url: 'TODO',
            //   theme: 'twitch',
            //   body: 'Join live streams of me fixing bugs and playtesting the modpack.'
            // },
            // {
            //   component: 'card',
            //   icon: 'logo-reddit',
            //   size: 'xl',
            //   url: 'TODO',
            //   theme: 'reddit',
            //   body: 'Share your experiences, discuss strategies, and connect with other players.'
            // },
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
                body: 'Your journey through the modpack is unique, and I want to see it! Share your favorite moments, take screenshots, or record gameplay clips. Spread the word on social media or submit your content directly to help inspire others and highlight the impact of your story.',
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
            { variant: 'secondary', label: 'Visit the Wiki', url: 'https://wiki.inconvenient.gg' }
          ]
        }
      }
    }
  ]
}

module.exports = config
