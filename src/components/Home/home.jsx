import { useNavigate } from "react-router-dom"

const Home=()=>{
const navigate = useNavigate()

const handleSearch=(e)=>{
e.preventDefault()
  navigate('/signin')
}



return(
<>
<form onSubmit={handleSearch}>
<input 
 type="text"
 placeholder="search Home,Contacts..."
 style={{borderRadius:20,width:"100%",height:40}}
 


/>
<button type="submit">search</button>
</form>



<div>
    <h1 style={{ textAlign: 'left', marginTop: '100px', marginLeft: '40px' }}>Hi All, I'm PREMDAS</h1>
   <h2 style={{ textAlign: 'left', 
   marginTop: '50px', marginLeft: '40px', 
   opacity: 0.6 }}>
  A passionate Full Stack Software Developer 🚀 <br />
  having an experience of building Web <br />
  with JavaScript / Reactjs / Nodejs <br />
  and some other cool libraries and frameworks
</h2>

</div>
</>
)

}
export default Home