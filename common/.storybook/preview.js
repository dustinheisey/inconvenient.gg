import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../index.min.css'

export default {
  parameters: {
    darkMode: {
      darkClass: 'mode-dark',
      lightClass: 'mode-light',
      classTarget: 'html',
      stylePreview: true
    },
    backgrounds: { disable: true },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    viewMode: 'docs',
    options: {
      storySort: {
        order: ['Tokens', 'Elements', 'Layouts']
      }
    }
  },
  args: {
    content: {
      overline: 'Anim irure dolore do',
      headline: 'Est do esse veniam proident tempor qui adipisicing qui',
      lead: 'Minim irure sint veniam nisi aliqua pariatur nostrud quis excepteur reprehenderit. Irure Lorem adipisicing qui consequat non ullamco nulla cillum voluptate mollit et duis dolor proident.',
      body: 'Minim irure sint veniam nisi aliqua pariatur nostrud quis excepteur reprehenderit. Irure Lorem adipisicing qui consequat non ullamco nulla cillum voluptate mollit et duis dolor proident.',
      btn: {
        label: 'CTA Label',
        href: '#'
      },
      steps: [
        {
          headline: 'Est do esse veniam proident tempor qui adipisicing qui',
          body: 'Minim irure sint veniam nisi aliqua pariatur nostrud quis excepteur reprehenderit. Irure Lorem adipisicing qui consequat non ullamco nulla cillum voluptate mollit et duis dolor proident.'
        },
        {
          headline: 'Est do esse veniam proident tempor qui adipisicing qui',
          body: 'Minim irure sint veniam nisi aliqua pariatur nostrud quis excepteur reprehenderit. Irure Lorem adipisicing qui consequat non ullamco nulla cillum voluptate mollit et duis dolor proident.'
        },
        {
          headline: 'Est do esse veniam proident tempor qui adipisicing qui',
          body: 'Minim irure sint veniam nisi aliqua pariatur nostrud quis excepteur reprehenderit. Irure Lorem adipisicing qui consequat non ullamco nulla cillum voluptate mollit et duis dolor proident.'
        },
        {
          headline: 'Est do esse veniam proident tempor qui adipisicing qui',
          body: 'Minim irure sint veniam nisi aliqua pariatur nostrud quis excepteur reprehenderit. Irure Lorem adipisicing qui consequat non ullamco nulla cillum voluptate mollit et duis dolor proident.'
        }
      ],
      stats: [
        {
          headline: '400',
          body: 'Minim irure sint veniam nisi'
        },
        {
          headline: '200',
          body: 'Minim irure sint veniam nisi'
        },
        {
          headline: '4500',
          body: 'Minim irure sint veniam nisi'
        },
        {
          headline: '6 Million',
          body: 'Minim irure sint veniam nisi'
        }
      ],
      logos: [
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        }
      ],
      newsletter: {
        headline: 'Sign up for our newsletter',
        body: 'Minim irure sint veniam nisi aliqua pariatur nostrud quis excepteur reprehenderit.'
      },
      faqs: [
        {
          theme: 'secondary-container',
          question: 'Question Title',
          answer:
            'Nulla nisi est incididunt nisi deserunt laborum. Et adipisicing et mollit minim et consequat. Non magna dolore do anim fugiat excepteur cillum ut veniam voluptate ad. Duis dolore adipisicing officia ipsum mollit. Cupidatat ex anim Lorem.'
        },
        {
          theme: 'primary-container',
          question: 'Question Title',
          answer:
            'Nulla nisi est incididunt nisi deserunt laborum. Et adipisicing et mollit minim et consequat. Non magna dolore do anim fugiat excepteur cillum ut veniam voluptate ad. Duis dolore adipisicing officia ipsum mollit. Cupidatat ex anim Lorem.'
        },
        {
          theme: 'primary',
          question: 'Question Title',
          answer:
            'Nulla nisi est incididunt nisi deserunt laborum. Et adipisicing et mollit minim et consequat. Non magna dolore do anim fugiat excepteur cillum ut veniam voluptate ad. Duis dolore adipisicing officia ipsum mollit. Cupidatat ex anim Lorem.'
        },
        {
          theme: 'tertiary',
          question: 'Question Title',
          answer:
            'Nulla nisi est incididunt nisi deserunt laborum. Et adipisicing et mollit minim et consequat. Non magna dolore do anim fugiat excepteur cillum ut veniam voluptate ad. Duis dolore adipisicing officia ipsum mollit. Cupidatat ex anim Lorem.'
        },
        {
          theme: 'surface',
          question: 'Question Title',
          answer:
            'Nulla nisi est incididunt nisi deserunt laborum. Et adipisicing et mollit minim et consequat. Non magna dolore do anim fugiat excepteur cillum ut veniam voluptate ad. Duis dolore adipisicing officia ipsum mollit. Cupidatat ex anim Lorem.'
        },
        {
          theme: 'tertiary-container',
          question: 'Question Title',
          answer:
            'Nulla nisi est incididunt nisi deserunt laborum. Et adipisicing et mollit minim et consequat. Non magna dolore do anim fugiat excepteur cillum ut veniam voluptate ad. Duis dolore adipisicing officia ipsum mollit. Cupidatat ex anim Lorem.'
        }
      ],
      inputs: [
        { required: true, label: 'Full Name', id: 'full_name', type: 'text' },
        { required: true, label: 'Email', id: 'email', type: 'email' },
        {
          required: true,
          label: 'Describe Your Organization',
          id: 'organization_description',
          type: 'textarea'
        },
        {
          required: true,
          label: 'What Services Are You Interested In?',
          id: 'services',
          type: 'checkbox-cards',
          cards: [
            { value: 'Branding', icon: 'branding' },
            { value: 'Web Design', icon: 'web-design' },
            { value: 'Optimization', icon: 'performance' }
          ]
        },
        {
          required: true,
          label: 'Budget',
          id: 'budget',
          type: 'range',
          min: '500',
          max: '10000',
          step: '500',
          value: '500',
          output: '$'
        }
      ],
      submit: 'Send Application',
      list: [
        {
          icon: 'remove',
          text: "There's too many moving parts to manage"
        },
        {
          icon: 'remove',
          text: 'The costs are too high for your budget'
        },
        {
          icon: 'remove',
          text: 'Unsatisfying results without proper expertise'
        },
        {
          icon: 'remove',
          text: 'You need to support a diverse population'
        },
        {
          icon: 'remove',
          text: 'Your users may not have reliable internet access'
        },
        {
          icon: 'remove',
          text: 'Finding eco-conscious designers is challenging'
        }
      ],
      grid: [
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        },
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        },
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        },
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        },
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        },
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        },
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        },
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        },
        {
          time: {
            label: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          theme: 'primary-container',
          headline: 'Boost your conversion rate',
          body: 'Ullamco Lorem in laborum sint anim sint occaecat Lorem ullamco voluptate id deserunt adipisicing. Laborum duis veniam ullamco deserunt. Dolore enim nisi et occaecat dolor ipsum do deserunt elit qui ea esse esse.'
        }
      ],
      posts: [
        {
          data: {
            date: 'Mar 16, 2020',
            time: '2020-03-16'
          },
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor.'
        }
      ],
      mission:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor.',
      copywrite: '© 2023 Your nonprofit, All rights reserved',
      badge: 'Duis et elit',
      tiles: [
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        },
        {
          src: 'https://via.placeholder.com/150x50',
          alt: 'Placeholder Logo'
        }
      ],
      quote:
        'I am beyond pleased with Dustin’s impeccable service. He was extremely attentive in understanding my business and provided very personalized help. Great designer. I 100% recommend working with him.',
      author: 'Jarod Hoover | CEO of Hoover Honey'
    },
    config: {
      header: {
        links: [
          { label: 'About', url: '/about' },
          {
            label: 'Services',
            url: '/services',
            subLinks: [
              { label: 'Branding', url: '/services/branding' },
              {
                label: 'Web Design',
                url: '/services/web-design'
              },
              { label: 'Optimization', url: '/services/optimization' }
            ]
          },
          { label: 'Portfolio', url: '/portfolio' },
          { label: 'Blog', url: '/blog' }
        ],
        action: { label: 'Start a Project', url: '/contact' }
      },
      bottombar: {
        links: [
          { label: 'Home', url: '/', icon: 'home' },
          { label: 'About', url: '/about', icon: 'about' },
          { label: 'Services', url: '/services', icon: 'web-design' },
          { label: 'Portfolio', url: '/portfolio', icon: 'portfolio' },
          { label: 'Blog', url: '/blog', icon: 'blog' }
        ],
        fab: { label: 'Contact', url: '/contact', icon: 'contact' }
      },
      footer: {
        groups: [
          {
            title: 'Services',
            links: [
              { label: 'Branding', url: '/services/branding' },
              {
                label: 'Web Design',
                url: '/services/web-design'
              },
              { label: 'Optimization', url: '/services/optimization' }
            ]
          },
          {
            title: 'Company',
            links: [
              { label: 'Home', url: '/' },
              { label: 'About', url: '/about' },
              { label: 'Portfolio', url: '/portfolio' },
              { label: 'Blog', url: '/blog' },
              { label: 'Start a Project', url: '/contact' }
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
        links: [
          { label: 'Home', url: '/' },
          { label: 'About', url: '/about' },
          { label: 'Portfolio', url: '/portfolio' },
          { label: 'Blog', url: '/blog' },
          { label: 'Start a Project', url: '/contact' }
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
        ]
      }
    }
  }
}
