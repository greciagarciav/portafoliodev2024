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
                    <Body>I'm a frontend developer with 4+ years of experience carrying out challenging projects under SCRUM, making use of Angular,
                            React.js/Redux, Node.js, strong proficiency in HTML5, CSS3, SASS and Javascript, JSON, Bootstrap, Git, Github, Gitlab
                            and APIs RESTful. I'm a committed person with strong communication and collaboration skills, creative, problem-solving,
                            results-oriented, and strong visual acumen. I have the willingness and disposition to learn new technologies.
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</Body>
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
                    <SkillsButton variant="contained" disabled>
                        Empathy
                    </SkillsButton>
                    
                    
                </SideContainer>
            </SecondContainer>
          
         
        </AboutContainer>
      );

}

export { AboutPortafolio }