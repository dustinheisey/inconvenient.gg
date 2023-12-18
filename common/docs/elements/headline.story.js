export default {
  title: 'Elements/Headlines',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      description: 'Headline Variant',
      options: ['hero', 'page', 'region', 'section', 'title']
    }
  },
  args: { variant: 'hero' },
  parameters: {
    status: {
      type: 'stable'
    },
    layout: 'centered'
  }
}

export const Default = ({ variant }) => ` <h1 class="${variant}-headline">Welcome to our website</h1> `

export const HeroHeadline = () => `
  <h1 class="hero-headline">Welcome to our website</h1>
`

HeroHeadline.parameters = {
  docs: {
    description: {
      story:
        "This is the largest and most prominent headline on a page, and is typically used to introduce the main message or purpose of the page. It should be used sparingly, usually only once per page, and should capture the user's attention and encourage them to engage with the content."
    }
  }
}

export const PageHeadline = () => ' <h1 class="page-headline">About Us</h1> '

PageHeadline.parameters = {
  docs: {
    description: {
      story:
        "This is the main headline for a page, and is typically used to provide a brief and clear summary of the page's purpose or content. It should be concise and easy to understand, and should give users a clear idea of what they can expect to find on the page."
    }
  }
}

export const RegionHeadline = () => ' <h2 class="region-headline">Our Services</h2> '

RegionHeadline.parameters = {
  docs: {
    description: {
      story:
        'This is a subheading used to introduce a specific section or content area on a page. It should be used to break up large blocks of text and make it easier for users to scan and understand the content.'
    }
  }
}

export const SectionHeadline = () => ' <h3 class="section-headline">Web Development</h3> '

SectionHeadline.parameters = {
  docs: {
    description: {
      story:
        "This is a smaller subheading used within a region or content area to introduce a more specific subsection of content. It should be used to further break up content and help users navigate to the specific information they're looking for."
    }
  }
}

export const TitleHeadline = () => ' <h4 class="title-headline">Our Team</h4> '

TitleHeadline.parameters = {
  docs: {
    description: {
      story:
        'This is the smallest and least prominent headline, and is typically used to label or identify specific pieces of content, such as a blog post or image. It should be used sparingly and only when necessary to provide context for the content.'
    }
  }
}
