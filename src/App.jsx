import { useNavigate } from 'react-router-dom';
import AppRoutes from './components/routes/approutes';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-buttons">
        <button className="home" onClick={() => navigate('/')}>Home</button>
        <button className="skills" onClick={() => navigate('/skills')}>Skills</button>
        <button className='Education' onClick={()=>navigate('/education')}>Education</button>
        <button className='workexperience' onClick={()=>navigate('/workexperience')}>Work Experience</button>
        <button className='projects' onClick={()=>navigate('/projects')}>Projects</button>
        <button className='Certifcations' onClick={()=>navigate('/Certifications')}>Certifcations</button>
          <button className='contactme' onClick={()=>navigate('/contactme')}>Contact-Me</button>
      </div>


      <AppRoutes />
    </>
  );
}

export default App;
