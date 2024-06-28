import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './page/Home';
import Navbar from './components/Navbar';
import Skills from './page/Skills';
import Footer from './components/Footer';
import Settings from './page/Settings';
import AboutMe from './page/AboutMe';
import Projects from './page/Projects';
import ProjectDetail from './page/ProjectDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/project' element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path='/about-me' element={<AboutMe />} />  
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
