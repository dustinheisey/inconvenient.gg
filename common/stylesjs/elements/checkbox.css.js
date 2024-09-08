import { css } from 'lit'

export const checkboxStyles = css`
  .checkbox {
    appearance: none;
    background-color: var(--color-bg-tertiary);
    margin: 0;
    font: inherit;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid var(--color-outline);
    border-radius: var(--radius-s);
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  .checkbox::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--color-primary);
    background-color: CanvasText;
  }

  .checkbox:checked::before {
    transform: scale(1);
  }

  .checkbox:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Card */
  .input-card input[type='checkbox'] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .input-card span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--space-2xs);
    inline-size: 100%;
    block-size: 100%;
    border-radius: var(--radius-m);
    border: 2px solid var(--color-outline-variant);
    background-color: var(--color-surface);
    box-shadow: var(--shadow-xs);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
    padding: var(--space-2xs);
  }

  .input-card input[type='checkbox']:is(:hover, :focus) + span {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-xs);
    box-shadow:
      0 5px 10px var(--color-primary-container),
      0 0 0 4px var(--color-primary-container);
  }

  .input-card input[type='checkbox']:checked + span {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
  }

  .input-card span svg {
    width: 3rem;
    height: 3rem;
  }
`
