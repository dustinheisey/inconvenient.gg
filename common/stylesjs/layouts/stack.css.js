/* ? The Stack - Even veritcal space, lists */
import { css } from 'lit'

export const stackStyles = css`
  .stack {
    display: flex;
    flex-direction: column;
  }

  .stack > * {
    margin-block: 0;
  }

  .stack > * + * {
    margin-block-start: var(--gap, var(--space-xl));
  }

  .stack > :only-child {
    margin-block: auto;
  }

  .stack > .split {
    margin-block-end: auto;
  }

  .stack > .auto {
    margin-block: auto;
  }

  .stack-bg {
    background-color: var(--color-background);
    border-radius: var(--radius-s);
    padding: var(--space-2xs);
  }
`
