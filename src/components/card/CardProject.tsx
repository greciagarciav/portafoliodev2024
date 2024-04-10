import  React from 'react';
import { ProjectsCard, ProjectsCardActionArea, ProjectsCardContent, ProjectsCardMedia, ProjectsCardTypography,  ProjectsCardDialog, ProjectsCardDialogContent, ProjectsCardDialogTitle, ProjectsCardDialogContentText, ProjectsCardDialogActions, ProjectsCardDialogButton } from './CardProject.styled.tsx';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const CardProject = () => {

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
    <React.Fragment>
        <ProjectsCard variant="outlined" onClick={handleClickOpen}>
            <ProjectsCardActionArea>
                <ProjectsCardMedia src="https://mui.com/static/images/cards/contemplative-reptile.jpg"/>         
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
    </React.Fragment>

    )
}

export { CardProject }