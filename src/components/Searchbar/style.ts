import styled, { keyframes } from "styled-components";

const dropDown = keyframes`
     0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.05)
    }
    100% {
        transform: scaleY(1)
    }
`;

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
  box-shadow: 0 -0.1rem 0.2rem rgba(0, 0, 0, 0.2),
    inset 0 -0.2rem 0.2rem rgba(255, 255, 255, 1);
`;

export const Dropdown = styled.ul`
  overflow: hidden;
  display: none;
  position: absolute;
  top: 100%;
  right: 0.2rem;
  width: calc(100% - 1.8rem);
  z-index: 1;
  transform-origin: top center;
  animation: ${dropDown} 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
  background-color: ${(props) => props.theme.midWhite};
  border-radius: 0 0 0.7rem 0.7rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
  &:hover {
    display: block;
  }
  li {
    background-color: ${(props) => props.theme.brightWhite};
    color: ${(props) => props.theme.midBlack};
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.8rem 0.5rem 0.8rem 1.8rem;
    font-size: 1.4rem;
    font-family: "montserrat", sans-serif;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.lightGray};
      color: ${(props) => props.theme.midBlack};
    }
  }
`;

export const Form = styled.form`
  position: relative;
  display: block;
  height: 100%;
  flex: 1;
  &:hover ${Dropdown} {
    display: block;
  }
  label {
    width: 100%;
    input {
      height: 100%;
      flex: 1;
      height: 100%;
      width: 100%;
      padding: 0.8rem 0.5rem 0.8rem 1.8rem;
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      outline: none;
      border: none;
      background-color: transparent;
      font-family: "montserrat", sans-serif;
    }
  }
`;

export const Button = styled.button`
  height: 3.4rem;
  width: 3.8rem;
  border-radius: 0 3rem 3rem 0;
  margin: 0 0.3rem 0 0;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.brightWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  box-shadow: 0 0.2rem 0.4rem rgba(13, 65, 73, 0.3);
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

// export const Button = styled.button`
//   height: 3.9rem;
//   margin-right: 0.1rem;
//   width: 3.9rem;
//   border: none;
//   outline: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 100%;
//   background-color: ${(props) => props.theme.blue};
//   color: ${(props) => props.theme.brightWhite};
//   font-size: 2.2rem;
//   padding-top: 0.1rem;
//   transition: 0.25s ease;
//   box-shadow: 0 -0.1rem 0.2rem rgba(255, 255, 255, 0.3),
//     0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
//   &:hover {
//     transform: translateY(0.1rem);
//     cursor: pointer;
//     background-color: ${(props) => props.theme.lightBlue};
//     color: ${(props) => props.theme.darkBlack};
//     box-shadow: 0 -0.1rem 0.2rem rgba(0, 0, 0, 0.3),
//       inset 0 -0.1rem 0.2rem rgba(255, 255, 255, 0.3);
//   }
// `;
