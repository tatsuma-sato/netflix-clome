import React from "react";
import { Feature, OptForm } from "../components";
import FaqsContaienr from "../container/Faqs.container";
import FooterContainer from "../container/Footer.container";
import HeaderContainer from "../container/Header.container";
import JumbotronContainer from "../container/Jumbotron.container";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV progarms and more</Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at any time
          </Feature.Subtitle>
          <OptForm>
            <OptForm.InputForm />
            <OptForm.Button>Get Started</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContaienr />
      <FooterContainer />
    </>
  );
};

export default Home;
