import styled from "styled-components";

export const SearchSection = styled.div`
  height: 4rem;
  width: 80%;
  max-width: 40rem;
  margin: 3rem 0 2rem 0;
  display: flex;
  div {
    position: relative;
    display: flex;
    width: 100%;
    border-radius: 2rem;
    background-color: ${(props) => props.theme.midtWhite};
    box-shadow: inset 0 0.1rem 0.2rem rgba(0, 0, 0, 0.4),
      0 0.2rem 0.2rem rgba(140, 140, 140, 0.2);
  }
  form {
    width: 100%;
  }
  button {
    height: 3.8rem;
    margin-left: 1rem;
    border: none;
    outline: none;
    padding: 0 1rem;
    border-radius: 0.8rem;
    transition: 0.25s ease;
    background-color: ${(props) => props.theme.midtWhite};
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2),
      inset 0 0.2rem 0.2rem rgba(140, 140, 140, 0.2);
    color: ${(props) => props.theme.black300};
    font-weight: 700;
    &:hover {
      color: #62b8b8;
      cursor: pointer;
      box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2),
        inset 0 0.2rem 0.2rem rgba(140, 140, 140, 0.2);
    }
    &.clear {
      position: absolute;
      padding-top: 0.3rem;
      right: 0.1rem;
      top: 0.1rem;
      width: 3.8rem;
      border-radius: 100%;
      &:hover {
        transform: rotate(90deg);
        color: #f00;
      }
    }
  }
`;

export const Label = styled.label`
  input {
    height: 100%;
    width: 100%;
    padding: 0.8rem 1.6rem;
    padding-right: 4.2rem;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
