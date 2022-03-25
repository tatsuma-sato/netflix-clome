import React from "react";
import { Faqs } from "../components";
import FaqsData from "../constants/faq";

const FaqsContaienr = () => {
  return (
    <Faqs>
      <Faqs.Title>Frequentry Asked Questions</Faqs.Title>
      {FaqsData.map((item) => (
        <Faqs.Item key={item.id}>
          <Faqs.Header>{item.header}</Faqs.Header>
          <Faqs.Body>{item.body}</Faqs.Body>
        </Faqs.Item>
      ))}
    </Faqs>
  );
};

export default FaqsContaienr;
