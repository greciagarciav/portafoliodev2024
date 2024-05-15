import  React from 'react';
import { ProjectsCard, ProjectsCardActionArea, ProjectsCardContent, ProjectsCardMedia, ProjectsCardTypography,  ProjectsCardDialog, ProjectsCardDialogContent, ProjectsCardDialogTitle, ProjectsCardDialogContentText, ProjectsCardDialogActions, ProjectsCardDialogButton } from './CardProject.styled.tsx';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Project } from "../../models/interfaces/project.interface"


type CardProjectProps = {
  project: Project;
};

const CardProject: React.FC<CardProjectProps> = ({ project }) => {

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
                <ProjectsCardMedia src={project.imageUrl}/>         
                <ProjectsCardContent>
                    <ProjectsCardTypography gutterBottom fontSize={"20px"}>
                    {project.name}
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
              {project.name}
            </ProjectsCardDialogTitle>
            <ProjectsCardDialogContent>
              <ProjectsCardDialogContentText>
                {project.description}
              </ProjectsCardDialogContentText>
            </ProjectsCardDialogContent>
            <ProjectsCardDialogActions>
              <ProjectsCardDialogButton autoFocus href={project.repoUrl}>
                Documentation
              </ProjectsCardDialogButton>
              <ProjectsCardDialogButton autoFocus href={project.demoUrl}>
                Demo
              </ProjectsCardDialogButton>
            </ProjectsCardDialogActions>
          </ProjectsCardDialog>
    </React.Fragment>

    )
}

export { CardProject }