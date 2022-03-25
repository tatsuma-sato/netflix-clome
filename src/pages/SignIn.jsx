import React, { useState } from "react";
import { Form } from "../components";
import FooterContainer from "../container/Footer.container";
import HeaderContainer from "../container/Header.container";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isInvalid = password === "" || email == "";

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredentials.user) {
        setEmail("");
        setPassword("");
        navigate("/browse");
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {errorMessage && <Form.Error>{errorMessage}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="post">
            <Form.Box>
              <Form.Label>Email Address</Form.Label>
              <Form.Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </Form.Box>
            <Form.Box>
              <Form.Label>password</Form.Label>
              <Form.Input
                type="password"
                autoComplete="off"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Box>
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer>
    </>
  );
};

export default SignIn;
