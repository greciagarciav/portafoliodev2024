import * as React from 'react';
import { ProjectsContainer, ProjectsCard, ProjectsCardActionArea, ProjectsCardContent, ProjectsCardMedia, ProjectsCardTypography,  ProjectsCardDialog, ProjectsCardDialogContent, ProjectsCardDialogTitle, ProjectsCardDialogContentText, ProjectsCardDialogActions, ProjectsCardDialogButton } from './Projects.styled.tsx';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const ProjectsPortafolio = () => { 

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <ProjectsContainer>
          <ProjectsCardTypography fontSize={"56px"}>PROJECTS</ProjectsCardTypography>
          <ProjectsCardTypography fontSize={"16px"}>Here you will find some of the personal and clients projects that I created with each project containing its own case study</ProjectsCardTypography>

          <ProjectsCard variant="outlined" onClick={handleClickOpen}>
            <ProjectsCardActionArea>
                <ProjectsCardMedia 
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />         
                <ProjectsCardContent>
                    <ProjectsCardTypography gutterBottom variant="h5">
                        Lizard
                    </ProjectsCardTypography>
                    <ProjectsCardTypography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </ProjectsCardTypography>
                </ProjectsCardContent>
            </ProjectsCardActionArea>
          </ProjectsCard>
          <ProjectsCardDialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <ProjectsCardDialogTitle id="responsive-dialog-title">
              {"Use Google's location service?"}
            </ProjectsCardDialogTitle>
            <ProjectsCardDialogContent>
              <ProjectsCardDialogContentText>
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </ProjectsCardDialogContentText>
            </ProjectsCardDialogContent>
            <ProjectsCardDialogActions>
              <ProjectsCardDialogButton autoFocus onClick={handleClose}>
                Disagree
              </ProjectsCardDialogButton>
            </ProjectsCardDialogActions>
          </ProjectsCardDialog>
        </ProjectsContainer>
      );
} 

export { ProjectsPortafolio }