import {  useNavigate } from 'react-router-dom';

import './App.css';
import Home from './components/Home/home';
import Skills from './components/Skills/skills';
import Education from './components/Education/education';
import WorkExperience from './components/workexperience/workexperience';
import Project from './components/Projects/projects';
import Certifications from './components/Certifications/certifications';
import ContactMe from './components/contactme/contactme';
import { Link } from 'react-scroll';

function App() {
  const navigate = useNavigate();

  return (
    <>
    <nav>
   
        <Link className="home" to="home"  smooth={true} duration={1000}>Home</Link>
        <Link className="skills" to="skills" smooth={true} duration={1000}>Skills</Link>
        
        <Link className='Education' to='education' smooth={true} duration={1000}>Education</Link>
        <Link className='workexperience' to='workexperience'smooth={true} duration={1000}>Work Experience</Link>
        <Link className='projects' to='projects' smooth={true} duration={1000}>Projects</Link>
        <Link className='Certifcations' to='certifcations' smooth={true} duration={1000}>Certifcations</Link>
          <Link className='contactme' to='contactme' smooth={true} duration={1000}>Contact-Me</Link>


</nav >
<div className="content">
  <section id="home" style={{ minHeight: '100vh', padding: '40px 0' }}><Home /></section>
  <section id="skills" style={{ minHeight: '100vh', padding: '40px 0' }}><Skills /></section>
  <section id="education" style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',  // vertically center
    justifyContent: 'flex-start', // align to left
    padding: '0 5vw' // optional horizontal padding
  }} className="section"><Education /></section>
  <section id="workexperience" style={{ minHeight: '100vh', padding: '40px 0' }} ><WorkExperience /></section>
  <section id="projects" style={{ minHeight: '100vh', padding: '40px 0' }}><Project /></section>
  <section id="certifcations" style={{ minHeight: '100vh', padding: '40px 0' }}><Certifications /></section>
  <section id="contactme" style={{ minHeight: '100vh', padding: '40px 0' }}><ContactMe /></section>
</div>
</>
  );
}

export default App;
