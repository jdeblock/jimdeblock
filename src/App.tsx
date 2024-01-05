import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import PersonalProjects from './pages/projects/PersonalProjects';
import SchoolProjects from './pages/projects/SchoolProjects';
import ProfessionalCareer from './pages/projects/ProfessionalCareer';

import MinecraftCommandHelper from './pages/projects/personalProjects/MinecraftCommandHelper';
import AlgoBowl from './pages/projects/schoolProjects/AlgoBowl';
import Clue from './pages/projects/schoolProjects/Clue';
import PantryPlanner from './pages/projects/schoolProjects/PantryPlanner';
import NightmareEmpire from './pages/projects/schoolProjects/NightmareEmpire';
import SolarSystem from './pages/projects/schoolProjects/SolarSystem';
import ThisWebsite from './pages/projects/personalProjects/ThisWebsite';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/projects/personalProjects" element={<PersonalProjects />} />
                <Route path="/projects/personalProjects/thisWebsite" element={<ThisWebsite />} />
                <Route path="/projects/personalProjects/minecraftCommandHelper" element={<MinecraftCommandHelper />} />

                <Route path="/projects/schoolProjects" element={<SchoolProjects />} />
                <Route path="/projects/schoolProjects/algoBowl" element={<AlgoBowl />} />
                <Route path="/projects/schoolProjects/clue" element={<Clue />} />
                <Route path="/projects/schoolProjects/pantryPlanner" element={<PantryPlanner />} />
                <Route path="/projects/schoolProjects/nightmareEmpire" element={<NightmareEmpire />} />
                <Route path="/projects/schoolProjects/solarSystem" element={<SolarSystem />} />

                <Route path="/projects/professionalCareer" element={<ProfessionalCareer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;