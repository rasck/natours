import React from "react";
import {
  Row,
  Column,
  FooterContainer,
  FooterLogoContainer,
  FooterLogo,
  FooterMenuContainer,
  FooterMenuItem,
  FooterMenuLink,
  FooterCopyrightText
} from "../styles";

const Footer = () => (
  <FooterContainer>
    <Row>
      <FooterLogoContainer>
        <FooterLogo src="img/logo-green-2x.png" alt="Full logo" />
      </FooterLogoContainer>
    </Row>
    <Row>
      <Column span="1" columns="2">
        <FooterMenuContainer>
          <FooterMenuItem>
            <FooterMenuLink href="#">Company</FooterMenuLink>
          </FooterMenuItem>
          <FooterMenuItem>
            <FooterMenuLink href="#">Contact us</FooterMenuLink>
          </FooterMenuItem>
          <FooterMenuItem>
            <FooterMenuLink href="#">Privacy Policy</FooterMenuLink>
          </FooterMenuItem>
          <FooterMenuItem>
            <FooterMenuLink href="#">Carrers</FooterMenuLink>
          </FooterMenuItem>
          <FooterMenuItem>
            <FooterMenuLink href="#">Terms</FooterMenuLink>
          </FooterMenuItem>
        </FooterMenuContainer>
      </Column>
      <Column span="1" columns="2">
        <FooterCopyrightText>
          Built by <FooterMenuLink href="#">JONAS SCHMEDTMANN</FooterMenuLink>
          for his online course{" "}
          <FooterMenuLink href="#">ADVANCED CSS AND SASS.</FooterMenuLink>
          Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
          this webpage for both personal and commercial use, but NOT to claim it
          as your own design. A credit to the original author, Jonas
          Schmedtmann, is of course highly appreciated!
        </FooterCopyrightText>
      </Column>
    </Row>
  </FooterContainer>
);

export { Footer };
