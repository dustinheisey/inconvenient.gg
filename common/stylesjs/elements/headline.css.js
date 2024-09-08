import { css } from 'lit'

export const headlineStyles = css`
  h1,
  h2,
  h3,
  h4 {
    color: var(--color-headline-override, var(--color-on-surface));
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
  }

  h1 {
    font-size: var(--font-size-3xl);
    font-family: var(--font-family-headline);
    font-weight: var(--font-weight-headline);
    line-height: var(--line-height-headline);
    letter-spacing: var(--letter-spacing-headline);
    margin: 0;
  }

  h2 {
    font-size: var(--font-size-2xl);
    font-family: var(--font-family-headline);
    font-weight: var(--font-weight-headline);
    line-height: var(--line-height-headline);
    letter-spacing: var(--letter-spacing-headline);
    margin: 0;
  }

  h3 {
    font-size: var(--font-size-xl);
    font-family: var(--font-family-headline);
    font-weight: var(--font-weight-headline);
    line-height: var(--line-height-headline);
    letter-spacing: var(--letter-spacing-headline);
    margin: 0;
  }

  h4 {
    font-size: var(--font-size-m);
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-headline);
    line-height: var(--line-height-body);
    letter-spacing: var(--letter-spacing-body);
    margin: 0;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2xs);
  }

  .hero-headline {
    font-size: var(--font-size-4xl) !important;
    font-family: var(--font-family-headline) !important;
    font-weight: var(--font-weight-headline) !important;
    line-height: var(--line-height-headline) !important;
    letter-spacing: var(--letter-spacing-headline) !important;
  }

  .page-headline {
    font-size: var(--font-size-3xl) !important;
    font-family: var(--font-family-headline) !important;
    font-weight: var(--font-weight-headline) !important;
    line-height: var(--line-height-headline) !important;
    letter-spacing: var(--letter-spacing-headline) !important;
  }

  .region-headline {
    font-size: var(--font-size-2xl) !important;
    font-family: var(--font-family-headline) !important;
    font-weight: var(--font-weight-headline) !important;
    line-height: var(--line-height-headline) !important;
    letter-spacing: var(--letter-spacing-headline) !important;
  }

  .section-headline {
    font-size: var(--font-size-xl) !important;
    font-family: var(--font-family-headline) !important;
    font-weight: var(--font-weight-headline) !important;
    line-height: var(--line-height-headline) !important;
    letter-spacing: var(--letter-spacing-headline) !important;
  }

  .title-headline {
    font-size: var(--font-size-m) !important;
    font-family: var(--font-family-body) !important;
    font-weight: var(--font-weight-headline) !important;
    line-height: var(--line-height-body) !important;
    letter-spacing: var(--letter-spacing-body) !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: var(--space-2xs) !important;
  }
`
