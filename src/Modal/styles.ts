import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10000;
  box-sizing: border-box;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-top: 1px solid #ddd;

  /* This is going to add the notch support so the banner wont get hidden behind it */
  @supports (padding: max(0px)) {
    padding-bottom: max(12px, env(safe-area-inset-bottom));
  }

  transition: background 0.8s;

  &:active {
    background-color: #eee;
    background-size: 100%;
    transition: background 0s;
  }

  > button {
    background: none;
    font-size: inherit;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-container {
      width: 36px;
      height: 32px;
      margin-right: 8px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    span {
      font-family: inherit;
      font-size: inherit;
      color: #007aff;
    }
  }

  svg {
    color: #333;
  }
`;
