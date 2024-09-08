import { css } from 'lit'

export const navbarStyles = css`
  /*! purgecss start ignore */
  nav {
    position: relative;
    padding: var(--inset-page);
  }

  #reading-progress {
    z-index: 1;
    background-color: var(--color-primary);
    width: 100vw;
    position: absolute;
    left: 0;
    block-size: 3px;
    bottom: 0;
    right: 0;
    transform: translate(-100vw, 0);
    will-change: transform;
    pointer-events: none;
  }

  .navbar {
    position: sticky;
    top: -200px;
    z-index: 999;

    /* transition: top 0.5s ease; */
  }

  .navbar .logo-bg {
    fill: var(--color-background);
  }

  .navbar.floating .logo-bg {
    fill: var(--color-surface);
  }

  .navbar.floating {
    box-shadow: var(--shadow-l);
    animation: transition 0.2s ease-in-out;
    animation-fill-mode: forwards;

    nav {
      padding: var(--space-2xs);

      .stack {
        flex-flow: row wrap;
        justify-content: space-between;

        > * + * {
          margin-top: 0 !important;
        }
      }
    }
  }

  .navbar .topbar,
  .navbar a.btn {
    display: none;
  }

  .bottombar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .bottombar > ul {
    inline-size: 100%;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    background: var(--color-surface);
    box-shadow: var(--shadow-l);
    padding-block-end: env(safe-area-inset-bottom);
  }

  .bottombar > ul > * {
    min-inline-size: 44px;
    min-block-size: 44px;
  }

  .bottombar > ul > li {
    flex: 1;
  }

  .bottombar > ul svg {
    inline-size: 20px;
    block-size: 20px;
  }

  .bottombar > ul a {
    padding-block: 12px;
    inline-size: 100%;
    block-size: 100%;
    gap: 4px !important;
    font-size: var(--font-size-xs) !important;
    font-weight: 500;
  }

  .bottombar > ul .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
  }

  .fab {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3xs);
    background: var(--color-primary);
    box-shadow: var(--shadow-l);
    border-radius: var(--radius-circle);
    padding: var(--space-m);
    aspect-ratio: 1/1;
    fill: var(--color-on-primary);
    color: var(--color-on-primary);
    position: absolute;
    bottom: 100%;
    right: var(--space-3xs);
    margin-inline-end: var(--space-3xs);
    margin-block-end: var(--space-xs);
  }

  .bottombar > ul > .fab > a {
    padding-block: 0 0;
  }

  @media (--tablet-portrait-up) {
    .bottombar {
      display: none;
    }

    .navbar .topbar {
      display: flex;
    }

    .navbar a.btn {
      display: inline-flex;
    }
  }

  @media (--phone-only) {
    nav .stack {
      flex-flow: row wrap !important;
      justify-content: space-between !important;

      > * + * {
        margin-top: 0 !important;
      }
    }
  }

  @keyframes transition {
    from {
      top: -200px;
      background-color: transparent;
    }

    to {
      top: 0;
      background-color: var(--color-surface);
    }
  }

  /*! purgecss end ignore */
`
