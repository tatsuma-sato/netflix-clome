import React from "react";
import {
  Container,
  Row,
  Link,
  Title,
  Text,
  Column,
  Break,
  Select,
  Box,
  Icon,
} from "./styles/footer.styles";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({
  children,
  fontSize = "14px",
  ...restProps
}) {
  return (
    <Link fontSize={fontSize} {...restProps}>
      {children}
    </Link>
  );
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Footer.Select = function FooterSelect({ children, ...restProps }) {
  return (
    <>
      <Box>
        <Icon />
        <Select {...restProps}>
          <option>English</option>
          <option>Français</option>
        </Select>
        {children}
      </Box>
    </>
  );
};

export default Footer;
