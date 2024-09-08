import { css } from 'lit'

export const inlineStyles = css`
  .inline {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--gap, var(--space-s));
    justify-content: flex-start;
    align-items: center;
  }

  .inline-header {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--space-2xs);
    align-items: flex-start;
    margin-block-start: var(--space-2xl);

    & > a {
      order: 1;
    }

    & > :is(h1, h2, h3, h4) {
      order: 2;
    }
  }

  @media (--tablet-portrait-up) {
    .inline-header {
      flex-direction: row;
      margin-inline-start: calc(var(--space-m) * -1);
    }
  }

  .inline-header > :first-child {
    margin-inline-end: var(--space-3xs);
  }

  .inline-start {
    align-items: flex-start;
  }

  .inline-end {
    align-items: flex-end;
  }

  .inline-center {
    align-items: center;
  }

  .inline-baseline {
    align-items: baseline;
  }
`
