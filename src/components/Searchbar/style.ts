import styled from "styled-components";

export const SearchSection = styled.div`
  height: 100%;
  width: 80%;
  max-width: 40rem;
  margin: 3rem 0 2rem 0;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.brightWhite};
  box-shadow: inset 0 0.1rem 0.2rem rgba(0, 0, 0, 0.4),
    0 0.2rem 0.2rem rgba(140, 140, 140, 0.2);
  form {
    width: 100%;
  }
`;

export const Label = styled.label`
  input {
    height: 100%;
    width: 100%;
    padding: 0.8rem 0.5rem;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  height: 3rem;
  padding: 0 1rem;
  margin-left: 1rem;
  border-radius: 0.3rem;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.brightWhite};
  box-shadow: ${(props) => props.theme.buttonShadow};
  transition: 0.25s ease;
  &:hover {
    transform: translateY(0.1rem);
    cursor: pointer;
    background-color: ${(props) => props.theme.lightBlue};
    color: ${(props) => props.theme.darkBlack};
    box-shadow: 0 -0.1rem 0.2rem rgba(26, 153, 173, 0.3),
      inset 0 -0.1rem 0.2rem rgba(255, 255, 255, 1);
  }
`;
