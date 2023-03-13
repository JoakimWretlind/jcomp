import { Link } from "react-router-dom";
import { H2, LogoContainer } from "./style";

export const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <H2>j computers</H2>
      </Link>
    </LogoContainer>
  );
};
