import React from 'react';
import { AppContainer } from './App.styled.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import { HomePortafolio } from './pages/home/Home.tsx';
import { AboutPortafolio } from './pages/about/About.tsx';
import { ProjectsPortafolio } from './pages/projects/Projects.tsx';
import { CollabsPortafolio } from './pages/collabs/Collabs.tsx';
import { TestimonialsPortafolio } from './pages/testimonials/Testimonials.tsx';
import { ExperiencePortafolio } from './pages/experience/Expererience.tsx';
import { ContactPortafolio } from './pages/contact/Contact.tsx';
import { projects } from './data/projects.js';
import { testimonials } from './data/testimonials.js';
import { experiences } from './data/experience.js';

const App = () => (
  <AppContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePortafolio />} />
          <Route path="about" element={<AboutPortafolio />} />
          <Route path="projects" element={<ProjectsPortafolio projects={projects} />} />
          <Route path="collaborations" element={<CollabsPortafolio />} />
          <Route path="testimonials" element={<TestimonialsPortafolio testimonials={testimonials} />} />
          <Route path="experience" element={<ExperiencePortafolio experiences={experiences} />} />
          <Route path="contact" element={<ContactPortafolio />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  </AppContainer>
);

export default App;