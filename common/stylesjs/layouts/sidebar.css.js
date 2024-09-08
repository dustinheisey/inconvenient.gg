import { css } from 'lit'

export const sidebarStyles = css`
  .sidebar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--gap, var(--space-m));
  }

  .sidebar > .fixed {
    flex-grow: 1;

    /* min-inline-size: fit-content; */
  }

  .sidebar > :not(.fixed) {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: calc((100% - var(--gap, var(--space-m))) / 2);
  }

  .sidebar-split-s > .fixed {
    flex-basis: 50ch;
  }

  .sidebar-split > .fixed {
    flex-basis: 45ch;
  }

  .sidebar-split > :not(.fixed) {
    flex-basis: 0;
    flex-grow: 2;
    min-inline-size: 50%;
  }

  .sidebar-equal > * {
    flex-basis: 0;
    flex-grow: 1;
    min-inline-size: calc((100% - var(--gap, var(--space-m))) / 2);
  }
`
