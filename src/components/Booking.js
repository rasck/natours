import React from "react";
import {
  Row,
  BookingContainer,
  Booking as BookingStyle,
  BookingFormContainer,
  FormContainer,
  FormGroup,
  FormInput,
  FormLabel,
  SecondaryHeadline,
  FormRadioButton,
  FormRadioButtonGroup,
  FormRadioButtonLabel,
  FormRadioStyle
} from "../styles";
import { mediumFont, marginBottomSmall } from "../styles/utility/variables";

export const Booking = () => (
  <BookingContainer>
    <Row>
      <BookingStyle>
        <BookingFormContainer>
          <FormContainer>
            <SecondaryHeadline
              fontSize={mediumFont}
              bottomMargin={marginBottomSmall}
            >
              Start your booking now
            </SecondaryHeadline>
            <FormGroup>
              <FormInput
                formAction="#"
                type="text"
                required
                placeholder="Full name"
                id="name"
              />
              <FormLabel htmlFor="name">Full name</FormLabel>
            </FormGroup>
            <FormGroup>
              <FormInput
                formAction="#"
                type="email"
                required
                placeholder="Email"
                id="email"
              />
              <FormLabel htmlFor="email">Email</FormLabel>
            </FormGroup>
            <FormGroup>
              {/* the html attribute name="tourSize" make the radiobuttons work together */}
              <FormRadioButtonGroup>
                <FormRadioButton type="radio" id="small" name="tourSize" />
                <FormRadioButtonLabel for="small">
                  <FormRadioStyle />
                  Small tour group
                </FormRadioButtonLabel>
              </FormRadioButtonGroup>
              <FormRadioButtonGroup>
                <FormRadioButton type="radio" id="large" name="tourSize" />
                <FormRadioButtonLabel for="large">
                  <FormRadioStyle />
                  Large tour group
                </FormRadioButtonLabel>
              </FormRadioButtonGroup>
            </FormGroup>
          </FormContainer>
        </BookingFormContainer>
      </BookingStyle>
    </Row>
  </BookingContainer>
);
