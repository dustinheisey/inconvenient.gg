import { css } from 'lit'

export const fieldsetStyles = css`
  fieldset.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: var(--space-xs);
    margin-left: auto;
    margin-right: auto;
    user-select: none;
    border: none;
    margin: 0;
    padding: 0;
  }

  fieldset.cards > label {
    flex: 1;
    aspect-ratio: 1/1;
  }

  fieldset.cards > legend {
    font-family: var(--font-family-body);
    text-align: start;
    padding: 0;
    margin: 0;
    margin-block-end: var(--space-xs);
  }
`
