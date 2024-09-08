/* ? The Center - Center something */
import { css } from 'lit'

export const centerStyles = css`
  .center {
    box-sizing: content-box;
    margin: auto;
  }

  .center-vertical {
    box-sizing: content-box;
    margin-block: auto;
  }

  .center-horizontal {
    box-sizing: content-box;
    margin-inline: auto;
  }

  .center-intrinsic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .center-text {
    text-align: center;
  }

  .auto {
    margin: auto;
  }

  .start {
    box-sizing: content-box;
    margin-inline-end: auto;
  }

  .end {
    box-sizing: content-box;
    margin-inline-start: auto;
    inline-size: fit-content;
  }
`
