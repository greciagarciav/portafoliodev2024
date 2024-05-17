import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from './App.styled.tsx';
import { PortafolioTabs } from './components/nav/Nav.tsx';

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <PortafolioTabs />
    </AppContainer>
  </BrowserRouter>
);

export default App;