export default {
  title: "Elements/Checkbox",
  tags: ["autodocs"],
  parameters: {
    status: {
      type: "beta",
    },
    layout: "centered",
  },
};

export const Checkbox = () => `
  <label class="checkbox-label">
    <input class="checkbox" type="checkbox" name="checkbox" />
    Checkbox
  </label>
`;

export const CheckboxCard = () => `
  <label class="input-card">
    <input type="checkbox" />
    <span>
      <svg focusable="false">
        <use xlink:href="src/elements/text/icon/icons.svg#edit-note-2"></use>
      </svg>
      Web Design & Development
    </span>
  </label>
`;
