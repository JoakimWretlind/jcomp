import styled from "styled-components";

export const FooterSection = styled.footer`
  height: 12rem;
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.midBlack};
  z-index: 98;
  a {
    color: #fff;
    text-align: center;
    text-transform: capitalize;
    font-weight: 300;
    font-size: 1.4rem;
    letter-spacing: 0.5rem;
  }
`;
