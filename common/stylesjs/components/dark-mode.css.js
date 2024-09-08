import { css } from 'lit'

export const darkModeStyles = css`
  /*! purgecss start ignore */
  .dark-mode-toggle {
    color: var(--color-primary);

    --size: 1.5rem;
    --icon-fill: var(--color-primary);
    --ease-1: cubic-bezier(0.25, 0, 0.5, 1);
    --ease-2: cubic-bezier(0.25, 0, 0.4, 1);
    --ease-3: cubic-bezier(0.25, 0, 0.3, 1);
    --ease-4: cubic-bezier(0.25, 0, 0.2, 1);
    --ease-5: cubic-bezier(0.25, 0, 0.1, 1);
    --ease-in-1: cubic-bezier(0.25, 0, 1, 1);
    --ease-in-2: cubic-bezier(0.5, 0, 1, 1);
    --ease-in-3: cubic-bezier(0.7, 0, 1, 1);
    --ease-in-4: cubic-bezier(0.9, 0, 1, 1);
    --ease-in-5: cubic-bezier(1, 0, 1, 1);
    --ease-out-1: cubic-bezier(0, 0, 0.75, 1);
    --ease-out-2: cubic-bezier(0, 0, 0.5, 1);
    --ease-out-3: cubic-bezier(0, 0, 0.3, 1);
    --ease-out-4: cubic-bezier(0, 0, 0.1, 1);
    --ease-out-5: cubic-bezier(0, 0, 0, 1);
    --ease-in-out-1: cubic-bezier(0.1, 0, 0.9, 1);
    --ease-in-out-2: cubic-bezier(0.3, 0, 0.7, 1);
    --ease-in-out-3: cubic-bezier(0.5, 0, 0.5, 1);
    --ease-in-out-4: cubic-bezier(0.7, 0, 0.3, 1);
    --ease-in-out-5: cubic-bezier(0.9, 0, 0.1, 1);
    --ease-elastic-1: cubic-bezier(0.5, 0.75, 0.75, 1.25);
    --ease-elastic-2: cubic-bezier(0.5, 1, 0.75, 1.25);
    --ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
    --ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
    --ease-elastic-5: cubic-bezier(0.5, 1.75, 0.75, 1.25);
    --ease-squish-1: cubic-bezier(0.5, -0.1, 0.1, 1.5);
    --ease-squish-2: cubic-bezier(0.5, -0.3, 0.1, 1.5);
    --ease-squish-3: cubic-bezier(0.5, -0.5, 0.1, 1.5);
    --ease-squish-4: cubic-bezier(0.5, -0.7, 0.1, 1.5);
    --ease-squish-5: cubic-bezier(0.5, -0.9, 0.1, 1.5);
    --ease-step-1: steps(2);
    --ease-step-2: steps(3);
    --ease-step-3: steps(4);
    --ease-step-4: steps(7);
    --ease-step-5: steps(10);
  }

  @media (prefers-reduced-motion: no-preference) {
    .sun-and-moon > .sun {
      transition: transform 0.5s var(--ease-elastic-3);
    }

    .sun-and-moon > .sun-beams {
      transition:
        transform 0.5s var(--ease-elastic-4),
        opacity 0.5s var(--ease-3);
    }

    .sun-and-moon > .moon > circle {
      transform: translateX(-7px);
      transition: transform 0.25s var(--ease-out-5);
    }

    [data-theme='dark'] .sun-and-moon > .sun {
      transform: scale(1.75);
      transition-timing-function: var(--ease-3);
      transition-duration: 0.25s;
    }

    [data-theme='dark'] .sun-and-moon > .sun-beams {
      transform: rotateZ(-25deg);
      transition-duration: 0.15s;
    }

    [data-theme='dark'] .sun-and-moon > .moon > circle {
      transition-delay: 0.25s;
      transition-duration: 0.5s;
    }
  }

  .dark-mode-toggle {
    background: none;
    border: none;
    padding: 0;
    inline-size: var(--size);
    block-size: var(--size);
    aspect-ratio: 1/1;
    border-radius: 50%;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    outline-offset: 5px;
  }

  .dark-mode-toggle > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  .sun-and-moon > .sun,
  .sun-and-moon > .moon,
  .sun-and-moon > .sun-beams {
    transform-origin: center center;
  }

  .sun-and-moon > .moon circle {
    transform: translateX(7px);
  }

  [data-theme='dark'] .sun-and-moon > .moon circle {
    transform: translateX(-7px);
  }

  [data-theme='dark'] .sun-and-moon > .sun {
    transform: scale(1.75);
  }

  [data-theme='dark'] .sun-and-moon > .sun-beams {
    opacity: 0;
  }

  .dark-mode-toggle > .sun-and-moon > .sun {
    fill: var(--icon-fill);
  }

  .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
    fill: var(--icon-fill);
  }

  .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill);
  }

  [data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun {
    fill: var(--icon-fill);
  }

  [data-theme='dark'] .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
    fill: var(--icon-fill);
  }

  [data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill);
  }

  [data-theme='dark'] .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill);
  }

  @media (hover: none) {
    .dark-mode-toggle {
      --size: 2rem;
    }
  }

  /*! purgecss end ignore */
`
