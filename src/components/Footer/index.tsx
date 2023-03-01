import { FooterSection } from "./style";
import github from "../../resources/github.png";

export const Footer = () => {
  return (
    <FooterSection>
      <p>joakim wretlind 2023</p>
      <a href="https://github.com/JoakimWretlind/jcomp" target={"_blank"}>
        <img src={github} alt="github logo" />
      </a>
    </FooterSection>
  );
};
