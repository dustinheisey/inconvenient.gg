/* ? The Cover - “Above the fold” introductory content */
import { css } from 'lit'

export const coverStyles = css`
  .cover {
    display: flex;
    min-block-size: 100vh;
    inline-size: 100%;
    gap: var(--gap-region);
    padding: var(--inset, var(--inset-page));
  }

  .cover.sidebar {
    padding: 0;
  }

  .cover.sidebar > :is(.stack, .prose) {
    padding: var(--inset, var(--inset-page));
  }

  .cover.sidebar :is(.frame, img) {
    border-radius: 0;
  }

  .cover-nav {
    flex-direction: column;
  }

  .cover > .principle {
    margin-block: auto;
  }

  .cover.cover-s {
    min-block-size: 75vh;
  }
`
