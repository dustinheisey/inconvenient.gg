/* ? The List  */

/* 
- lists with disk/decimal markers flex stack with gap
- list with disk/decimal markers flex stack gap 2 column layout that stacks to one when needed
- list with svg markers flex stack gap 2 column layout that stacks to one when needed
- list with svg markers flex stack gap
*/

/* Reset */
import { css } from 'lit'

export const listStyles = css`
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: var(--font-family-body);
  }

  li {
    max-inline-size: 66ch;
    font-size: var(--font-size-body);
  }

  /* List */
  .list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--gap, var(--space-xs));
  }

  /* ol,
ul {
  columns: 2;
  column-gap: var(--gutter);
}

li {
  column-span: all;
}

li:nth-last-child(n + 3),
li:nth-last-child(n + 3) ~ * {
  column-span: none;
} */

  .list {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(var(--min-inline-size, 15ch), calc((100% - 1 * var(--grid-gap)) / 2)), 1fr)
    );

    --grid-gap: var(--gap, var(--space-xs));

    gap: var(--grid-gap);
  }

  .list li {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    gap: var(--space-3xs);
    min-inline-size: 15ch;
  }

  /* Modifiers */
  ul.list-marker {
    list-style-type: disk;
  }

  ol.list-marker {
    list-style-type: decimal;
  }
`
