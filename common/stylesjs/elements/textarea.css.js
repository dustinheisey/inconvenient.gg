import { css } from 'lit'

export const textareaStyles = css`
  textarea {
    resize: vertical;
    font-family: var(--font-family-body);
    font-weight: 400;
    background-color: var(--color-surface);
    border: 1px solid var(--color-outline-variant);
    padding: 0.375rem 0.75rem;
    display: block;
    inline-size: 100%;

    /* max-inline-size: 66ch; */
    border-radius: 0.375rem;
    color: var(--color-on-background);
    box-shadow: none;
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-block-start: var(--space-2xs);
  }

  textarea:focus {
    border-color: transparent;
    outline: 2px solid var(--color-primary);
  }

  .textarea-underline {
    border-radius: 0;
    display: block;
    max-inline-size: 100%;
    padding: 0 var(--space-2xs);
    border: none;
    border-block-end: 2px solid var(--color-outline);
  }

  .textarea-underline:focus {
    outline: none;
    border-color: var(--color-on-background);
  }
`
