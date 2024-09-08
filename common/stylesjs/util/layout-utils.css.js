import { css } from 'lit'

export const layoutUtilsStyles = css`
  .reverse {
    flex-direction: row-reverse;
  }

  /* ? Utils */
  .justify-start {
    justify-content: start !important;
  }

  .justify-end {
    justify-content: end !important;
  }

  .justify-center {
    justify-content: center !important;
  }

  .justify-between {
    justify-content: space-between !important;
  }

  .justify-around {
    justify-content: space-around !important;
  }

  .justify-evenly {
    justify-content: space-evenly !important;
  }

  .justify-stretch {
    justify-content: stretch !important;
  }

  .align-start {
    align-items: start !important;
  }

  .align-end {
    align-items: end !important;
  }

  .align-center {
    align-items: center !important;
  }

  .align-stretch {
    align-items: stretch !important;
  }

  .align-baseline {
    align-items: baseline !important;
  }

  .content-center {
    justify-content: center !important;
  }

  .full {
    inline-size: 100%;
  }

  .border-block-start {
    border-block-start: 1px solid var(--color-outline-variant);
  }

  @media (--desktop-up) {
    .sticky {
      position: sticky;
      top: var(--space-3xl);
    }
  }

  @media (--phone-only) {
    footer.bg-img {
      margin-block-end: var(--space-xl);
    }
  }

  .logo-mobile {
    display: block;
  }

  .logo-desktop {
    display: none;
  }

  @media (--tablet-portrait-up) {
    .logo-mobile {
      display: none;
    }

    .logo-desktop {
      display: block;
    }
  }
`
