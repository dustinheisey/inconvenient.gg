import { css } from 'lit'

export const btnStyles = css`
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3xs);
    inline-size: auto;
    padding: var(--space-2xs) var(--space-s);
    font-family: var(--font-family-body);
    font-weight: 400;
    letter-spacing: var(--letter-spacing-body);
    line-height: var(--line-height-body);
    font-size: var(--font-size-s);
    cursor: pointer;
    border-radius: var(--radius-pill);
    box-shadow: var(--shadow-xs);
    transition:
      background-color 0.3s,
      box-shadow 0.3s,
      transform 0.3s;

    --color-btn: var(--color-primary);
    --color-on-btn: var(--color-on-primary);

    /* Primary */
    color: var(--color-on-btn);
    background-color: var(--color-btn);
    border: 2px solid var(--color-btn);

    &:focus-visible {
      --color-outline: var(--color-primary);

      outline: 3px solid var(--color-outline);
      outline-offset: 3px;
    }

    &:active {
      transform: scale(0.98);
    }

    &:hover {
      box-shadow: var(--shadow-m);
      transform: translate3d(0, -2px, 0);
    }

    &.secondary {
      --color-outline: var(--color-primary-container);
      --color-btn: var(--color-primary-container);
      --color-on-btn: var(--color-primary);
    }

    &.s {
      padding: var(--space-3xs) var(--space-xs);
    }

    &.l {
      padding: var(--space-2xs) var(--space-l);
    }

    &.circular {
      inline-size: 50px;
      block-size: 50px;
      padding: 0;

      &.s {
        inline-size: 44px;
        block-size: 44px;
        padding: 0;
      }

      &.l {
        inline-size: 56px;
        block-size: 56px;
        padding: 0;
      }
    }
  }
`
