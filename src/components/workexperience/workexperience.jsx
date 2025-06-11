import React from 'react';

import logo from '../../assets/digienablers.png'; // Adjust path as needed


const WorkExperience=()=>{
    return(
        <>
         <div className="experience-card">
      <div className="experience-top">
  <div className="company-name">DigiEnablers Pvt Ltd</div>
  <div className="logo-circle">
    <img src={logo} alt="Digi Enablers Logo" />
  </div>
</div>

      <div className="experience-content">
        <h2>Role:FULL STACK DEVELOPER</h2>
        <p className="location">Hyderabad | MARCH 2023 – PRESENT</p>
        <p className="project">Project: 1800 Spirits (US-Based Marketplace)</p>
      
        <ul className="experience-details">
          <li>Results-driven Full Stack Developer with 2+ years of experience building scalable web applications on AWS <br />
             Cloud using React.js and Node.js. Skilled in developing SPAs, GraphQL APIs, and integrating third-party <br />         
            services. Adept with serverless architectures, Infrastructure as Code (Terraform, CloudFormation), and eventdriven systems. <br />
            Committed to delivering robust, maintainable, and high-performance solutions.</li>
        
        </ul>
      </div>
    </div>
        
        </>
    )

}
export default WorkExperience