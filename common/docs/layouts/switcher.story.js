export default {
  title: "Layouts/Switcher",
  parameters: {
    status: {
      type: "stable",
    },
    layout: "centered",
  },
  argTypes: {
    gap: {
      control: {
        type: "select",
      },
      options: ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
    },
  },
  args: {
    gap: "xs",
  },
};

export const Default = ({ gap }) =>
  `
    <div class="switcher switch-tablet gap-${gap}">
      <div class="product prose">
        <img src="https://placehold.co/600x400" alt="Product Name" />
        <h3>Product Name</h3>
        <p>
          Quis elit dolor irure nulla magna elit deserunt esse. Laborum cillum
          sunt laborum aliquip duis consequat enim aliquip ex officia dolore
          minim. Velit ea ex eu aliqua laborum minim culpa laborum nisi labore.
        </p>
        <button class="btn">Add to Card</button>
      </div>
      <div class="product prose">
        <img src="https://placehold.co/600x400" alt="Product Name" />
        <h3>Product Name</h3>
        <p>
          Eiusmod incididunt voluptate cillum aliqua id mollit aliqua. Cillum
          qui culpa amet laborum id deserunt laboris excepteur in ullamco mollit
          eiusmod est adipisicing. Ut et irure esse labore ex mollit cupidatat
          elit enim in veniam culpa.
        </p>
        <button class="btn">Add to Card</button>
      </div>
      <div class="product prose">
        <img src="https://placehold.co/600x400" alt="Product Name" />
        <h3>Product Name</h3>
        <p>
          Eiusmod incididunt voluptate cillum aliqua id mollit aliqua. Cillum
          qui culpa amet laborum id deserunt laboris excepteur in ullamco mollit
          eiusmod est adipisicing. Ut et irure esse labore ex mollit cupidatat
          elit enim in veniam culpa.
        </p>
        <button class="btn">Add to Card</button>
      </div>
    </div>
  `;
