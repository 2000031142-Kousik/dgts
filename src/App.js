import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import Services from './components/Services';
import Footer from './components/Footer';
import TrainingClasses from './components/pages/TrainingClasses';
import CoursesOffered from './components/pages/CoursesOffered';
import VirtualClasses from './components/pages/VirtualClasses';
import EmployeeStaffing from './components/pages/EmployeeStaffing';
import EngineeringSolutions from './components/pages/EngineeringSolutions';
import TrainingTalents from './components/pages/TrainingTalents';
import CAE from './components/pages/CAE';
import CFD from './components/pages/CFD';


const App = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training-classes" element={<TrainingClasses />} />
        <Route path="/courses-offered" element={<CoursesOffered />} />
        <Route path="/virtual-classes" element={<VirtualClasses />} />
        <Route path="/engineering-services" element={<EngineeringSolutions />} />
        <Route path="/cae-services" element={<CAE />} />
        <Route path="/cfd-services" element={<CFD />} />
        <Route path="/executive-staffing" element={<EmployeeStaffing />} />
        <Route path="/talent-management" element={<TrainingTalents />} />
      </Routes>
      {location.pathname === '/' && (
        <>
          <AboutUs />
          <Services />
          <ContactUs />
          <Careers />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
