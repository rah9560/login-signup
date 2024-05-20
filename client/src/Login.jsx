import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const mystyle={
        position:"absolute",
        left:"750px",
        top:"220px"
    }

    const navigate=useNavigate()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    
    const handleSubmit= (e)=>{
        e.preventDefault()   
        axios.post("http://localhost:3001/login",{email,password})
        .then(result=> 
            {console.log(result)
                if(result.data==="success"){
                    navigate("/home")
                }else{
                    console.log("chutiya");
                }
                    
    })

        .catch(error=>console.log(error))
            }
  return (
    <div>
        <div className="container">
        <form style={mystyle} onSubmit={handleSubmit} >
            <h1>Login</h1>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={(e)=>{setemail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={(e)=>{setpassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 d-flex flex-column">
        <button type="submit" className="btn btn-success mt-3 ">Login</button>
        <Link to="/" type="submit" className="btn btn-primary mt-2 ">Not an member signup please</Link>
        </div>
      </form>
        </div>
        
    </div>
  )
}

export default Login