import { css } from 'lit'

export const selectStyles = css`
  select {
    font-size: var(--font-size-s);
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;

    /* z-index: 1; */
    outline: none;
    cursor: pointer;
    color: var(--color-on-background);
  }

  select::-ms-expand {
    display: none;
  }

  .select {
    display: grid;
    grid-template-areas: 'select';
    align-items: center;
    position: relative;
    min-width: 15ch;
    max-width: 25ch;
    border: 1px solid var(--color-outline);
    border-radius: var(--radius-s);
    padding: var(--space-2xs) var(--space-xs);
    cursor: pointer;
    background-color: transparent;
  }

  .select-underline {
    border: none;
    border-block-end: 2px solid var(--color-outline);
    border-radius: var(--radius-s) var(--radius-s) 0 0;
  }

  .select select,
  .select::after {
    grid-area: select;
  }

  .select::after {
    content: '';
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--color-on-background);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  select:focus + .focus {
    position: absolute;
    inset: -1px;
    border: 2px solid var(--color-primary);
    border-radius: inherit;
  }

  .select-underline > select:focus + .focus {
    border: none;
    border-block-end: 2px solid var(--color-on-background);
  }

  label + .select {
    margin-block-start: var(--space-2xs);
  }
`
