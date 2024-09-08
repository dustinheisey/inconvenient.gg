import { css } from 'lit'

export const clipStyles = css`
  .clip {
    clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
  }

  .clip-top-left {
    clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
  }

  .clip-top-right {
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
  }

  .clip-bottom-left {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
  }

  .clip-bottom-right {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  }
`
