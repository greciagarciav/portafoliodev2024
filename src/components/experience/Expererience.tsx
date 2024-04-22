import * as React from 'react';
import { ExperienceContainer, ExperienceTypography } from './Experience.styled.tsx';
import { SkillsButton } from "../about/About.styled.tsx"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const ExperiencePortafolio = () => {   

    return (
        <ExperienceContainer>
            <ExperienceTypography fontSize={"46px"} fontWeight={"bold"}>EXPERIENCE</ExperienceTypography>
            <ExperienceTypography fontSize={"16px"} paddingBottom={"15px"}>Here you will find my relevant experience as a frontend developer.</ExperienceTypography>

            <List sx={{ width: '100%', maxWidth: "70%", bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start" sx={{ width: '100%', padding: "20px 20px" }}>
                    <Typography sx={{marginRight: "15px", width: '50%', marginTop: "7px" }}>2024 - PRESENT</Typography>
                    
                    <div>
                        <ListItemText 
                            primary="Software Engineer. Encora"
                            secondary={
                                <React.Fragment>
                                    {"Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."}
                                </React.Fragment>
                                
                            }
                            
                        />
                        <SkillsButton variant="contained" disabled>
                            HTML
                        </SkillsButton>
                        <SkillsButton variant="contained" disabled>
                            CSS
                        </SkillsButton>
                    </div>
                    
                            
                </ListItem>
                <Divider variant="inset" component="li" sx={{ marginLeft: "0px"}} />
                
                <Divider variant="inset" component="li" sx={{ marginLeft: "0px"}} />
                
            </List>
        </ExperienceContainer>
      );
} 

export { ExperiencePortafolio }