import { Link } from "react-router-dom";
import { H2, TextBox } from "./style";

export const Logo = () => {
  return (
    <Link to="/">
      <TextBox>
        <H2>j computers</H2>
      </TextBox>
    </Link>
  );
};
