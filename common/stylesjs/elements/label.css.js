import { css } from 'lit'

export const labelStyles = css`
  label {
    font-size: var(--font-size-s);
    font-weight: 400;
    font-family: var(--font-family-body);
    line-height: var(--light-height-body);
    color: var(--color-label-override, var(--color-on-background));

    /* max-inline-size: 66ch; */
    inline-size: 100%;
  }

  .required::after {
    content: '*';
    font-size: var(--font-size-body);
    color: var(--color-label-accent-override, var(--color-secondary));
  }
`
