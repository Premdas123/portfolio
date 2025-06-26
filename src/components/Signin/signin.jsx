import React,{useState,useEffect} from "react"


const Signin=()=>{
const[showform,setShowform]=useState(false)

const handleSignin=()=>{
setShowform(true)
}
const handleSubmit=(e)=>{
  e.preventDefault()
}
const handleSignInSubmit=()=>{
    
}

// useEffect(()=>{
//     setShowform(true)
// },[])


    return (
    <>
    <div >
    
     <h2>Sign in page</h2>
     <button onClick={handleSignin}> Signin</button>
     {
        showform &&(
            <div className="form-container">
      <h2 className="form-heading">Sign In</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="text" className="form-input" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label className="form-label">Contact</label>
          <input type="text" className="form-input" placeholder="Enter contact number" />
        </div>

        <div className="form-group">
          <label className="form-label">First Name</label>
          <input type="text" className="form-input" placeholder="Enter firstname" />
        </div>

        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-input" placeholder="Enter lastname" />
        </div>

        <button type="submit" className="form-button" onClick={handleSignInSubmit}>Submit</button>
      </form>
    </div>
        )

     }
    

    </div>

    </>
    )
    
}

export default Signin
