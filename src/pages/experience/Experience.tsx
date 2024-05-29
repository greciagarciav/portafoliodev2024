import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ExperienceContainer, ExperienceTitle, ExperienceBody } from './Experience.styled.tsx';
import { SkillsButton } from "../about/About.styled.tsx"
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Experience } from '../../models/interfaces/experience.interface.ts';

type ExperienceListProps = {
    experiences: Experience[]
}

const ExperiencePortafolio: React.FC<ExperienceListProps> = ({ experiences }) => {   

    const matches = useMediaQuery('(max-width:700px)');
    const dynamicStyles = {
        ...matches && { maxWidth: "100%"}
    }

    return (
        <ExperienceContainer>
            <ExperienceTitle >EXPERIENCE</ExperienceTitle>
            <ExperienceBody >Here you will find my relevant experience as a frontend developer.</ExperienceBody>

            <List sx={{ width: '100%', maxWidth: "70%", bgcolor: 'background.paper', ...dynamicStyles }}>
                
                {experiences.map(experience=> (
                    <ListItem key={experience.id} alignItems="flex-start" sx={{ width: '100%', paddingBottom: "20px" }}>
                        <Typography sx={{marginRight: "15px", width: '20%', marginTop: "7px" }}>{experience.date}</Typography>
                                        
                        <Box sx={{width: '80%'}}>
                            <ListItemText 
                                primary={experience.role + " " + experience.company}
                                secondary={
                                    <React.Fragment>
                                        {experience.description}
                                    </React.Fragment>                                    
                                }
                                
                            />
                            {experience.techStack.map(skill=> (
                                <SkillsButton key={experience.id + skill} variant="contained" disabled>
                                    {skill}
                                </SkillsButton>
                            ))}
                        </Box>                  

                    </ListItem>
                ))}                
                
            </List>
        </ExperienceContainer>
      );
} 

export { ExperiencePortafolio }