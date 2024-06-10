import * as React from 'react';
import { Link } from "react-router-dom";
import { Title, Body, AboutContainer, FirstContainer, SecondContainer, SideContainer, SkillsButton, ProjectsButton } from "./About.styled.tsx"

const AboutPortafolio = () => {

    return (
        <AboutContainer>
            <FirstContainer>
                <Title fontSize={"46px"}>ABOUT ME</Title>
                <Body textAlign={"center"}>Here you will find more information about me, what I do, and my current 
                    skills mostly in terms of programming and technology</Body>
            </FirstContainer>
            <SecondContainer sx={{ display: { xs: 'block', sm: 'flex' } }}>
                <SideContainer>
                    <Title fontSize={"34px"}>Get to know me!</Title>
                    <Body>I am a seasoned frontend developer with over 4 years of experience, I've successfully tackled challenging projects within SCRUM environments, leveraging my expertise in React.js. My proficiency extends across essential web technologies such as HTML5, CSS3, SASS, and JavaScript, allowing me to craft dynamic and visually appealing interfaces.<br></br><br></br>
                        With a strong foundation in version control systems like Git, and experience collaborating on platforms like Github and Gitlab, I prioritize effective communication and teamwork to drive project success. I thrive on finding creative solutions to complex problems, always keeping the end-user experience in mind.<br></br><br></br>
                        My results-oriented approach, coupled with a keen eye for design, ensures that the products I develop not only meet technical requirements but also visual, accesibility and usability expectations. I'm also committed to continuous learning and improvement.
                    </Body>
                            <Link to="/contact">
                                <ProjectsButton variant="contained">CONTACT</ProjectsButton>
                            </Link>                    
                </SideContainer>
                <SideContainer>
                    <Title fontSize={"34px"}>Tech Skills</Title>
                    <SkillsButton variant="contained" disabled>
                        HTML
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        CSS & SASS
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Javascript
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        React
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Angular
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        WCAG
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        TEST
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Cross-Browser Compatibility
                    </SkillsButton>                                     
                    <SkillsButton variant="contained" disabled>
                        Responsive Design
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        RESTful APIs
                    </SkillsButton>                    
                    
                    <SkillsButton variant="contained" disabled>
                        GIT
                    </SkillsButton>

                    <Title fontSize={"34px"} paddingTop={"15px"}>Soft Skills</Title>
                    <SkillsButton variant="contained" disabled>
                        Problem Solving
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Attention to details
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Time management
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Empathy
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Adaptability
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Patience
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Collaboration
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Customer focus
                    </SkillsButton>
                    <SkillsButton variant="contained" disabled>
                        Communication
                    </SkillsButton>
                </SideContainer>
            </SecondContainer>
          
         
        </AboutContainer>
      );

}

export { AboutPortafolio }