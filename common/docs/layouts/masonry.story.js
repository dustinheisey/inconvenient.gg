export default {
  title: 'Layouts/Masonry',
  parameters: {
    status: {
      type: 'beta'
    }
  }
}

export const Default = () =>
  `
    <div class="masonry">
      <div>
        <a href="">
          <img src="https://placehold.co/600x400" alt="blog post title" />
          <h3>blog post title</h3>
          <p>
            Elit veniam proident anim irure do. Aute nostrud mollit aute minim
            laborum ut. Nisi commodo laboris cupidatat qui aliqua consequat.
            Nisi est esse quis reprehenderit excepteur exercitation consectetur
            ullamco reprehenderit laborum elit Lorem.Elit veniam proident anim
            irure do. Aute nostrud mollit aute minim laborum ut. Nisi commodo
            laboris cupidatat qui aliqua consequat. Nisi est esse quis
            reprehenderit excepteur exercitation consectetur ullamco
            reprehenderit laborum elit Lorem.
          </p>
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://placehold.co/600x400" alt="blog post title" />
          <h3>blog post title</h3>
          <p>
            Elit veniam proident anim irure do. Aute nostrud mollit aute minim
            laborum ut. Nisi commodo laboris cupidatat qui aliqua consequat.
            Nisi est esse quis reprehenderit excepteur exercitation consectetur
            ullamco reprehenderit laborum elit Lorem. Elit veniam proident anim
            irure do. Aute nostrud mollit aute minim laborum ut. Nisi commodo
            laboris cupidatat qui aliqua consequat. Nisi est esse quis
            reprehenderit excepteur exercitation consectetur ullamco
            reprehenderit laborum elit Lorem.
          </p>
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://placehold.co/600x400" alt="blog post title" />
          <h3>blog post title</h3>
          <p>
            Elit veniam proident anim irure do. Aute nostrud mollit aute minim
            laborum ut. Nisi commodo laboris cupidatat qui aliqua consequat.
            Nisi est esse quis reprehenderit excepteur exercitation consectetur
            ullamco reprehenderit laborum elit Lorem.
          </p>
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://placehold.co/600x400" alt="blog post title" />
          <h3>blog post title</h3>
          <p>
            Elit veniam proident anim irure do. Aute nostrud mollit aute minim
            laborum ut. Nisi commodo laboris cupidatat qui aliqua consequat.
            Nisi est esse quis reprehenderit excepteur exercitation consectetur
            ullamco reprehenderit laborum elit Lorem. Elit veniam proident anim
            irure do. Aute nostrud mollit aute minim laborum ut. Nisi commodo
            laboris cupidatat qui aliqua consequat. Nisi est esse quis
            reprehenderit excepteur exercitation consectetur ullamco
            reprehenderit laborum elit Lorem. Elit veniam proident anim irure
            do. Aute nostrud mollit aute minim laborum ut. Nisi commodo laboris
            cupidatat qui aliqua consequat. Nisi est esse quis reprehenderit
            excepteur exercitation consectetur ullamco reprehenderit laborum
            elit Lorem.
          </p>
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://placehold.co/600x400" alt="blog post title" />
          <h3>blog post title</h3>
          <p>
            Elit veniam proident anim irure do. Aute nostrud mollit aute minim
            laborum ut. Nisi commodo laboris cupidatat qui aliqua consequat.
            Nisi est esse quis reprehenderit excepteur exercitation consectetur
            ullamco reprehenderit laborum elit Lorem.Elit veniam proident anim
            irure do. Aute nostrud mollit aute minim laborum ut. Nisi commodo
            laboris cupidatat qui aliqua consequat. Nisi est esse quis
            reprehenderit excepteur exercitation consectetur ullamco
            reprehenderit laborum elit Lorem.Elit veniam proident anim irure do.
            Aute nostrud mollit aute minim laborum ut. Nisi commodo laboris
            cupidatat qui aliqua consequat. Nisi est esse quis reprehenderit
            excepteur exercitation consectetur ullamco reprehenderit laborum
            elit Lorem.
          </p>
        </a>
      </div>
      <div>
        <a href="">
          <img src="https://placehold.co/600x400" alt="blog post title" />
          <h3>blog post title</h3>
          <p>blog post excerpt</p>
        </a>
      </div>
    </div>
  `

Default.parameters = {
  docs: {
    description: {
      story:
        'The Masonry component is a masonry style grid with customizable number of columns and gaps, suitable for displaying various content such as product galleries, testimonials, blog posts, and portfolio items.'
    },
    source: {
      code: `
<div class="masonry">
  Content
</div>
    `
    }
  }
}
