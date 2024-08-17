const config = {
  title: 'An Inconvenient Modpack',
  url: 'https://inconvenient.gg',
  description:
    '',
  navigation: {
    logo: {
      src: './public/svg/logo',
      alt: 'An Inconvenient Modpack'
    },
    header: {
      variant: 'spaced',
      theme: 'dark',
      links: [
        {
          label: 'Features',
          url: '/features',
        },
        { label: 'Wiki', url: '/wiki' },
        { label: 'Help Me Find Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues' },
        {
          label: 'Community',
          url: '/community',
          subLinks: [
            { label: 'Discord', url: '/' },
            { label: 'Youtube', url: '/' },
            { label: 'Tik Tok', url: '/' },
            { label: 'Twitch', url: '/' },
            { label: 'Reddit', url: '/' },
            { label: 'Mastodon', url: '/' },
          ]
        },
      ],
      action: { label: 'Play', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient' }
    },
    bottombar: {
      links: [
        { label: 'Home', url: '/', icon: 'home' },
        { label: 'Features', url: '/features', icon: 'about' },
        { label: 'Wiki', url: '/wiki', icon: 'books' },
        { label: 'Bugs', url: 'https://github.com/dustinheisey/An-Inconvenient-Modpack/issues', icon: 'advocate' },
        { label: 'Community', url: '/community', icon: 'contact' }
      ],
      fab: { label: 'Play', url: 'https://www.curseforge.com/minecraft/modpacks/inconvenient', icon: 'donate' }
    },
    footer: {
      variant: 'mission',
      theme: 'dark',
      mission:
        'Our mission at the BeeLeaf Foundation is to foster an understanding and appreciation of bees and their vital role in our ecosystem. We are committed to promoting bee conservation through education, advocacy, and action. Our goal is to inspire individuals and communities to create environments where bees can thrive, ensuring a sustainable future for these remarkable creatures and the life-sustaining pollination work they perform.',
      groups: [
        {
          title: 'About',
          links: [
            { label: 'Community', url: '/about/community' },
            { label: 'Impact', url: '/about/impact' },
            { label: 'Our Work', url: '/about/our-work' },
            { label: 'Partners', url: '/about/partners' },
            { label: 'Bee Facts', url: '/learn/bee-facts' },
            { label: 'Conservation', url: '/learn/conservation-techniques' }
          ]
        },
        {
          title: 'Nonprofit',
          links: [
            { label: 'Home', url: '/' },
            { label: 'About', url: '/about' },
            { label: 'Learn', url: '/learn' },
            { label: 'Get Involved', url: '/get-involved' },
            { label: 'Contact', url: '/contact' },
            { label: 'Donate', url: '/donate' }
          ]
        },
        {
          title: 'Legal',
          links: [
            {
              label: 'Privacy Policy',
              url: 'https://www.termsfeed.com/live/d5271eb0-e06a-49f5-9021-99c0bb40389b'
            },
            {
              label: 'Terms of Service',
              url: 'https://www.termsfeed.com/live/dc519ac0-71e6-49d3-a0d6-f9ce86815fa5'
            },
            {
              label: 'Cookies',
              url: 'https://www.termsfeed.com/live/012a4e98-08d0-48ab-b716-764b86ca84df'
            },
            { label: 'Sitemap', url: '/sitemap.xml' }
          ]
        }
      ],
      social: [
        {
          label: 'Medium',
          icon: 'logo-medium',
          url: 'https://medium.com/@dustin_heisey'
        },
        {
          label: 'Dribbble',
          icon: 'logo-dribbble',
          url: 'https://dribbble.com/dustin_heisey'
        },
        {
          label: 'Behance',
          icon: 'logo-behance',
          url: 'https://www.behance.net/dustin_heisey'
        },
        {
          label: 'LinkedIn',
          icon: 'logo-linkedin',
          url: 'https://www.linkedin.com/in/heiseydustin/'
        }
      ],
      copywrite: '© 2023 BeeLeaf Foundation. All rights reserved.'
    }
  },
  pages: [
    {
      url: 'index',
      title: 'Join BeeLeaf Foundation: Become a Hero for Bees Today!',
      description:
        'At BeeLeaf Foundation, you can be the hero bees desperately need. Join us in the fight to conserve bee populations through education, conservation, and action.',
      regions: {
        hero: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'img',
            src: 'bee-hero.png',
            alt: 'bee'
          },
          end: {
            component: 'text',
            size: 'hero',
            headline: 'Join the Hive, Save the Bees',
            body: "Imagine a world where the soft hum of bees fills the air, where flowers bloom in abundance thanks to their tireless work. This is the world we're fighting for, and we need you.",
            btn: {
              label: 'Join the Hive',
              url: '/get-involved'
            }
          }
        },
        problem: {
          layout: 'end-heavy',
          class: 'inset',
          end: {
            component: 'text',
            headline: 'Our Bees are in Danger and their survival is crucial for our ecosystem'
          },
          start: {
            component: 'list',
            icon: 'remove',
            items: [
              'Pesticides: Toxic chemicals harming bee populations.',
              'Habitat Loss: Shrinking habitats deprive bees of food.',
              'Climate Change: Altered weather disrupts bee foraging patterns.',
              'Colony Collapse Disorder (CCD): Mysterious honeybee colony losses threaten ecosystems.',
              'Invasive Species: Non-native plants and pests harm native bees.',
              'Intensive Agriculture: Industrial practices limit bee forage and health.'
            ]
          }
        },
        guide: {
          layout: 'start-heavy',
          end: {
            component: 'text',
            overline: 'BeeLeaf Foundation: Your Guide to Bee Conservation',
            headline: "We're here to help you help the bees",
            body: "We are BeeLeaf Foundation, a dedicated team of bee enthusiasts, conservationists, and educators committed to reversing the decline of bee populations. We provide resources, education, and opportunities for you to get involved. With us, you're not alone in this fight. Together, we can turn the tide."
          },
          start: {
            component: 'img',
            src: 'guide.png',
            alt: 'Guide'
          }
        },
        plan: {
          layout: 'switcher',
          overline: 'Our Plan: Education, Conservation, and Action',
          headline: 'Together, we can create a brighter future for our bees',
          items: [
            {
              component: 'blurb',
              icon: 'book',
              headline: 'Education',
              body: 'Knowledge is power. We aim to educate the public about the importance of bees. Through workshops, webinars, and community outreach, we’re spreading the word about the vital role bees play in our ecosystem.'
            },
            {
              component: 'blurb',
              icon: 'shield',
              headline: 'Conservation',
              body: 'Protecting Bee Habitats. We’re working tirelessly to conserve and restore bee habitats. From planting wildflowers to creating urban bee sanctuaries, every action we take is a step towards a safer world for our bees.'
            },
            {
              component: 'blurb',
              icon: 'advocate',
              headline: 'Action',
              body: 'Advocacy for Policy Change. We’re advocating for policies that protect bees and their habitats. From lobbying against harmful pesticides to promoting sustainable farming practices, we’re making sure our voices - and the buzz of the bees - are heard.'
            }
          ]
        },
        action: {
          layout: 'split',
          theme: 'dark',
          start: {
            component: 'text',
            overline: 'Together, We Can Ensure a Future for Bees',
            headline: 'Join us in creating a world where bees thrive',
            body: "With your help, we can create a world where bees are no longer at risk. A world where our food supply is secure, our flowers bloom, and our children can marvel at the humble bee. Imagine the joy of seeing a child's face light up at the sight of a bee, knowing that they have a future in a world where bees thrive. This is the future we're striving for. Join us in making this vision a reality.",
            btn: {
              label: 'Get Involved',
              url: '/get-involved'
            }
          },
          end: {
            component: 'img',
            src: 'bees-thrive.png',
            alt: 'Bees Thriving'
          }
        }
      }
    },
    {
      url: 'features',
      title: 'About BeeLeaf Foundation: Our Mission to Save Bees',
      description:
        "Discover the core of BeeLeaf Foundation's dedication to bee conservation. Our mission, history, and vision reflect our unwavering commitment to protecting these vital creatures.",
      regions: {
        mission: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'mission.png', alt: 'BeeLeaf Mission' },
          start: {
            component: 'text',
            size: 'page',
            overline: 'About BeeLeaf Foundation',
            headline: 'Committed to Bee Health, Education, and Conservation',
            body: 'At BeeLeaf Foundation, we are passionate about the health and survival of bees. Our mission is to educate the public about the vital role bees play in our ecosystem and the crisis they are facing. We are a team of dedicated conservationists, educators, and bee enthusiasts working tirelessly to protect these incredible creatures. Join us in our mission to create a world where bees can thrive.'
          }
        },
        history: {
          layout: 'sparkline',
          variant: 'block-staggered',
          overline: 'Our History',
          headline: 'A Legacy of Love for Bees',
          items: [
            {
              component: 'blurb',
              headline: 'The Beginning',
              body: 'Our journey began with a simple love for bees and a deep concern for their declining populations.'
            },
            {
              component: 'blurb',
              headline: 'The Turning Point',
              body: 'In 2015, we launched our first conservation project, planting wildflowers in a local park. This project was a turning point for us, as it showed us the power of community action. Since then, we have been working tirelessly to conserve and restore bee habitats.'
            },
            {
              component: 'blurb',
              headline: 'The Next Step',
              body: 'In 2018, we launched our first educational program, a series of workshops for children. These workshops were a huge success, and we have since expanded our educational programs to include webinars, community outreach, and more.'
            },
            {
              component: 'blurb',
              headline: 'The Future',
              body: 'We are excited to announce that we are launching our first advocacy campaign in 2020. This campaign will focus on promoting sustainable farming practices and lobbying against harmful pesticides. We are also working on a new conservation project, creating urban bee sanctuaries.'
            }
          ]
        },
        team: {
          layout: 'gallery',
          style: { gap: true },
          overline: 'Our Team',
          headline: 'Meet the Hive',
          body: 'Our team is composed of passionate individuals dedicated to making a difference in the world of bee conservation. From our knowledgeable educators to our tireless conservationists, every member of our team plays a crucial role in our mission.',
          items: [
            {
              component: 'blurb',
              img: { src: 'john-doe.jpeg', alt: 'John Doe' },
              headline: 'John Doe',
              body: 'Founder & CEO'
            },
            {
              component: 'blurb',
              img: { src: 'jane-doe.jpeg', alt: 'Jane Doe' },
              headline: 'Jane Doe',
              body: 'Director of Education'
            },
            {
              component: 'blurb',
              img: { src: 'john-smith.jpeg', alt: 'John Smith' },
              headline: 'John Smith',
              body: 'Director of Conservation'
            },
            {
              component: 'blurb',
              img: { src: 'jane-smith.jpeg', alt: 'Jane Smith' },
              headline: 'Jane Smith',
              body: 'Director of Advocacy'
            },
            {
              component: 'blurb',
              img: { src: 'john-jones.jpeg', alt: 'John Jones' },
              headline: 'John Jones',
              body: 'Director of Communications'
            },
            {
              component: 'blurb',
              img: { src: 'jane-jones.jpeg', alt: 'Jane Jones' },
              headline: 'Jane Jones',
              body: 'Director of Fundraising'
            }
          ]
        },
        action: {
          layout: 'split',
          theme: 'dark',
          style: { gap: true },
          end: { component: 'img', src: 'future.png', alt: 'Bee Future' },
          start: {
            component: 'text',
            overline: 'Our Vision',
            headline: 'A Future Where Bees Thrive',
            body: "We envision a future where bees are no longer at risk, where our food supply is secure, our flowers bloom, and our children can marvel at the humble bee. This is the future we're striving for.",
            btn: {
              label: 'Get Involved',
              url: '/get-involved'
            }
          }
        }
      }
    },
    {
      url: 'wiki',
      title: 'Learn About Bees with BeeLeaf Foundation: Understanding Our Buzzing Friends',
      description:
        'Dive into the world of bees and learn about their importance, threats, and ways to help with BeeLeaf Foundation. Discover how these fascinating creatures play a vital role in our ecosystem.',
      regions: {
        intro: {
          layout: 'split',
          theme: 'dark',
          start: { component: 'img', src: 'learning.png', alt: 'Learning' },
          end: {
            component: 'text',
            get navbar() {
              return config.navigation
            },
            size: 'page',
            overline: 'Learn About Bees',
            headline: 'Understanding Our Buzzing Friends',
            body: 'Bees are fascinating creatures with a vital role in our ecosystem. Dive into the world of bees and learn about their importance, the threats they face, and what you can do to help.'
          }
        },
        importance: {
          layout: 'start-heavy',
          start: { component: 'img', src: 'importance.png', alt: 'Importance' },
          end: {
            component: 'text',
            overline: 'Importance of Bees',
            headline: 'The Tiny Heroes of Our Ecosystem',
            body: "Bees are more than just honey producers. They're crucial pollinators that help plants reproduce. Without bees, our food supply and biodiversity are at risk. Learn more about why bees matter.",
            btn: {
              label: 'Learn About Bees',
              variant: 'secondary',
              url: '/learn/bee-facts'
            }
          }
        },
        threats: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'wasteland.png', alt: 'Wasteland' },
          start: {
            component: 'text',
            overline: 'Threats to Bees',
            headline: 'The Challenges Bees Face',
            body: 'From pesticides and habitat loss to climate change, bees are up against numerous threats. Understanding these threats is the first step towards protecting our buzzing friends.',
            btn: {
              label: 'Learn About Conservation',
              variant: 'secondary',
              url: '/learn/conservation-techniques'
            }
          }
        },
        resources: {
          layout: 'switcher',
          style: { inset: true },
          overline: 'Resources',
          headline: 'Dive Deeper into the World of Bees',
          items: [
            {
              component: 'card',
              style: { theme: 'primary-container' },
              icon: 'article',
              overline: 'Articles',
              headline: 'Read Our Articles',
              body: 'Read our articles about bees and their conservation. From the latest research to tips for helping bees, our articles cover a wide range of topics.'
            },
            {
              component: 'card',
              style: { theme: 'tertiary-container' },
              icon: 'video',
              overline: 'Videos',
              headline: 'Watch Our Videos',
              body: 'Watch our videos about bees and their conservation. From educational videos to inspiring stories, our videos will help you learn more about bees.'
            },
            {
              component: 'card',
              style: { theme: 'secondary-container' },
              icon: 'books',
              overline: 'Educational Materials',
              headline: 'Explore Our Educational Materials',
              body: 'Explore our educational materials about bees and their conservation. From lesson plans to activity sheets, our educational materials are perfect for teachers, parents, and students.'
            }
          ]
        },
        action: {
          layout: 'split',
          theme: 'dark',
          start: { component: 'img', src: 'bee-friend.png', alt: 'Friend to The Bees' },
          end: {
            component: 'text',
            overline: 'How to Help',
            headline: 'Be a Friend to Bees',
            body: 'There are many ways you can help bees, from planting a bee-friendly garden to reducing your use of pesticides. Discover how you can make a difference in the lives of bees.',
            btn: {
              label: 'Take Action',
              url: '/get-involved'
            }
          }
        }
      }
    },
    {
      url: 'community',
      title: 'Engage with the BeeLeaf Community: United for Bee Conservation',
      description:
        "Become part of the BeeLeaf Foundation's community and join forces with volunteers, donors, and partners who are dedicated to creating a safer world for bees.",
      regions: {
        intro: {
          layout: 'end-heavy',
          end: { component: 'img', src: 'community.png', alt: 'Community' },
          start: {
            component: 'text',
            size: 'page',
            overline: 'Community',
            headline: 'Together for Bees',
            body: 'Our community is at the heart of our work at BeeLeaf Foundation. From volunteers and donors to partners and supporters, every member of our community plays a crucial role in our mission to protect bees.'
          }
        },
        volunteers: {
          layout: 'gallery',
          style: { inset: true },
          overline: 'Our Volunteers',
          headline: 'The Heart of Our Hive',
          body: 'Our volunteers are the heart of our hive. They help with everything from habitat restoration to community outreach. Meet some of our amazing volunteers and learn about their experiences.',
          items: [
            {
              component: 'blurb',
              img: { src: 'john-doe.jpeg', alt: 'John Doe' },
              headline: 'John Doe',
              body: 'Volunteering with BeeLeaf Foundation allows me to play a meaningful role in bee conservation. Seeing the positive impact of my efforts brings me immense joy and fulfillment.'
            },
            {
              component: 'blurb',
              img: { src: 'jane-doe.jpeg', alt: 'Jane Doe' },
              headline: 'Jane Doe',
              body: "Being part of BeeLeaf Foundation's volunteer team is a fantastic opportunity to contribute to the preservation of these essential pollinators. I am grateful for the chance to make a real difference in the world."
            },
            {
              component: 'blurb',
              img: { src: 'john-smith.jpeg', alt: 'John Smith' },
              headline: 'John Smith',
              body: 'BeeLeaf Foundation has provided me with a platform to actively engage in bee conservation. As a volunteer, I find it incredibly rewarding to witness the positive changes we bring to bee habitats and raise awareness about their importance.'
            }
          ]
        },
        donors: {
          layout: 'end-heavy',
          start: { component: 'img', src: 'thriving-bee-habitat.png', alt: 'Thriving Bee Habitat' },
          end: {
            component: 'stats',
            overline: 'Our Donors',
            headline: 'Making Our Work Possible',
            body: 'Our donors make our work possible. Their generous contributions support our education, conservation, and advocacy efforts. Hear from some of our donors about why they choose to support BeeLeaf Foundation.',
            items: [
              {
                headline: '$1,000,000+',
                body: 'Donated to bee conservation initiatives'
              },
              {
                headline: '5,000+',
                body: 'Individual donors contributing to our mission'
              },
              {
                headline: '25+',
                body: 'Corporate sponsors partnering with BeeLeaf Foundation'
              },
              {
                headline: '10,000+',
                body: 'Volunteer hours dedicated to bee conservation'
              }
            ]
          }
        },
        action: {
          layout: 'split',
          theme: 'dark',
          end: { component: 'img', src: 'solution.png', alt: 'Solution' },
          start: {
            component: 'text',
            overline: 'Join Our Community',
            headline: 'Be a Part of the Solution',
            body: 'Join our community and be a part of the solution. Whether you volunteer, donate, or spread the word about the importance of bees, you can make a difference.',
            btn: {
              label: 'Get Involved',
              url: '/get-involved'
            }
          }
        }
      }
    },
  ]
}

module.exports = config
