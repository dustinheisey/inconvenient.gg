export default {
  title: "Elements/Formatted",
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: "select",
      description: "Text Tag",
      table: {
        type: { summary: "string" },
      },
      options: [
        "Del",
        "Ins",
        "Abbr",
        "Bdi",
        "Bdo",
        "Mark",
        "S",
        "U",
        "Wbr",
        "code",
        "pre",
        "math",
      ],
    },
  },
  parameters: {
    status: {
      type: "beta",
    },
    layout: "centered",
  },
};

function getTag(tag, text) {
  switch (tag) {
    case "Del":
      return `<del>${text}</del>`;
    case "Ins":
      return `<ins>${text}</ins>`;
    case "Abbr":
      return `<abbr title="World Health Organization">${text}</abbr>`;
    case "Bdi":
      return `<bdi>${text}</bdi>`;
    case "Bdo":
      return `<bdo dir="rtl">${text}</bdo>`;
    case "Mark":
      return `<mark>${text}</mark>`;
    case "S":
      return `<s>${text}</s>`;
    case "U":
      return `<u>${text}</u>`;
    case "Wbr":
      return `<wbr>${text}</wbr>`;
    case "code":
      return `<code>${text}</code>`;
    case "pre":
      return `<pre>${text}</pre>`;
    case "math":
      return `<math>${text}</math>`;
    default:
      return `<del>${text}</del>`;
  }
}

export const Default = {
  render: ({ tag }) =>
    getTag(
      tag,
      "Ad Lorem et ut do amet laborum reprehenderit ullamco fugiat magna. Non nulla anim sunt Lorem est tempor.",
    ),
};

export const Del = () => " <p>John <del>Doe</del> was born in 1990.</p> ";

export const Ins = () => " <p>John <ins>Smith</ins> was born in 1990.</p> ";

export const Abbr = () => `
  <p>
    The <abbr title="World Health Organization">WHO</abbr> is a specialized
    agency of the United Nations.
  </p>
`;

export const Bdi = () => `
  <p><bdi>Isolated Text</bdi> surrounded by normal text.</p>
`;

export const Bdo = () => ' <p><bdo dir="rtl">RTL Text</bdo></p> ';

export const Br = () => " <p>Line 1<br />Line 2</p> ";

export const Cite = () => " <p><cite>Book Title</cite> by Author Name</p> ";

export const Data = () => `
  <p>
    The boiling point of water is
    <data value="100">100 degrees Celsius</data>.
  </p>
`;

export const Dfn = () => `
  <p>The <dfn>HTML</dfn> stands for Hypertext Markup Language.</p>
`;

export const Em = () => " <p><em>Emphasized Text</em></p> ";

export const I = () => " <p><i>Italicized Text</i></p> ";

export const Kbd = () => `
  <p>To save a file, press <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
`;

export const Mark = () => `
  <p>Search for <mark>keywords</mark> on this page.</p>
`;

export const Q = () => " <p><q>Quoted Text</q></p> ";

export const Rp = () => " <p>The price is 100<rp>(</rp>$<rp>)</rp>.</p> ";

export const Rt = () => `
  <p>
    The <ruby>日本<rt>Nihon</rt></ruby> is a country in East Asia.
  </p>
`;

export const Ruby = () => `
  <p>
    The <ruby>日本<rt>Nihon</rt></ruby> is a country in East Asia.
  </p>
`;

export const S = () => " <p><s>Strikethrough Text</s></p> ";

export const Samp = () => `
  <p>The output of the program is <samp>Hello, World!</samp></p>
`;

export const Strong = () => " <p><strong>Strong Text</strong></p> ";

export const Sub = () => `
  <p>The chemical formula for water is H<sub>2</sub>O.</p>
`;

export const Sup = () => " <p>The square of 2 is 2<sup>2</sup>.</p> ";

export const Time = () => `
  <p>The current time is <time>9:00 AM</time>.</p>
`;

export const U = () => " <p><u>Underlined Text</u></p> ";

export const Var = () => " <p>The value of x is <var>x</var>.</p> ";

export const Wbr = () => ` <div id="example-paragraphs">
  <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
  <p>Fernstraßen<wbr />bau<wbr />privat<wbr />finanzierungs<wbr />gesetz</p>
  <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
</div>`;

export const Code = () => `
  <code>const example = 'This is a code snippet';</code>
`;

export const Pre = () => `
  <pre>
const hello = () => {
  console.log("Hello, world!");
}

hello();
  </pre
  >
`;

export const Math = () => `
  <p>
    The quadratic formula is:
    <math>
      <mrow>
        <mi>x</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mo>-</mo>
            <mi>b</mi>
            <mo>&plusmn;</mo>
            <msqrt>
              <mrow>
                <msup><mi>b</mi><mn>2</mn></msup>
                <mo>-</mo>
                <mrow>
                  <mn>4</mn>
                  <mo>&times;</mo>
                  <mi>a</mi>
                  <mo>&times;</mo>
                  <mi>c</mi>
                </mrow>
              </mrow>
            </msqrt>
          </mrow>
          <mrow>
            <mn>2</mn>
            <mo>&times;</mo>
            <mi>a</mi>
          </mrow>
        </mfrac>
      </mrow>
    </math>
  </p>
`;
