export default {
  title: 'Layouts/Cover',
  parameters: {
    status: {
      type: 'stable'
    }
  }
}

export const Simple = () =>
  `
    <div class="cover cover-nav">
      <header class="center">
        <nav>
          <ul class="cluster">
            <li><a href="#" class="link link-navigation">Link 1</a></li>
            <li><a href="#" class="link link-navigation">Link 2</a></li>
            <li><a href="#" class="link link-navigation">Link 3</a></li>
            <li><a href="#" class="link link-navigation">Link 4</a></li>
            <li><a href="#" class="link link-navigation">Link 5</a></li>
          </ul>
        </nav>
      </header>
      <div class="principle center prose">
        <h1 class="hero-headline">Hero Headline</h1>
        <p>
          Enim consequat nulla cillum amet enim proident exercitation et dolore
          sint consectetur aliqua. Pariatur consequat incididunt dolore pariatur
          elit elit cupidatat reprehenderit ea nisi. Id officia deserunt qui
          magna. Occaecat eu qui qui tempor in nisi elit sit in consequat. Aute
          ut adipisicing veniam ad elit non officia eu.
        </p>
      </div>
      <p class="center">Footer Text</p>
    </div>
  `

export const SplitScreen = () =>
  `
    <div class="cover cover-nav">
      <nav class="cluster justify-between">
        <a href="#" class="logo">
          <img src="https://placehold.co/100x100" alt="placeholder" />
        </a>
        <div class="cluster">
          <a href="#" class="link link-navigation">Link</a>
          <a href="#" class="link link-navigation">Link</a>
          <a href="#" class="link link-navigation">Link</a>
        </div>
      </nav>
      <div class="sidebar sidebar-split gap-m">
        <div class="prose fixed">
          <h1 class="hero-headline">landing page title</h1>
          <p>
            Voluptate ipsum commodo culpa et nisi occaecat esse ut. Non mollit
            sunt cillum exercitation anim dolor voluptate. Sunt in eu
            exercitation pariatur elit. Quis magna enim ut id irure est. Magna
            laborum non fugiat aute est quis duis incididunt. Ad sint eiusmod
            sint tempor esse.
          </p>
          <button class="btn">Call to Action</button>
        </div>
        <div class="frame photo">
          <img src="https://placehold.co/400x600" alt="placeholder" />
        </div>
      </div>
    </div>
  `

export const Background = () =>
  `
    <div class="bg-img">
      <img
        src="https://generative-placeholders.glitch.me/image?width=600&height=300"
        alt="placeholder"
      />
      <div class="cover cover-nav">
        <header>
          <nav>
            <ul class="cluster">
              <li><a href="#" class="link link-navigation">Link 1</a></li>
              <li><a href="#" class="link link-navigation">Link 2</a></li>
              <li><a href="#" class="link link-navigation">Link 3</a></li>
              <li><a href="#" class="link link-navigation">Link 4</a></li>
              <li><a href="#" class="link link-navigation">Link 5</a></li>
            </ul>
          </nav>
        </header>
        <div class="principle prose">
          <h1 class="hero-headline">Hero Headline</h1>
          <p>
            Enim consequat nulla cillum amet enim proident exercitation et
            dolore sint consectetur aliqua. Pariatur consequat incididunt dolore
            pariatur elit elit cupidatat reprehenderit ea nisi. Id officia
            deserunt qui magna. Occaecat eu qui qui tempor in nisi elit sit in
            consequat. Aute ut adipisicing veniam ad elit non officia eu.
          </p>
        </div>
        <p>Footer Text</p>
      </div>
    </div>
  `
