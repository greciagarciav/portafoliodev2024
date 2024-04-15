import * as React from 'react';
import { Title, Body, AboutContainer, FirstContainer, SecondContainer, SideContainer, SkillsButton, ProjectsButton } from "./About.styled.tsx"

const AboutPortafolio = () => {

    return (
        <AboutContainer>
            <FirstContainer>
                <Title fontSize={"46px"}>ABOUT ME</Title>
                <Body>Here you will find more information about me, what I do, and my current 
                    skills mostly in terms of programming and technology</Body>
            </FirstContainer>
            <SecondContainer>
                <SideContainer>
                    <Title fontSize={"34px"}>Get to know me!</Title>
                    <Body>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</Body>
                    <ProjectsButton variant="contained">CONTACT</ProjectsButton>
                </SideContainer>
                <SideContainer>
                    <Title fontSize={"34px"}>Hard Skills</Title>
                    <SkillsButton variant="contained" disabled>
                        HTML
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        CSS
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Javascript
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        JSON
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        React
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        SASS
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        GIT
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        GITHUB
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        SCRUM
                    </SkillsButton>

                    <Title fontSize={"34px"}>Soft Skills</Title>
                    <SkillsButton variant="contained" disabled>
                        Problem Solving
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Attention to details
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Flexibility
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Helpful
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Team Work
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Communicative
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Patience
                    </SkillsButton>
                </SideContainer>
            </SecondContainer>
          
         
        </AboutContainer>
      );

}

export { AboutPortafolio }