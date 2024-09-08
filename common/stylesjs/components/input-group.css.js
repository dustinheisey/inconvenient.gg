import { css } from 'lit'

export const inputGroupStyles = css`
  .input-group {
    display: flex;
    border-radius: var(--radius-pill);
    align-items: stretch !important;
    overflow: hidden;
  }

  .input-group > input,
  .input-group > button {
    border-radius: 0;
    margin: 0;
  }

  /* .input-group > input {
  border-radius: var(--radius-s) var(--radius-s) 0 0;
}

.input-group > button {
  border-radius: 0 0 var(--radius-s) var(--radius-s);
} */

  @media (--tablet-portrait-up) {
    .input-group {
      flex-wrap: nowrap;
    }

    /* .input-group > input {
    border-radius: var(--radius-s) 0 0 var(--radius-s);
    border-right: none;
    margin: 0 !important;
  }

  .input-group > button {
    border-radius: 0 var(--radius-s) var(--radius-s) 0;
    border-left: none;
  } */
  }
`
