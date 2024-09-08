import { css } from 'lit'

export const gridStyles = css`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));

    --grid-gap: var(--gap, var(--space-m));

    gap: var(--grid-gap);
    place-items: stretch;
    place-content: stretch;
  }

  .row-gap-xl {
    row-gap: var(--space-xl);
  }

  .grid > * {
    margin: 0;
  }

  .grid-2 {
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(var(--min-inline-size, 10rem), calc((100% - 1 * var(--grid-gap)) / 2)), 1fr)
    );
  }

  .grid-3 {
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(var(--min-inline-size, 9rem), calc((100% - 2 * var(--grid-gap)) / 3)), 1fr)
    );
  }

  .grid-4 {
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(var(--min-inline-size, 6rem), calc((100% - 3 * var(--grid-gap)) / 4)), 1fr)
    );
  }

  .grid-5 {
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(var(--min-inline-size, 5rem), calc((100% - 4 * var(--grid-gap)) / 5)), 1fr)
    );
  }

  .grid-6 {
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(var(--min-inline-size, 4rem), calc((100% - 5 * var(--grid-gap)) / 6)), 1fr)
    );
  }

  .span-2 {
    grid-column: span 2;
  }

  .span-3 {
    grid-column: span 3;
  }

  .span-4 {
    grid-column: span 4;
  }

  .span-5 {
    grid-column: span 5;
  }

  .span-6 {
    grid-column: span 6;
  }
`
