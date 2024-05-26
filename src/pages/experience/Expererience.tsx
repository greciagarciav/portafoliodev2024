import * as React from 'react';
import { ExperienceContainer, ExperienceTypography } from './Experience.styled.tsx';
import { SkillsButton } from "../about/About.styled.tsx"
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Experience } from '../../models/interfaces/experience.interface.ts';

type ExperienceListProps = {
    experiences: Experience[]
}

const ExperiencePortafolio: React.FC<ExperienceListProps> = ({ experiences }) => {   

    return (
        <ExperienceContainer>
            <ExperienceTypography fontSize={"46px"} fontWeight={"bold"}>EXPERIENCE</ExperienceTypography>
            <ExperienceTypography fontSize={"16px"} paddingBottom={"15px"}>Here you will find my relevant experience as a frontend developer.</ExperienceTypography>

            <List sx={{ width: '100%', maxWidth: "70%", bgcolor: 'background.paper' }}>
                
                {experiences.map(experience=> (
                    <ListItem key={experience.id} alignItems="flex-start" sx={{ width: '100%', padding: "20px 20px" }}>
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