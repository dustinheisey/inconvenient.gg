/* ? The Switcher - More flexible version of media queries */
import { css } from 'lit'

export const switcherStyles = css`
  .switcher {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap, var(--space-m));
  }

  .switcher > * {
    flex-grow: 1;
    flex-basis: calc((var(--threshold) - (100% - var(--gap, var(--space-m)))) * 999);
    max-inline-size: 100%;
  }

  .switch-phone {
    --threshold: 128px;
  }

  .switch-tablet {
    --threshold: 768px;
  }

  .switch-desktop {
    --threshold: 1024px;
  }
`
