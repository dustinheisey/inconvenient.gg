import { css } from 'lit'

export const reelStyles = css`
  .reel {
    display: flex;
    block-size: auto;
    overflow: auto hidden;
    max-inline-size: 100%;
    scrollbar-color: var(--color-primary) var(--color-background);
    padding-block: var(--space-xl);
    padding-inline: 0;
  }

  .reel.justify-center {
    justify-content: start !important;
  }

  @media (--tablet-portrait-up) {
    .reel.justify-center {
      justify-content: center !important;
    }
  }

  .reel.no-bar {
    scrollbar-width: none;
  }

  .reel.no-bar::-webkit-scrollbar {
    display: none;
  }

  .reel::-webkit-scrollbar {
    block-size: var(--space-m);
  }

  .reel::-webkit-scrollbar-track {
    background-color: var(--color-background);
  }

  .reel::-webkit-scrollbar-thumb {
    background-color: var(--color-background);
    background-image: linear-gradient(
      var(--color-background) 0,
      var(--color-background) calc(var(--space-m) / 4),
      var(--color-primary) calc(var(--space-m) / 4),
      var(--color-primary) calc((var(--space-m) / 4) * 3),
      var(--color-background) calc((var(--space-m) / 4) * 3)
    );
  }

  .reel > * {
    flex: 0 0 auto;
  }

  .reel > img {
    block-size: 100%;
    flex-basis: auto;
    width: auto;
  }

  .reel > * + * {
    margin-inline-start: var(--space-s);
  }

  .reel.overflowing {
    padding-block-end: var(--space-s);
  }
`
