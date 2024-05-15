import * as React from 'react';
import { ProjectsContainer, ProjectsCardsContainer, ProjectsTypography } from './Projects.styled.tsx';
import { CardProject } from '../card/CardProject.tsx';
import { Project } from "../../models/interfaces/project.interface"
import { projects } from '../../data/projects.js';

type ProjectsListProps = {
    projects: Project[]
}

const ProjectsPortafolio: React.FC<ProjectsListProps> = () => {  
    
    return (
        <ProjectsContainer>
            <ProjectsTypography fontSize={"46px"} fontWeight={"bold"}>PROJECTS</ProjectsTypography>
            <ProjectsTypography fontSize={"16px"} padding={"20px"}>Here you will find some of the personal and clients projects that I created with each project containing its own case study</ProjectsTypography>
            <ProjectsCardsContainer>
                {projects.map(project => (
                    <CardProject project={project}  key={project.id}></CardProject>
                ))}            
            </ProjectsCardsContainer>                             
        </ProjectsContainer>
      );
} 

export { ProjectsPortafolio }