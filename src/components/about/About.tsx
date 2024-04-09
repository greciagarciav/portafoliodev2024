import * as React from 'react';
import { Title, Body, AboutContainer, FirstContainer, SecondContainer, SideContainer, ProjectsButton } from "./About.styled.tsx"

const AboutPortafolio = () => {

    return (
        <AboutContainer>
            <FirstContainer>
                <Title>ABOUT ME</Title>
                <Body>Here you will find more information about me, what I do, and my current 
                    skills mostly in terms of programming and technology</Body>
            </FirstContainer>
            <SecondContainer>
                <SideContainer>
                    <Title>Get to know me!</Title>
                    <Body>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</Body>
                    <ProjectsButton variant="contained">CONTACT</ProjectsButton>
                </SideContainer>
                <SideContainer>
                    <Title>Hard Skills</Title>
                    <ProjectsButton variant="contained" disabled>
                        HTML
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        CSS
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        Javascript
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        JSON
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        React
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        SASS
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        GIT
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        GITHUB
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        SCRUM
                    </ProjectsButton>

                    <Title>Soft Skills</Title>
                    <ProjectsButton variant="contained" disabled>
                        Problem Solving
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        Attention to details
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        Flexibility
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        Helpful
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        Team Work
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        Communicative
                    </ProjectsButton>
                    <ProjectsButton variant="contained" disabled>
                        Patience
                    </ProjectsButton>
                </SideContainer>
            </SecondContainer>
          
         
        </AboutContainer>
      );

}

export { AboutPortafolio }