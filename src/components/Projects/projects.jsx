
 import logo from '../../assets/small.svg'

const Project=()=>{
    return(
        <>
<div className="project-card">
  <div className="project-header">
    <h1 className="project-section-title">Client Project</h1>
  </div>

  <div className="project-content">
     <div className="project-title-row">
      <p className="project-title">Project: 1800 Spirits (US-Based Marketplace)</p>
      <div className="project-logo">
        <img src={logo} alt="1800 Spirits Logo" />
      </div>
    </div>

    <ul className="project-details">
      <li>
        Led end-to-end development of a scalable B2C marketplace using React.js, Redux, and Chakra UI, resulting in a 30% increase in user engagement.<br />
        ▪ Built reusable UI components and advanced state management, improving UX and code maintainability.<br />
        ▪ Designed and implemented a serverless, event-driven backend with AWS Lambda, AppSync (GraphQL), and EventBridge.<br />
        ▪ Integrated OAuth 2.0 with social logins and data privacy best practices.<br />
        ▪ Integrated third-party APIs: Stripe, DoorDash, and SNS.<br />
        ▪ Automated CI/CD with AWS CloudFormation.<br />
        ▪ Monitored with AWS CloudWatch.<br />
        ▪ Agile collaboration with sprints, reviews, and documentation.
      </li>
      <li>
        Website: <a href="https://1800spirits.com/" target="_blank" rel="noopener noreferrer">https://1800spirits.com/</a>
      </li>
    </ul>
  </div>
</div>




        
        </>
    )

}
export default Project