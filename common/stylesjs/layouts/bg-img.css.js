import { css } from 'lit'

export const bgImgStyles = css`
  .bg-img {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    place-content: center;
    background: transparent !important;
  }

  .bg-img > img,
  .bg-img > svg,
  .bg-img > picture,
  .bg-img > video {
    grid-column: 1;
    grid-row: 1;
    object-fit: cover;
    object-position: center;
    min-inline-size: 100%;
    min-block-size: 100%;
    border-radius: 0;
  }

  .bg-img > :not(img, svg, picture, video) {
    grid-column: 1;
    grid-row: 1;
  }

  .bg-img .filter {
    padding: var(--space-xl);
    border-radius: var(--radius-l);
    background-color: var(--color-background);
    box-shadow: var(--shadow-xl);
  }

  /* .bg-img .overlay {
  block-size: 100%;
  inline-size: 100%;
  border-image: fill 1
    linear-gradient(hsl(from var(--color-primary) h s l / 0.5), hsl(from var(--color-primary) h s l / 0.5));
} */

  .inconvenient-logo-video {
    --color-on-background: var(--color-background-light);
  }

  .theme-video {
    --color-primary: var(--color-on-primary-light);
    --color-on-primary: var(--color-on-background-light);
    --color-headline-override: var(--color-on-primary-light);
    --color-p-override: var(--color-on-primary-light);
    --color-on-background: var(--color-on-primary-light);
    --icon-fill: var(--color-on-primary-light);
  }
`
