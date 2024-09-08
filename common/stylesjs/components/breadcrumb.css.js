import { css } from 'lit'

export const breadcrumbStyles = css`
  nav.breadcrumb ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  .breadcrumb li + li::before {
    display: inline-block;
    transform: rotate(15deg);
    border-right: 0.1em solid var(--color-primary);
    height: 0.8em;
    margin-inline-end: var(--space-xs);
    content: '';
  }

  nav.breadcrumb [aria-current='page'] {
    color: var(--color-primary);
    font-weight: 600;
    text-decoration: none;
  }
`
