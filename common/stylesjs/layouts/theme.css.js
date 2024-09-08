/* [class*="theme"] {
  padding: var(--space-m);
  border-radius: var(--radius-l);
  box-shadow: var(--shadow-l);
} */

import { css } from 'lit'

export const themeStyles = css`
  .theme-background {
    background-color: var(--color-background);
    color: var(--color-on-background);
  }

  .theme-dark {
    background-color: var(--color-on-background-light);
    color: var(--color-background-light);

    --color-primary: var(--color-primary-dark);
    --color-on-primary: var(--color-on-primary-dark);
    --color-secondary: var(--color-secondary-dark);
    --color-on-secondary: var(--color-on-secondary-dark);
    --color-tertiary: var(--color-tertiary-dark);
    --color-on-tertiary: var(--color-on-tertiary-dark);
    --color-primary-container: var(--color-primary-container-dark);
    --color-on-primary-container: var(--color-on-primary-container-dark);
    --color-secondary-container: var(--color-secondary-container-dark);
    --color-on-secondary-container: var(--color-on-secondary-container-dark);
    --color-tertiary-container: var(--color-tertiary-container-dark);
    --color-on-tertiary-container: var(--color-on-tertiary-container-dark);
    --color-background: var(--color-background-dark);
    --color-on-background: var(--color-on-background-dark);
    --color-surface: var(--color-surface-dark);
    --color-on-surface: var(--color-on-surface-dark);
    --color-outline: var(--color-outline-dark);
    --color-outline-variant: var(--color-outline-variant-dark);
  }

  .theme-surface {
    background-color: var(--color-surface);
    color: var(--color-on-surface);
  }

  .theme-surface-inverse {
    background-color: var(--color-on-surface-light);
    color: var(--color-surface-light);

    --color-primary: var(--color-primary-dark);
    --color-on-primary: var(--color-on-primary-dark);
    --color-secondary: var(--color-secondary-dark);
    --color-on-secondary: var(--color-on-secondary-dark);
    --color-tertiary: var(--color-tertiary-dark);
    --color-on-tertiary: var(--color-on-tertiary-dark);
    --color-primary-container: var(--color-primary-container-dark);
    --color-on-primary-container: var(--color-on-primary-container-dark);
    --color-secondary-container: var(--color-secondary-container-dark);
    --color-on-secondary-container: var(--color-on-secondary-container-dark);
    --color-tertiary-container: var(--color-tertiary-container-dark);
    --color-on-tertiary-container: var(--color-on-tertiary-container-dark);
    --color-background: var(--color-background-dark);
    --color-on-background: var(--color-on-background-dark);
    --color-surface: var(--color-surface-dark);
    --color-on-surface: var(--color-on-surface-dark);
    --color-outline: var(--color-outline-dark);
    --color-outline-variant: var(--color-outline-variant-dark);
  }

  .theme-card {
    background-color: var(--color-primary);
    color: var(--color-on-primary);

    --color-headline-override: var(--color-on-primary);
    --color-on-background: var(--color-on-primary);
  }

  .theme-clay {
    background-color: #b3876b;
    color: var(--color-on-primary-light);

    --color-headline-override: var(--color-on-primary-light);
  }

  .theme-olive {
    background-color: #8d9a76;
    color: var(--color-on-primary-light);

    --color-headline-override: var(--color-on-primary-light);
  }

  .theme-beige {
    background-color: #d3c4a3;
    color: var(--color-on-background-light);

    --color-headline-override: var(--color-on-background-light);
    --color-p-override: var(--color-on-background-light);
  }

  .theme-rust {
    background-color: #a55a4e;
    color: var(--color-on-primary-light);

    --color-headline-override: var(--color-on-primary-light);
  }

  .theme-slate {
    background-color: #767f8b;
    color: var(--color-on-primary-light);

    --color-headline-override: var(--color-on-primary-light);
  }

  .theme-primary {
    background-color: var(--color-primary-light);
    color: var(--color-on-primary-light);

    --color-primary: var(--color-on-primary-light);
    --color-on-primary: var(--color-primary-light);
    --color-primary-container: var(--color-on-primary-light);
    --color-on-primary-container: var(--color-primary-light);
    --color-secondary: var(--color-on-primary-light);
    --color-on-secondary: var(--color-on-primary-light);
    --color-secondary-container: var(--color-on-primary-light);
    --color-on-secondary-container: var(--color-secondary-light);
    --color-tertiary: var(--color-on-primary-light);
    --color-on-tertiary: var(--color-on-primary-light);
    --color-tertiary-container: var(--color-on-primary-light);
    --color-on-tertiary-container: var(--color-tertiary-light);
    --color-outline: var(--color-on-primary-light);
    --color-outline-variant: var(--color-on-primary-light);
    --color-background: var(--color-primary-light);
    --color-on-background: var(--color-on-primary-light);
    --color-surface: var(--color-primary-light);
    --color-on-surface: var(--color-on-primary-light);

    .btn.secondary {
      background: transparent;
      color: var(--color-on-primary-light);
      border-color: var(--color-on-primary-light);
    }
  }

  .theme-primary-container {
    background-color: var(--color-primary-container);
    color: var(--color-on-primary-container);

    --color-badge-primary: var(--color-primary);
    --color-on-badge-primary: var(--color-on-primary);
    --color-secondary-container: var(--color-secondary);
    --color-on-secondary-container: var(--color-on-secondary);
    --color-tertiary-container: var(--color-tertiary);
    --color-on-tertiary-container: var(--color-on-tertiary);
    --color-outline: var(--color-on-primary-container);
    --color-outline-variant: var(--color-on-primary-container);
    --color-background: var(--color-primary-container);
    --color-on-background: var(--color-on-primary-container);
    --color-surface: var(--color-primary-container);
    --color-on-surface: var(--color-on-primary-container);
  }

  .theme-secondary {
    background-color: var(--color-secondary-light);
    color: var(--color-on-secondary-light);

    --color-primary: var(--color-on-secondary-light);
    --color-on-primary: var(--color-secondary-light);
    --color-primary-container: var(--color-on-secondary-light);
    --color-on-primary-container: var(--color-primary-light);
    --color-secondary-container: var(--color-on-secondary-light);
    --color-on-secondary-container: var(--color-secondary-light);
    --color-secondary: var(--color-on-secondary-light);
    --color-on-secondary: var(--color-on-secondary-light);
    --color-secondary-container: var(--color-on-secondary-light);
    --color-on-secondary-container: var(--color-secondary-light);
    --color-tertiary: var(--color-on-secondary-light);
    --color-on-tertiary: var(--color-on-secondary-light);
    --color-tertiary-container: var(--color-on-secondary-light);
    --color-on-tertiary-container: var(--color-tertiary-light);
    --color-outline: var(--color-on-secondary-light);
    --color-outline-variant: var(--color-on-secondary-light);
    --color-background: var(--color-secondary-light);
    --color-on-background: var(--color-on-secondary-light);
    --color-surface: var(--color-secondary-light);
    --color-on-surface: var(--color-on-secondary-light);
  }

  .theme-secondary-container {
    background-color: var(--color-secondary-container);
    color: var(--color-on-secondary-container);

    --color-badge-secondary: var(--color-secondary);
    --color-on-badge-secondary: var(--color-on-secondary);
    --color-primary: var(--color-secondary);
    --color-on-primary: var(--color-on-secondary);
    --color-primary-container: var(--color-primary);
    --color-on-primary-container: var(--color-on-primary);
    --color-tertiary-container: var(--color-tertiary);
    --color-on-tertiary-container: var(--color-on-tertiary);
    --color-outline: var(--color-on-secondary-container);
    --color-outline-variant: var(--color-on-secondary-container);
    --color-background: var(--color-secondary-container);
    --color-on-background: var(--color-on-secondary-container);
    --color-surface: var(--color-secondary-container);
    --color-on-surface: var(--color-on-secondary-container);
  }

  .theme-tertiary {
    background-color: var(--color-tertiary-light);
    color: var(--color-on-tertiary-light);

    --color-primary: var(--color-on-tertiary-light);
    --color-on-primary: var(--color-tertiary-light);
    --color-primary-container: var(--color-on-tertiary-light);
    --color-on-primary-container: var(--color-primary-light);
    --color-tertiary: var(--color-on-tertiary-light);
    --color-on-tertiary: var(--color-tertiary-light);
    --color-tertiary-container: var(--color-on-tertiary-light);
    --color-on-tertiary-container: var(--color-tertiary-light);
    --color-secondary: var(--color-on-tertiary-light);
    --color-on-secondary: var(--color-on-tertiary-light);
    --color-secondary-container: var(--color-on-tertiary-light);
    --color-on-secondary-container: var(--color-secondary-light);
    --color-tertiary: var(--color-on-tertiary-light);
    --color-on-tertiary: var(--color-on-tertiary-light);
    --color-tertiary-container: var(--color-on-tertiary-light);
    --color-on-tertiary-container: var(--color-tertiary-light);
    --color-outline: var(--color-on-tertiary-light);
    --color-outline-variant: var(--color-on-tertiary-light);
    --color-background: var(--color-tertiary-light);
    --color-on-background: var(--color-on-tertiary-light);
    --color-surface: var(--color-tertiary-light);
    --color-on-surface: var(--color-on-tertiary-light);
  }

  .theme-tertiary-container {
    background-color: var(--color-tertiary-container);
    color: var(--color-on-tertiary-container);

    --color-badge-tertiary: var(--color-tertiary);
    --color-on-badge-tertiary: var(--color-on-tertiary);
    --color-primary: var(--color-tertiary);
    --color-on-primary: var(--color-on-tertiary);
    --color-primary-container: var(--color-primary);
    --color-on-primary-container: var(--color-on-primary);
    --color-secondary-container: var(--color-secondary);
    --color-on-secondary-container: var(--color-on-secondary);
    --color-outline: var(--color-on-tertiary-container);
    --color-outline-variant: var(--color-on-tertiary-container);
    --color-background: var(--color-tertiary-container);
    --color-on-background: var(--color-on-tertiary-container);
    --color-surface: var(--color-tertiary-container);
    --color-on-surface: var(--color-on-tertiary-container);
  }

  .theme-error {
    background-color: var(--color-error-light);
    color: var(--color-on-error-light);

    --color-primary: var(--color-on-error-light);
    --color-on-primary: var(--color-error-light);
    --color-primary-container: var(--color-on-error-light);
    --color-on-primary-container: var(--color-primary-light);
    --color-error: var(--color-on-error-light);
    --color-on-error: var(--color-error-light);
    --color-error-container: var(--color-on-error-light);
    --color-on-error-container: var(--color-error-light);
    --color-secondary: var(--color-on-error-light);
    --color-on-secondary: var(--color-on-error-light);
    --color-secondary-container: var(--color-on-error-light);
    --color-on-secondary-container: var(--color-secondary-light);
    --color-tertiary: var(--color-on-error-light);
    --color-on-tertiary: var(--color-on-error-light);
    --color-tertiary-container: var(--color-on-error-light);
    --color-on-tertiary-container: var(--color-tertiary-light);
    --color-error: var(--color-on-error-light);
    --color-on-error: var(--color-on-error-light);
    --color-error-container: var(--color-on-error-light);
    --color-on-error-container: var(--color-error-light);
    --color-outline: var(--color-on-error-light);
    --color-outline-variant: var(--color-on-error-light);
    --color-background: var(--color-error-light);
    --color-on-background: var(--color-on-error-light);
    --color-surface: var(--color-error-light);
    --color-on-surface: var(--color-on-error-light);
  }

  .theme-error-container {
    background-color: var(--color-error-container);
    color: var(--color-on-error-container);

    --color-primary: var(--color-error);
    --color-on-primary: var(--color-on-error);
    --color-primary-container: var(--color-primary);
    --color-on-primary-container: var(--color-on-primary);
    --color-secondary-container: var(--color-secondary);
    --color-on-secondary-container: var(--color-on-secondary);
    --color-tertiary-container: var(--color-tertiary);
    --color-on-tertiary-container: var(--color-on-tertiary);
    --color-outline: var(--color-on-error-container);
    --color-outline-variant: var(--color-on-error-container);
    --color-background: var(--color-error-container);
    --color-on-background: var(--color-on-error-container);
    --color-surface: var(--color-error-container);
    --color-on-surface: var(--color-on-error-container);
  }

  .theme-discord {
    background-color: #7289da;
    color: var(--color-on-primary-light);

    p {
      color: var(--color-on-primary-light);
    }
  }

  .theme-youtube {
    background-color: #f00;
    color: var(--color-on-primary-light);

    p {
      color: var(--color-on-primary-light);
    }
  }

  .theme-tiktok {
    background-color: #010101;
    color: var(--color-on-primary-light);

    p {
      color: var(--color-on-primary-light);
    }
  }

  .theme-twitch {
    background-color: #9146ff;
    color: var(--color-on-primary-light);

    p {
      color: var(--color-on-primary-light);
    }
  }

  .theme-reddit {
    background-color: #ff5700;
    color: var(--color-on-primary-light);

    p {
      color: var(--color-on-primary-light);
    }
  }

  .theme-mastodon {
    background-color: #6364ff;
    color: var(--color-on-primary-light);

    p {
      color: var(--color-on-primary-light);
    }
  }

  .theme-action {
    background-color: var(--color-primary-split);
    color: var(--color-on-primary-light);

    --color-headline-override: var(--color-on-primary-light);
    --color-p-override: var(--color-on-primary-light);
  }
`
