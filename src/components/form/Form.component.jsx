import React, { useContext, useState, createContext } from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  LinkButton,
  Input,
  Submit,
  Box,
  Label,
} from "./styles/form.styles";

const FormContext = createContext();

const Form = ({ children, ...restProps }) => {
  // const [emailActive, setEmailActive] = useState(false);
  // const [passwordActive, setPasswordActive] = useState(false);

  return <Container {...restProps}>{children}</Container>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.LinkButton = function FormLink({ children, ...restProps }) {
  return <LinkButton {...restProps}>{children}</LinkButton>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  const { setActive } = useContext(FormContext);

  return (
    <Input
      onBlur={() => setActive(false)}
      onClick={() => setActive(true)}
      {...restProps}
    >
      {children}
    </Input>
  );
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Box = function FormBox({ children, ...restProps }) {
  const [active, setActive] = useState(false);

  return (
    <FormContext.Provider value={{ active, setActive }}>
      <Box {...restProps}>{children}</Box>
    </FormContext.Provider>
  );
};

Form.Label = function FormLabel({ children, ...restProps }) {
  const { active, setActive } = useContext(FormContext);
  return (
    <Label
      onClick={(e) => {
        setActive(true);
      }}
      className={active ? "active" : ""}
      {...restProps}
    >
      {children}
    </Label>
  );
};

export default Form;
