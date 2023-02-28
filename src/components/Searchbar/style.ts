import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 80%;
  max-width: 40rem;
  height: 4rem;
  margin: 2rem 0;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.brightWhite};
  box-shadow: inset 0 0.1rem 0.2rem rgba(0, 0, 0, 0.4),
    0 0.2rem 0.2rem rgba(140, 140, 140, 0.2);
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  width: max-content;
  min-width: 11rem;
  background-color: ${(props) => props.theme.midWhite};
  border-radius: 0.3rem;
  display: none;
  height: 0;
  z-index: 2;
  /* ul {
    width: 100%;
  }
  li {
    background-color: ${(props) => props.theme.midBlack};
    color: ${(props) => props.theme.midWhite};
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0.1rem;
    transition: 0.25s ease;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.gray};
      color: ${(props) => props.theme.midBlack};
    }
  } */
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: max-content;
  min-width: 10rem;
  background-color: #222;
`;

export const DropdownButtton = styled.button`
  padding: 0.8rem;
  border: none;
  outline: none;
  width: 100%;
  background-color: #222;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #555;
  }
`;

export const Form = styled.form`
  position: relative;
  display: block;
  height: 100%;
  flex: 1;
  label {
    width: 100%;
    input {
      height: 100%;
      flex: 1;
      height: 100%;
      width: 100%;
      padding: 0.8rem 0.5rem 0.8rem 1rem;
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      outline: none;
      border: none;
      background-color: transparent;
    }
  }
  &:hover ${Dropdown} {
    display: block;
  }
`;

export const Button = styled.button`
  height: 3.9rem;
  margin-right: 0.1rem;
  width: 3.9rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.brightWhite};
  font-size: 2.2rem;
  padding-top: 0.1rem;
  transition: 0.25s ease;
  box-shadow: 0 -0.1rem 0.2rem rgba(255, 255, 255, 0.3),
    0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
  &:hover {
    transform: translateY(0.1rem);
    cursor: pointer;
    background-color: ${(props) => props.theme.lightBlue};
    color: ${(props) => props.theme.darkBlack};
    box-shadow: 0 -0.1rem 0.2rem rgba(0, 0, 0, 0.3),
      inset 0 -0.1rem 0.2rem rgba(255, 255, 255, 0.3);
  }
`;
