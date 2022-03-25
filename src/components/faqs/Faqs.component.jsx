import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from "./styles/faqs.styles";

const ToggelContext = createContext();

const Faqs = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Faqs.Title = function FaqsTitle({ children, restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Faqs.Item = function FaqsItem({ children, restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggelContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggelContext.Provider>
  );
};

Faqs.Header = function FaqsHeader({ children, restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggelContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="open" />
      )}
    </Header>
  );
};

Faqs.Body = function FaqsBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggelContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null
};

export default Faqs;

{
  /* <Accordion>
      <Accordion.Title>Frequentry Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      
    </Accordion> */
}
