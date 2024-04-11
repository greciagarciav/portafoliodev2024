import * as React from 'react';
import { Title, Body, HomeContainer, ProjectsButton } from "./Home.styled.tsx"


const HomePortafolio = () => {

    return (
        <HomeContainer>
          <Title>HEY, I'M GRECIA GARCIA</Title>
          <Body>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</Body>
          <ProjectsButton variant="contained">PROJECTS</ProjectsButton>
        </HomeContainer>
      );

}

export { HomePortafolio }