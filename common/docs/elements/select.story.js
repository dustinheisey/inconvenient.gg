export default {
  title: "Elements/Select",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      description: "Select Variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "simple" },
      },
      options: ["simple", "underline"],
    },
  },
  args: { variant: "simple" },
  parameters: {
    status: {
      type: "stable",
    },
    layout: "centered",
  },
};

export const Select = () =>
  `
    <label for="fruit">Choose a fruit:</label>
    <div class="select">
      <select id="fruit" name="fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
      </select>
      <span class="focus"></span>
    </div>
  `;

export const Underline = () =>
  `
    <label for="fruit">Choose a fruit:</label>
    <div class="select select-underline">
      <select id="fruit" name="fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
      </select>
      <span class="focus"></span>
    </div>
  `;
