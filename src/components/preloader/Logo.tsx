import { Link } from "react-router-dom";
import { LogoContainer, TextBox, H2 } from "./styles";

export const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <TextBox>
          <H2>j computers</H2>
        </TextBox>
      </Link>
    </LogoContainer>
  );
};
