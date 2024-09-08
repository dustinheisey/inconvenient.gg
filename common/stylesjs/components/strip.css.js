import { css } from 'lit'

export const stripStyles = css`
  .strip {
    display: block;
    overflow: scroll hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; /* Firefox */
  }

  .strip::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Edge */
  }

  .reel > .card {
    /* width: 20rem; */
    scroll-snap-align: start;
  }
`
