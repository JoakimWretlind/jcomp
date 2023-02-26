import styled from "styled-components";

export const FooterSection = styled.footer`
  grid-row: 3;
  height: 100%;
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.midBlack};
  p {
    color: ${(props) => props.theme.brightWhite};
    text-align: center;
    text-transform: capitalize;
    font-weight: 300;
    font-size: 1.4rem;
    letter-spacing: 0.5rem;
  }
  img {
    height: 3rem;
    margin-left: 3rem;
  }
`;
