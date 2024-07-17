import  React from 'react';
import { Button } from "@mui/material";
import { ProjectsCard, ProjectsCardActionArea, ProjectsCardContent, ProjectsCardMedia, ProjectsCardTypography,  ProjectsCardDialog, ProjectsCardDialogContent, ProjectsCardDialogTitle, ProjectsCardDialogContentText, ProjectsCardDialogActions } from './CardProject.styled.tsx';
import { Project } from "../../models/interfaces/project.interface"
import { SkillsButton } from '../../pages/about/About.styled.tsx';

type CardProjectProps = {
  project: Project;
};

const CardProject: React.FC<CardProjectProps> = ({ project }) => {

    const [open, setOpen] = React.useState(false);
  
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
                  <ProjectsCardContent sx={{backgroundColor: "#f1f2f2"}}>
                      <ProjectsCardTypography gutterBottom fontSize={"20px"} fontWeight={"bold"}>
                        {project.name}
                      </ProjectsCardTypography>                    
                  </ProjectsCardContent>
              </ProjectsCardActionArea>
            </ProjectsCard>
            <ProjectsCardDialog
              fullScreen={false}
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
                <ProjectsCardDialogContentText>         
                  {project.techStack.map(skill=> (
                                <SkillsButton key={project.id + skill} variant="contained" disabled>
                                    {skill}
                                </SkillsButton>
                            ))}
                </ProjectsCardDialogContentText>
              </ProjectsCardDialogContent>
              <ProjectsCardDialogActions>
                <Button autoFocus href={project.repoUrl} target="_blank"> 
                  Documentation
                </Button>
                <Button autoFocus href={project.demoUrl} target="_blank">
                  Demo
                </Button>
              </ProjectsCardDialogActions>
            </ProjectsCardDialog>
      </React.Fragment>
    )
}

export { CardProject }