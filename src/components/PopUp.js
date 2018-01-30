import React from "react";
import {
  Row,
  Column,
  PopUpBackground,
  PopUpContainer,
  PopUpHeadline,
  PopUpSubHeadline,
  PopUpImageContainer,
  PopUpText,
  PopUpContent,
  PopUpBookButton,
  PopUpCloseIconContainer,
  PopUpCloseIcon,
  PopUpImage
} from "../styles";

const PopUp = () => (
  <PopUpBackground id="popup">
    <PopUpContainer>
      <PopUpCloseIconContainer>
        <PopUpCloseIcon href="#section-tours">&times;</PopUpCloseIcon>
      </PopUpCloseIconContainer>
      <PopUpImageContainer>
        <PopUpImage src="img/nat-8.jpg" alt="Tour photo" />
        <PopUpImage src="img/nat-9.jpg" alt="Tour photo" />
      </PopUpImageContainer>
      <PopUpContent>
        <PopUpHeadline>Start booking now</PopUpHeadline>
        <PopUpSubHeadline>
          Important &ndash; Please read these terms before booking.
        </PopUpSubHeadline>
        <PopUpText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          adipiscing diam donec adipiscing tristique risus nec. Tortor at auctor
          urna nunc id. Odio tempor orci dapibus ultrices in. Molestie ac
          feugiat sed lectus vestibulum mattis ullamcorper velit sed. Quam id
          leo in vitae turpis massa sed. Aliquet nibh praesent tristique magna
          sit amet purus gravida quis.
        </PopUpText>
        <PopUpBookButton href="#">Book now</PopUpBookButton>
      </PopUpContent>
    </PopUpContainer>
  </PopUpBackground>
);

export { PopUp };
