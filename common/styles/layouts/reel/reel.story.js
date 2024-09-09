export default {
  title: "Layouts/Reel",
  parameters: {
    status: {
      type: "stable",
    },
  },
};

export const Default = () =>
  `
    <nav class="reel">
      <a href="{about link}">
        <img src="https://placehold.co/600x400" alt="About" />
      </a>
      <a href="{services link}">
        <img src="https://placehold.co/600x400" alt="Services" />
      </a>
      <a href="{portfolio link}">
        <img src="https://placehold.co/600x400" alt="Portfolio" />
      </a>
      <a href="{contact link}">
        <img src="https://placehold.co/600x400" alt="Contact" />
      </a>
    </nav>
  `;

export const SausageLinks = () =>
  `
    <nav class="reel no-bar">
      <a href="{home link}" class="btn"> Link Text </a>
      <a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a
      ><a href="{home link}" class="btn"> Link Text </a>
    </nav>
  `;

Default.parameters = {
  docs: {
    description: {
      story:
        "The Reel custom element is a versatile alternative to carousel/slider components and button-activated menu systems, and is particularly suited for browsing categories of content such as movies, products, news stories, and photographs, with the added flexibility of a customizable scrollbar.",
    },
    source: {
      code: `
<div class="center">
</div>
    `,
    },
  },
};
