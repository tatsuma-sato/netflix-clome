import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Input,
  Button,
  Text,
  Break,
  Box,
  Label,
} from "./styles/opt-form.styles";

const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.InputForm = function OptFormInputForm({ ...restProps }) {
  const [active, setActive] = useState(false);

  return (
    <Box onClick={(e) => setActive(true)}>
      <Label htmlFor="email" className={`${active ? "active" : ""}`}>
        Email Address
      </Label>
      <Input
        id="email"
        name="email"
        onBlur={() => setActive(false)}
        {...restProps}
      />
    </Box>
  );
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

export default OptForm;
