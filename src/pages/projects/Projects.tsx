import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ProjectsContainer, ProjectsCardsContainer, ProjectsTitle, ProjectsBody } from './Projects.styled.tsx';
import { CardProject } from '../../components/card/CardProject.tsx';
import { Project } from "../../models/interfaces/project.interface"


type ProjectsListProps = {
    projects: Project[]
}

const ProjectsPortafolio: React.FC<ProjectsListProps> = ({ projects }) => {  

    const matches = useMediaQuery('(max-width:700px)');
    const dynamicStyles = {
        ...matches && {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"}
    }

    return (
        <ProjectsContainer>
            <ProjectsTitle>PROJECTS</ProjectsTitle>
            <ProjectsBody>Here you will find some of the personal and clients projects that I created with each project containing its own case study</ProjectsBody>
            <ProjectsCardsContainer sx={{ display: { xs: 'flex', sm: 'grid' }, ...dynamicStyles }}>
                {projects.map(project => (
                    <CardProject project={project}  key={project.id}></CardProject>
                ))}            
            </ProjectsCardsContainer>                             
        </ProjectsContainer>
      );
} 

export { ProjectsPortafolio }