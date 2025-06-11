
import { Link } from 'react-router-dom'
import logo from '../../assets/aws logo.jpeg'
const Certifications=()=>{
    return(
        <>
        <h1>Certification</h1>
        <div className="certification-card">
        <img
            src={logo}
            alt="AWS Certified Developer Associate"
            className="certification-image"
        />

        <h2 className="certification-title">AWS Certified Developer – Associate</h2>
        <p className="certification-description">
            Successfully completed the AWS Certified Developer – Associate exam in 2025, <br /> 
            demonstrating hands-on expertise in AWS services, deployment, debugging, and cloud-native application development.
        </p>

        <div className="certification-links">
            <span className="certification-badge">Certification</span>
            <span className="certification-badge">Issued: 2025</span>

        </div>

            <div style={{marginTop:9}}>
  <a
    href="https://www.credly.com/badges/52747f3d-3abb-4855-97bc-c3b0b5f4f669"
    target="_blank"
    rel="noopener noreferrer"
    
  >
    View Credential
  </a>
</div>


        </div>
 


        </>
    )

}
export default Certifications