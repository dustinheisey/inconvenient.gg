import { css } from 'lit'

export const colorStyles = css`
  :root {
    --color-primary-light: #4f6628;
    --color-on-primary-light: rgb(255 255 255);
    --color-primary-container-light: rgb(209 236 160);
    --color-on-primary-container-light: rgb(19 31 0);
    --color-secondary-light: rgb(89 98 72);
    --color-on-secondary-light: rgb(255 255 255);
    --color-secondary-container-light: rgb(221 230 198);
    --color-on-secondary-container-light: rgb(23 30 10);
    --color-tertiary-light: rgb(57 102 97);
    --color-on-tertiary-light: rgb(255 255 255);
    --color-tertiary-container-light: rgb(188 236 229);
    --color-on-tertiary-container-light: rgb(0 32 29);
    --color-error-light: rgb(186 26 26);
    --color-error-container-light: rgb(255 218 214);
    --color-on-error-light: rgb(255 255 255);
    --color-on-error-container-light: rgb(65 0 2);
    --color-background-light: rgb(250 250 238);
    --color-on-background-light: rgb(26 28 21);
    --color-surface-light: rgb(252 250 236);
    --color-on-surface-light: rgb(28 28 20);
    --color-surface-variant-light: rgb(226 228 212);
    --color-on-surface-variant-light: rgb(69 72 61);
    --color-outline-light: rgb(117 120 108);
    --color-inverse-on-surface-light: rgb(244 241 228);
    --color-inverse-surface-light: rgb(49 49 40);
    --color-inverse-primary-light: rgb(181 208 134);
    --color-surface-tint-light: rgb(79 102 40);
    --color-outline-variant-light: rgb(197 200 185);
    --color-surface-dim-light: rgb(221 218 205);
    --color-surface-bright-light: rgb(252 250 236);
    --color-surface-container-lowest-light: rgb(255 255 255);
    --color-surface-container-low-light: rgb(246 244 231);
    --color-surface-container-light: rgb(241 238 225);
    --color-surface-container-high-light: rgb(235 232 219);
    --color-surface-container-highest-light: rgb(229 227 214);
    --color-primary-dark: rgb(255 181 160);
    --color-surface-tint-dark: rgb(255 181 160);
    --color-on-primary-dark: rgb(86 31 15);
    --color-primary-container-dark: rgb(114 53 35);
    --color-on-primary-container-dark: rgb(255 219 209);
    --color-secondary-dark: rgb(231 189 178);
    --color-on-secondary-dark: rgb(68 42 34);
    --color-secondary-container-dark: rgb(93 64 55);
    --color-on-secondary-container-dark: rgb(255 219 209);
    --color-tertiary-dark: rgb(255 179 173);
    --color-on-tertiary-dark: rgb(87 30 27);
    --color-tertiary-container-dark: rgb(115 51 47);
    --color-on-tertiary-container-dark: rgb(255 218 214);
    --color-error-dark: rgb(255 180 171);
    --color-error-container-dark: rgb(147 0 10);
    --color-on-error-dark: rgb(105 0 5);
    --color-on-error-container-dark: rgb(255 218 214);
    --color-background-dark: rgb(26 17 15);
    --color-on-background-dark: rgb(241 223 218);
    --color-surface-dark: rgb(25 18 12);
    --color-on-surface-dark: rgb(239 224 214);
    --color-surface-variant-dark: rgb(83 67 63);
    --color-on-surface-variant-dark: rgb(216 194 188);
    --color-outline-dark: rgb(160 140 135);
    --color-inverse-on-surface-dark: rgb(56 47 40);
    --color-inverse-surface-dark: rgb(239 224 214);
    --color-inverse-primary-dark: rgb(143 75 56);
    --color-outline-variant-dark: rgb(83 67 63);
    --color-surface-dim-dark: rgb(25 18 12);
    --color-surface-bright-dark: rgb(65 55 49);
    --color-surface-container-lowest-dark: rgb(20 13 8);
    --color-surface-container-low-dark: rgb(34 26 20);
    --color-surface-container-dark: rgb(38 30 24);
    --color-surface-container-high-dark: rgb(49 40 34);
    --color-surface-container-highest-dark: rgb(60 51 44);
    --color-dark-primary: rgb(143 75 56);
    --color-on-dark-primary: rgb(58 11 1);
  }

  /* You can override the default Infima variables here. */
  :root {
    --ifm-color-primary: #34a853; /* Green from the earth side of your logo */
    --ifm-color-primary-dark: #2e914a;
    --ifm-color-primary-darker: #27783f;
    --ifm-color-primary-darkest: #1f6034;
    --ifm-color-primary-light: #40b362;
    --ifm-color-primary-lighter: #4cc678;
    --ifm-color-primary-lightest: #59d88d;
    --ifm-code-font-size: 95%;
    --docusaurus-highlighted-code-line-bg: rgb(0 0 0 / 10%);
  }

  /* For readability concerns, you should choose a lighter palette in dark mode. */
  [data-theme='dark'] {
    --ifm-color-primary: #ff6f61; /* Orange-red from the fire side of your logo */
    --ifm-color-primary-dark: #e65f55;
    --ifm-color-primary-darker: #cc524a;
    --ifm-color-primary-darkest: #b34740;
    --ifm-color-primary-light: #ff7f71;
    --ifm-color-primary-lighter: #ff9184;
    --ifm-color-primary-lightest: #ffaaa3;
    --docusaurus-highlighted-code-line-bg: rgb(0 0 0 / 30%);
  }

  /* ? Dark Mode Stuff */
  :root {
    --color-primary: var(--color-primary-light);
    --color-on-primary: var(--color-on-primary-light);
    --color-primary-split: var(--color-primary-light);
    --color-primary-container: var(--color-primary-container-light);
    --color-on-primary-container: var(--color-on-primary-container-light);
    --color-secondary: var(--color-secondary-light);
    --color-on-secondary: var(--color-on-secondary-light);
    --color-secondary-container: var(--color-secondary-container-light);
    --color-on-secondary-container: var(--color-on-secondary-container-light);
    --color-tertiary: var(--color-tertiary-light);
    --color-on-tertiary: var(--color-on-tertiary-light);
    --color-tertiary-container: var(--color-tertiary-container-light);
    --color-on-tertiary-container: var(--color-on-tertiary-container-light);
    --color-error: var(--color-error-light);
    --color-error-container: var(--color-error-container-light);
    --color-on-error: var(--color-on-error-light);
    --color-on-error-container: var(--color-on-error-container-light);
    --color-background: var(--color-background-light);
    --color-on-background: var(--color-on-background-light);
    --color-surface: var(--color-surface-light);
    --color-on-surface: var(--color-on-surface-light);
    --color-surface-variant: var(--color-surface-variant-light);
    --color-on-surface-variant: var(--color-on-surface-variant-light);
    --color-outline: var(--color-outline-light);
    --color-inverse-on-surface: var(--color-inverse-on-surface-light);
    --color-inverse-surface: var(--color-inverse-surface-light);
    --color-inverse-primary: var(--color-inverse-primary-light);
    --color-shadow: var(--color-shadow-light);
    --color-surface-tint: var(--color-surface-tint-light);
    --color-outline-variant: var(--color-outline-variant-light);
    --color-scrim: var(--color-scrim-light);
  }

  html.mode-dark,
  html[data-theme='dark'] {
    --color-primary: var(--color-primary-dark);
    --color-on-primary: var(--color-on-primary-dark);
    --color-primary-split: var(--color-dark-primary);
    --color-primary-container: var(--color-primary-container-dark);
    --color-on-primary-container: var(--color-on-primary-container-dark);
    --color-secondary: var(--color-secondary-dark);
    --color-on-secondary: var(--color-on-secondary-dark);
    --color-secondary-container: var(--color-secondary-container-dark);
    --color-on-secondary-container: var(--color-on-secondary-container-dark);
    --color-tertiary: var(--color-tertiary-dark);
    --color-on-tertiary: var(--color-on-tertiary-dark);
    --color-tertiary-container: var(--color-tertiary-container-dark);
    --color-on-tertiary-container: var(--color-on-tertiary-container-dark);
    --color-error: var(--color-error-dark);
    --color-error-container: var(--color-error-container-dark);
    --color-on-error: var(--color-on-error-dark);
    --color-on-error-container: var(--color-on-error-container-dark);
    --color-background: var(--color-background-dark);
    --color-on-background: var(--color-on-background-dark);
    --color-surface: var(--color-surface-dark);
    --color-on-surface: var(--color-on-surface-dark);
    --color-surface-variant: var(--color-surface-variant-dark);
    --color-on-surface-variant: var(--color-on-surface-variant-dark);
    --color-outline: var(--color-outline-dark);
    --color-inverse-on-surface: var(--color-inverse-on-surface-dark);
    --color-inverse-surface: var(--color-inverse-surface-dark);
    --color-inverse-primary: var(--color-inverse-primary-dark);
    --color-shadow: var(--color-shadow-dark);
    --color-surface-tint: var(--color-surface-tint-dark);
    --color-outline-variant: var(--color-outline-variant-dark);
    --color-scrim: var(--color-scrim-dark);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-primary: var(--color-primary-dark);
      --color-on-primary: var(--color-on-primary-dark);
      --color-primary-split: var(--color-dark-primary);
      --color-primary-container: var(--color-primary-container-dark);
      --color-on-primary-container: var(--color-on-primary-container-dark);
      --color-secondary: var(--color-secondary-dark);
      --color-on-secondary: var(--color-on-secondary-dark);
      --color-secondary-container: var(--color-secondary-container-dark);
      --color-on-secondary-container: var(--color-on-secondary-container-dark);
      --color-tertiary: var(--color-tertiary-dark);
      --color-on-tertiary: var(--color-on-tertiary-dark);
      --color-tertiary-container: var(--color-tertiary-container-dark);
      --color-on-tertiary-container: var(--color-on-tertiary-container-dark);
      --color-error: var(--color-error-dark);
      --color-error-container: var(--color-error-container-dark);
      --color-on-error: var(--color-on-error-dark);
      --color-on-error-container: var(--color-on-error-container-dark);
      --color-background: var(--color-background-dark);
      --color-on-background: var(--color-on-background-dark);
      --color-surface: var(--color-surface-dark);
      --color-on-surface: var(--color-on-surface-dark);
      --color-surface-variant: var(--color-surface-variant-dark);
      --color-on-surface-variant: var(--color-on-surface-variant-dark);
      --color-outline: var(--color-outline-dark);
      --color-inverse-on-surface: var(--color-inverse-on-surface-dark);
      --color-inverse-surface: var(--color-inverse-surface-dark);
      --color-inverse-primary: var(--color-inverse-primary-dark);
      --color-shadow: var(--color-shadow-dark);
      --color-surface-tint: var(--color-surface-tint-dark);
      --color-outline-variant: var(--color-outline-variant-dark);
      --color-scrim: var(--color-scrim-dark);
    }

    html.mode-light,
    html[data-theme='light'] {
      --color-primary: var(--color-primary-light);
      --color-on-primary: var(--color-on-primary-light);
      --color-primary-split: var(--color-primary-light);
      --color-primary-container: var(--color-primary-container-light);
      --color-on-primary-container: var(--color-on-primary-container-light);
      --color-secondary: var(--color-secondary-light);
      --color-on-secondary: var(--color-on-secondary-light);
      --color-secondary-container: var(--color-secondary-container-light);
      --color-on-secondary-container: var(--color-on-secondary-container-light);
      --color-tertiary: var(--color-tertiary-light);
      --color-on-tertiary: var(--color-on-tertiary-light);
      --color-tertiary-container: var(--color-tertiary-container-light);
      --color-on-tertiary-container: var(--color-on-tertiary-container-light);
      --color-error: var(--color-error-light);
      --color-error-container: var(--color-error-container-light);
      --color-on-error: var(--color-on-error-light);
      --color-on-error-container: var(--color-on-error-container-light);
      --color-background: var(--color-background-light);
      --color-on-background: var(--color-on-background-light);
      --color-surface: var(--color-surface-light);
      --color-on-surface: var(--color-on-surface-light);
      --color-surface-variant: var(--color-surface-variant-light);
      --color-on-surface-variant: var(--color-on-surface-variant-light);
      --color-outline: var(--color-outline-light);
      --color-inverse-on-surface: var(--color-inverse-on-surface-light);
      --color-inverse-surface: var(--color-inverse-surface-light);
      --color-inverse-primary: var(--color-inverse-primary-light);
      --color-shadow: var(--color-shadow-light);
      --color-surface-tint: var(--color-surface-tint-light);
      --color-outline-variant: var(--color-outline-variant-light);
      --color-scrim: var(--color-scrim-light);
    }
  }
`
