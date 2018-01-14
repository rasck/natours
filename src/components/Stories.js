import React from "react";
import {
  Row,
  Column,
  StoriesContainer,
  StoriesHeading,
  StoryContainer,
  StoryShape,
  StoryHeadLine,
  StoryText,
  StoryImage,
  StoryName,
  StoriesVideoContainer,
  StoiresVideoContent,
  AboutButton,
  CenterText
} from "../styles";

const Stories = () => (
  <StoriesContainer>
    <StoriesVideoContainer>
      <StoiresVideoContent>
        <video
          className="video-content"
          muted="true"
          autoplay="true"
          loop="true"
        >
          <source src="img/video.mp4" type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </StoiresVideoContent>
    </StoriesVideoContainer>
    <StoriesHeading>We make people genuinely happy</StoriesHeading>
    <Row>
      <StoryContainer>
        <StoryShape>
          <StoryImage src="img/nat-8.jpg" alt="Person on a tour" />
          <StoryName>Marry Smith</StoryName>
        </StoryShape>
        <StoryHeadLine>Had the best week with my family</StoryHeadLine>
        <StoryText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
          aspernatur libero repellat quis consequatur ducimus quam nisi
          exercitationem omnis earum qui. Libero repellat quis consequatur
          ducimus quam nisi exercitationem omnis.
        </StoryText>
      </StoryContainer>
    </Row>
    <Row>
      <StoryContainer>
        <StoryShape>
          <StoryImage src="img/nat-9.jpg" alt="Person on a tour" />
          <StoryName>Jack Wilson</StoryName>
        </StoryShape>
        <StoryHeadLine>Wow! My life is completely different now</StoryHeadLine>
        <StoryText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
          aspernatur libero repellat quis consequatur ducimus quam nisi
          exercitationem omnis earum qui. Libero repellat quis consequatur
          ducimus quam nisi exercitationem omnis.
        </StoryText>
      </StoryContainer>
    </Row>
    <CenterText>
      <AboutButton href="#">Read all stories &rarr;</AboutButton>
    </CenterText>
  </StoriesContainer>
);
export { Stories };
