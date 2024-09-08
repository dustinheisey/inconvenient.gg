import { css } from 'lit'

export const spaceStyles = css`
  :root {
    --space-3xs: clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem);
    --space-2xs: clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem);
    --space-xs: clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem);
    --space-s: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
    --space-m: clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem);
    --space-l: clamp(2.25rem, calc(2.16rem + 0.43vw), 2.5rem);
    --space-xl: clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem);
    --space-2xl: clamp(4.5rem, calc(4.33rem + 0.87vw), 5rem);
    --space-3xl: clamp(6.75rem, calc(6.49rem + 1.3vw), 7.5rem);
    --space-4xl: clamp(24.75rem, 23.7935rem + 4.7826vw, 27.5rem);
    --space-3xs-2xs: clamp(0.31rem, calc(0.2rem + 0.54vw), 0.63rem);
    --space-2xs-xs: clamp(0.56rem, calc(0.43rem + 0.65vw), 0.94rem);
    --space-xs-s: clamp(0.88rem, calc(0.74rem + 0.65vw), 1.25rem);
    --space-s-m: clamp(1.13rem, calc(0.86rem + 1.3vw), 1.88rem);
    --space-m-l: clamp(1.69rem, calc(1.4rem + 1.41vw), 2.5rem);
    --space-l-xl: clamp(2.25rem, calc(1.73rem + 2.61vw), 3.75rem);
    --space-xl-2xl: clamp(3.38rem, calc(2.81rem + 2.83vw), 5rem);
    --space-2xl-3xl: clamp(4.5rem, calc(3.46rem + 5.22vw), 7.5rem);
    --space-3xl-4xl: clamp(6.75rem, -0.4674rem + 36.087vw, 27.5rem);
  }

  :root {
    --inset-page: var(--space-m-l);
    --gap-page: var(--space-3xl-4xl);
    --gap-region: var(--space-2xl);
    --gap-section: var(--space-xs);
    --max-inline-size-region: 1200px;
  }
`
