/*! purgecss start ignore */
import { css } from 'lit'

export const tooltipStyles = css`
  tool-tip {
    display: none;
  }

  @media (--tablet-landscape-up) {
    tool-tip {
      display: inline-block;

      --_p-inline: 1.5ch;
      --_p-block: 0.75ch;
      --_triangle-size: 7px;
      --_bg: var(--color-surface);
      --_shadow-alpha: 50%;
      --_bottom-tip: conic-gradient(from -30deg at bottom, rgb(0 0 0 / 0%), #000 1deg 60deg, rgb(0 0 0 / 0%) 61deg)
        bottom / 100% 50% no-repeat;
      --_top-tip: conic-gradient(from 150deg at top, rgb(0 0 0 / 0%), #000 1deg 60deg, rgb(0 0 0 / 0%) 61deg) top / 100%
        50% no-repeat;
      --_right-tip: conic-gradient(from -120deg at right, rgb(0 0 0 / 0%), #000 1deg 60deg, rgb(0 0 0 / 0%) 61deg) right /
        50% 100% no-repeat;
      --_left-tip: conic-gradient(from 60deg at left, rgb(0 0 0 / 0%), #000 1deg 60deg, rgb(0 0 0 / 0%) 61deg) left /
        50% 100% no-repeat;

      pointer-events: none;
      user-select: none;
      opacity: 0;
      transform: translateX(var(--_x, 0)) translateY(var(--_y, 0));
      transition:
        opacity 0.2s ease,
        transform 0.2s ease;
      position: absolute;
      z-index: 1;
      inline-size: max-content;
      max-inline-size: 25ch;
      text-align: start;
      font-size: 1rem;
      font-weight: normal;
      line-height: normal;
      line-height: initial;
      padding: var(--_p-block) var(--_p-inline);
      margin: 0;
      border-radius: 5px;
      background: var(--_bg);
      color: var(--color-on-background);
      will-change: filter;
      filter: drop-shadow(0 3px 3px hsl(0deg 0% 0% / var(--_shadow-alpha)))
        drop-shadow(0 12px 12px hsl(0deg 0% 0% / var(--_shadow-alpha)));
    }

    /* create a stacking context for elements with > tool-tips */
    :has(> tool-tip) {
      position: relative;
    }

    /* when those parent elements have focus, hover, etc */
    :has(> tool-tip):is(:hover, :focus-visible, :active) > tool-tip {
      opacity: 1;
      transition-delay: 200ms;
    }

    /* prepend some prose for screen readers only */
    tool-tip::before {
      content: '; Has tooltip: ';
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      height: 1px;
      width: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    }

    /* tooltip shape is a pseudo element so we can cast a shadow */
    tool-tip::after {
      content: '';
      background: var(--_bg);
      position: absolute;
      z-index: -1;
      inset: 0;
      mask: var(--_tip);
    }

    /* top tooltip styles */
    tool-tip:is(
        [tip-position='top'],
        [tip-position='block-start'],
        :not([tip-position]),
        [tip-position='bottom'],
        [tip-position='block-end']
      ) {
      text-align: center;
    }

    @media (prefers-color-scheme: light) {
      tool-tip {
        --_shadow-alpha: 15%;
      }
    }

    tool-tip {
      --isRTL: -1;
    }

    tool-tip:dir(rtl) {
      --isRTL: 1;
    }

    tool-tip:is([tip-position='top'], [tip-position='block-start'], :not([tip-position])) {
      inset-inline-start: 50%;
      inset-block-end: calc(100% + var(--_p-block) + var(--_triangle-size));

      --_x: calc(50% * var(--isRTL));
    }

    tool-tip:is([tip-position='top'], [tip-position='block-start'], :not([tip-position]))::after {
      --_tip: var(--_bottom-tip);

      inset-block-end: calc(var(--_triangle-size) * -1);
      border-block-end: var(--_triangle-size) solid transparent;
    }

    tool-tip:is([tip-position='right'], [tip-position='inline-end']) {
      inset-inline-start: calc(100% + var(--_p-inline) + var(--_triangle-size));
      inset-block-end: 50%;

      --_y: 50%;
    }

    tool-tip:is([tip-position='right'], [tip-position='inline-end'])::after {
      --_tip: var(--_left-tip);

      inset-inline-start: calc(var(--_triangle-size) * -1);
      border-inline-start: var(--_triangle-size) solid transparent;
    }

    tool-tip:is([tip-position='right'], [tip-position='inline-end']):dir(rtl)::after {
      --_tip: var(--_right-tip);
    }

    tool-tip:is([tip-position='bottom'], [tip-position='block-end']) {
      inset-inline-start: 50%;
      inset-block-start: calc(100% + var(--_p-block) + var(--_triangle-size));

      --_x: calc(50% * var(--isRTL));
    }

    tool-tip:is([tip-position='bottom'], [tip-position='block-end'])::after {
      --_tip: var(--_top-tip);

      inset-block-start: calc(var(--_triangle-size) * -1);
      border-block-start: var(--_triangle-size) solid transparent;
    }

    tool-tip:is([tip-position='left'], [tip-position='inline-start']) {
      inset-inline-end: calc(100% + var(--_p-inline) + var(--_triangle-size));
      inset-block-end: 50%;

      --_y: 50%;
    }

    tool-tip:is([tip-position='left'], [tip-position='inline-start'])::after {
      --_tip: var(--_right-tip);

      inset-inline-end: calc(var(--_triangle-size) * -1);
      border-inline-end: var(--_triangle-size) solid transparent;
    }

    tool-tip:is([tip-position='left'], [tip-position='inline-start']):dir(rtl)::after {
      --_tip: var(--_left-tip);
    }

    tool-tip {
      opacity: 0;
      transform: translateX(var(--_x, 0)) translateY(var(--_y, 0));
      transition:
        opacity 0.2s ease,
        transform 0.2s ease;
    }

    :has(> tool-tip):is(:hover, :focus-visible, :active) > tool-tip {
      opacity: 1;
      transition-delay: 200ms;
    }

    @media (prefers-reduced-motion: no-preference) {
      :has(> tool-tip:is([tip-position='top'], [tip-position='block-start'], :not([tip-position]))):not(
          :hover,
          :focus-visible,
          :active
        )
        tool-tip {
        --_y: 3px;
      }

      :has(> tool-tip:is([tip-position='right'], [tip-position='inline-end'])):not(:hover, :focus-visible, :active)
        tool-tip {
        --_x: -3px;
      }

      :has(> tool-tip:is([tip-position='bottom'], [tip-position='block-end'])):not(:hover, :focus-visible, :active)
        tool-tip {
        --_y: -3px;
      }

      :has(> tool-tip:is([tip-position='left'], [tip-position='inline-start'])):not(:hover, :focus-visible, :active)
        tool-tip {
        --_x: 3px;
      }
    }
  }

  /*! purgecss end ignore */
`
