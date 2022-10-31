import React from "react";
import LoginContainer, {
  FormContainer,
  Header,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "admin",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<CW/>"}RECIPE</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter Your Name" type="text" />
          <StyledInput placeholder="Password" type="password" />
          <StyledButton type="submit">LOGIN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
