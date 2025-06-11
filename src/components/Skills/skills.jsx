
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills=()=>{
return (
  <>
    <h2>What I do</h2>
    <h3 style={{ opacity: 0.6, marginTop: 12 }}>
      CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK <br />
    </h3>

    <div className="icon-container">
      <div className="icon-box">
        <i className="fa-brands fa-html5"></i><span>html-5</span>
      </div>
      <div className="icon-box">
        <i className="fa-brands fa-css3-alt"></i><span>css3</span>
      </div>
      <div className="icon-box">
        <i className="fa-brands fa-js"></i><span>JavaScript</span>
      </div>
      <div className="icon-box">
        <i className="fa-brands fa-react"></i><span>reactjs</span>
      </div>
      <div className="icon-box">
        <i className="fa-brands fa-node"></i><span>nodejs</span>
      </div>
    </div>

    <div className="icon-container">
      <div className="icon-box">
        <i className="fa-brands fa-npm"></i><span>npm</span>
      </div>
      <div className="icon-box">
        <i className="fa-brands fa-aws"></i><span>aws</span>
      </div>
      <div className="icon-box">
        <i className="fa-brands fa-python"></i><span>python</span>
      </div>
    </div>

    <h3 style={{ opacity: 0.6 }}>
      ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications <br />
      ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks <br />
      ⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean
    </h3>

    <h1>Proficiency</h1>

    <div className="skill-name" style={{fontSize:25}}>Frontend/Design</div>
    <div className="progress-bar" style={{marginTop:15}}>
      <div className="progress" style={{ width: "85%" }}></div>
    </div>
    
     <div className="skill-name" style={{fontSize:25}}>Backend</div>
    <div className="progress-bar" style={{marginTop:15}}>
      <div className="progress" style={{ width: "65%" }}></div>
    </div>

    <div className="skill-name" style={{fontSize:25}}>Programming</div>
    <div className="progress-bar" style={{marginTop:15}}>
      <div className="progress" style={{ width: "80%" }}></div>
    </div>
  

  </>
);



}
export default Skills
