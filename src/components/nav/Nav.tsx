import * as React from 'react';
import { TabsMainContainer, TabsListContainer, TabsListEventContainer, TabsListTab, TabsListPanelsContainer, TabsPanelContent, LogoNameContainer, LogoName, LogoContainer, Logo  } from "./Nav.styled.tsx";
import { HomePortafolio } from '../../pages/home/Home.tsx';
import { AboutPortafolio  } from '../../pages/about/About.tsx'
import { ProjectsPortafolio  } from '../../pages/projects/Projects.tsx'
import { CollabsPortafolio  } from '../../pages/collabs/Collabs.tsx'
import { TestimonialsPortafolio  } from '../../pages/testimonials/Testimonials.tsx'
import { ExperiencePortafolio  } from '../../pages/experience/Expererience.tsx'
import { ContactPortafolio  } from '../../pages/contact/Contact.tsx'
import { projects } from '../../data/projects.js';
import { testimonials } from '../../data/testimonials.js';
import { experiences } from '../../data/experience.js';

const PortafolioTabs = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    };

    return (
        <TabsMainContainer>
            
            <TabsListPanelsContainer value={value}>
            
                <TabsListContainer>
                    <LogoNameContainer>
                        <LogoContainer>
                            <Logo src='https://media.licdn.com/dms/image/D5603AQEjqzSkpXzWYQ/profile-displayphoto-shrink_800_800/0/1712675994978?e=1718841600&v=beta&t=sdmMdvAoEx6-YcLaQj-wpLg-5bvDdZiqWjegCwAg_fk'/>
                        </LogoContainer> 
                        <LogoName>GRECIA GARCIA</LogoName>                               
                    </LogoNameContainer>
                    <TabsListEventContainer onChange={handleChange} aria-label="Tabs for portafolio">
                        <TabsListTab label="Home" value="1" />
                        <TabsListTab label="About" value="2" />
                        <TabsListTab label="Projects" value="3" />
                        <TabsListTab label="Collabs" value="4" />
                        <TabsListTab label="Testimonials" value="5" />
                        <TabsListTab label="Experience" value="6" />
                        <TabsListTab label="Contact" value="7" />
                    </TabsListEventContainer>
                </TabsListContainer>
                <TabsPanelContent value="1">
                    <HomePortafolio></HomePortafolio>
                </TabsPanelContent>
                <TabsPanelContent value="2">
                    <AboutPortafolio></AboutPortafolio>
                </TabsPanelContent>
                <TabsPanelContent value="3">
                    <ProjectsPortafolio projects={projects}></ProjectsPortafolio>
                </TabsPanelContent>
                <TabsPanelContent value="4">
                    <CollabsPortafolio></CollabsPortafolio>
                </TabsPanelContent>
                <TabsPanelContent value="5">
                    <TestimonialsPortafolio testimonials={testimonials}></TestimonialsPortafolio>
                </TabsPanelContent>
                <TabsPanelContent value="6">
                    <ExperiencePortafolio experiences={experiences}></ExperiencePortafolio>
                </TabsPanelContent>
                <TabsPanelContent value="7">
                    <ContactPortafolio></ContactPortafolio>
                </TabsPanelContent>
            </TabsListPanelsContainer>
        </TabsMainContainer>
    );
    
}

export { PortafolioTabs }