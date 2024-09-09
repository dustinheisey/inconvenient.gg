import { css } from 'lit'

export const bannerStyles = css`
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    inline-size: 100vw;
    padding: var(--space-2xs);
    background-color: var(--color-primary);
  }

  .banner p {
    color: var(--color-on-primary);
    flex-grow: 2;
    max-inline-size: 100%;
    text-align: center;
  }

  .banner button {
    cursor: pointer;
    border: none;
    padding: 0;
    background: transparent;
    color: var(--color-on-primary);
  }

  /* .dismissible {
  color: #222;
  font-size: 16px;
  line-height: 22px;
  position: relative;
  overflow: hidden;
}

.dismissible span {
  background: #fff;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: block;
  margin: 0 auto 20px auto;
  padding: 10px;
  position: relative;
}

.dismissible button {
  background: rgba(0, 0, 0, 0.4);
  border: 0;
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  height: 24px;
  line-height: 20px;
  margin-top: -12px;
  right: 10px;
  position: absolute;
  top: 50%;
  width: 24px;
}

.dismissible button:focus {
  outline: none;
}

.dismissible-error span {
  background-color: #ff5252;
  border-color: #ff1744;
  color: #fff;
}

.dismissible-error button {
  background-color: #d50000;
  color: #ffcdd2;
}

.dismissible-info span {
  background-color: #64b5f6;
  border-color: #2196f3;
  color: #fff;
}

.dismissible-info button {
  background-color: #2196f3;
  color: #e3f2fd;
}

.dismissible-success span {
  background-color: #9ccc65;
  border-color: #7cb342;
  color: #fff;
}

.dismissible-success button {
  background-color: #7cb342;
  color: #dcedc8;
}

.dismissible-warning span {
  background-color: #ffa726;
  border-color: #fb8c00;
  color: #fff;
}

.dismissible-warning button {
  background-color: #fb8c00;
  color: #ffe0b2;
} */
`
