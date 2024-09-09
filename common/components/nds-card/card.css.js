import { css } from 'lit'

export const cardStyles = css`
  /* article {
  --img-scale: 1.001;
  --title-color: black;
  --link-icon-translate: -20px;
  --link-icon-opacity: 0;
  position: relative;
  border-radius: 16px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
}

article a::after {
  position: absolute;
  inset-block: 0;
  inset-inline: 0;
  cursor: pointer;
  content: "";
}

figure {
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

article img {
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
}

.article-body {
  padding: 24px;
}

article a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #28666e;
}

article a:focus {
  outline: 1px dotted #28666e;
}

article a .icon {
  min-width: 24px;
  width: 24px;
  height: 24px;
  margin-left: 5px;
  transform: translateX(var(--link-icon-translate));
  opacity: var(--link-icon-opacity);
  transition: all 0.3s;
} */

  /* using the has() relational pseudo selector to update our custom properties
article:has(:hover, :focus) {
  --img-scale: 1.1;
  --title-color: #28666e;
  --link-icon-translate: 0;
  --link-icon-opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

@media screen and (max-width: 960px) {
  article {
    container: card/inline-size;
  }
  .article-body p {
    display: none;
  }
}

@container card (min-width: 380px) {
  .article-wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }
  .article-body {
    padding-left: 0;
  }
  figure {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  figure img {
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
} */

  /* Card container */
  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
    border-radius: var(--radius-l);
    transition: transform 0.3s ease;
    box-shadow: var(--shadow-l);
  }

  .card-flip {
    width: 75%;
    max-width: 500px;
    min-height: 100%;
  }

  .card.card-icon {
    min-width: fit-content;
    padding: var(--space-m);
    align-items: center;
    text-align: center;

    p {
      width: 20ch;
    }
  }

  .card.card-link {
    transform: translate3d(0, 0, 0);
    will-change: transform;
    position: relative;
    transition: all 0.2s ease-in-out;
  }

  .card.card-link:hover {
    box-shadow: var(--shadow-xl);
    transform: translate3d(0, -2px, 0);
  }

  .card:hover {
    /* transform: scale(1.05); Slight scale on hover */
  }

  .card-image {
    padding: 0;
    grid-column: 1/1;
    grid-row: 1/1;
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-rows: 1fr max-content;

    .frame {
      height: 100%;
      grid-column: 1/-1;
      grid-row: 1/-1;
    }

    & > .magnifier {
      background: hsl(from var(--color-primary) h s l / 90%);
      border-radius: var(--radius-circle);
      grid-column: 2/3;
      grid-row: 2/3;
      margin: var(--space-m);
      padding: var(--space-xs);
      aspect-ratio: 1/1;
    }
  }

  /* Card image */
  .card-image img,
  .card-image .frame {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-l);
  }

  /* Card overlay */
  .card-overlay {
    grid-column: 1/1;
    grid-row: 1/1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(from var(--color-primary) h s l / 90%); /* Semi-transparent overlay */
    opacity: 0; /* Hidden by default */
    display: flex;
    justify-content: start;
    align-items: start;
    text-align: start;
    transition: opacity 0.4s ease;
    border-radius: var(--radius-l);
  }

  .card:hover {
    .card-overlay {
      opacity: 1; /* Show the overlay on hover */
    }

    .magnifier {
      display: none;
    }
  }

  /* Card text */
  .card-text {
    padding: var(--space-l);
  }
`