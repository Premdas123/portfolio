
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/home';
import Skills from '../Skills/skills';
import Education from '../Education/education';
import WorkExperience from '../workexperience/workexperience';
import Projects from '../Projects/projects';
import Certifications from '../Certifications/certifications';
import ContactMe from '../contactme/contactme';

const AppRoutes=()=> {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path='/education' element={<Education />} />
      <Route  path='/workexperience' element={<WorkExperience />} />
      <Route  path='/projects' element={<Projects />} />
      <Route path='/certifications' element={< Certifications />} />
      <Route  path='/contactme' element={<ContactMe />} />

    </Routes>
  );
}

export default AppRoutes; 
