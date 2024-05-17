import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { TabsMainContainer, TabsListContainer, TabsListTab, TabsListEventContainer, TabsListPanelsContainer, TabsPanelContent, LogoNameContainer, LogoName, LogoContainer, Logo } from "./Nav.styled.tsx";
import { HomePortafolio } from '../../pages/home/Home.tsx';
import { AboutPortafolio } from '../../pages/about/About.tsx';
import { ProjectsPortafolio } from '../../pages/projects/Projects.tsx';
import { CollabsPortafolio } from '../../pages/collabs/Collabs.tsx';
import { TestimonialsPortafolio } from '../../pages/testimonials/Testimonials.tsx';
import { ExperiencePortafolio } from '../../pages/experience/Expererience.tsx';
import { ContactPortafolio } from '../../pages/contact/Contact.tsx';
import { projects } from '../../data/projects.js';
import { testimonials } from '../../data/testimonials.js';
import { experiences } from '../../data/experience.js';

const PortafolioTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabsMainContainer>
      <TabsListPanelsContainer value={value}>
        <TabsListContainer>
          <LogoNameContainer>
            <LogoContainer>
              <Logo src='https://media.licdn.com/dms/image/D5603AQEjqzSkpXzWYQ/profile-displayphoto-shrink_800_800/0/1712675994978?e=1718841600&v=beta&t=sdmMdvAoEx6-YcLaQj-wpLg-5bvDdZiqWjegCwAg_fk' />
            </LogoContainer>
            <LogoName>GRECIA GARCIA</LogoName>
          </LogoNameContainer>
          <TabsListEventContainer  aria-label="Tabs for portafolio">
            <Link to="/" onClick={() => handleChange(0)} ><TabsListTab label="Home"  /></Link>
            <Link to="/about" onClick={() => handleChange(1)} ><TabsListTab label="About"  /></Link>
            <Link to="/projects" onClick={() => handleChange(2)}><TabsListTab label="Projects"  /></Link>
            <Link to="/collabs" onClick={() => handleChange(3)}><TabsListTab label="Collabs" /></Link>
            <Link to="/testimonials" onClick={() => handleChange(4)}><TabsListTab label="Testimonials" /></Link>
            <Link to="/experience" onClick={() => handleChange(5)}><TabsListTab label="Experience" /></Link>
            <Link to="/contact" onClick={() => handleChange(6)}><TabsListTab label="Contact" /></Link>
          </TabsListEventContainer>
        </TabsListContainer>
        <Routes>
          <Route path="/" element={<TabsPanelContent value={0}><HomePortafolio /></TabsPanelContent>} />
          <Route path="/about" element={<TabsPanelContent value={1}><AboutPortafolio /></TabsPanelContent>} />
          <Route path="/projects" element={<TabsPanelContent value={2}><ProjectsPortafolio projects={projects} /></TabsPanelContent>} />
          <Route path="/collabs" element={<TabsPanelContent value={3}><CollabsPortafolio /></TabsPanelContent>} />
          <Route path="/testimonials" element={<TabsPanelContent value={4}><TestimonialsPortafolio testimonials={testimonials} /></TabsPanelContent>} />
          <Route path="/experience" element={<TabsPanelContent value={5}><ExperiencePortafolio experiences={experiences} /></TabsPanelContent>} />
          <Route path="/contact" element={<TabsPanelContent value={6}><ContactPortafolio /></TabsPanelContent>} />
        </Routes>
      </TabsListPanelsContainer>
    </TabsMainContainer>
  );
}

export { PortafolioTabs };