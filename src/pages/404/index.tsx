import {
  ErrorContent,
  ErrorContainer,
  ImgContainer,
  TextContainer,
} from "./style";
import errorimg from "./error.png";
import { Link } from "react-router-dom";

const ErrorsPage = () => {
  return (
    <ErrorContainer>
      <ErrorContent>
        <ImgContainer src={errorimg} alt="error-img" />
        <TextContainer>
          <h3>Ooops... Don't be sad!</h3>
          <p>
            It's just that we can't find what your're looking for right now.
          </p>
          <Link to="/">
            <button>back home</button>
          </Link>
        </TextContainer>
      </ErrorContent>
    </ErrorContainer>
  );
};

export default ErrorsPage;
