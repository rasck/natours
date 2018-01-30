import React from "react";
import {
  NavContainer,
  NavButtonCheckBox,
  NavButtonLabel,
  NavBackground,
  Nav,
  NavList,
  NavListItem,
  NavLink,
  NavIcon
} from "../styles";

const Navigation = () => (
  <NavContainer>
    <NavButtonCheckBox
      className="CheckItOut"
      type="checkbox"
      id="navi-toggle"
    />
    <NavButtonLabel htmlFor="navi-toggle">
      <NavIcon>&nbsp;</NavIcon>
    </NavButtonLabel>
    <NavBackground className="NavBackground">&nbsp;</NavBackground>
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink href="#">
            <span>01</span>About Natours
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#">
            <span>02</span>Your Benefits
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#">
            <span>03</span>Popular Tours
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#">
            <span>04</span>Stories
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#">
            <span>05</span>Book Now
          </NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  </NavContainer>
);

export { Navigation };
