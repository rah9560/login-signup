import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Signup = () => {
    const mystyle={
        position:"absolute",
        left:"750px",
        top:"220px"
    }
    const navigate=useNavigate()
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    
    const handleSubmit=(e)=>{
        e.preventDefault()   
        axios.post("http://localhost:3001/",{name,email,password})
        .then(result=> 
            {console.log(result)
            navigate("/login")})
        .catch(error=>console.log(error))
    }
  return (
    <div>
       
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <h3>Email:</h3>
            <input type="text" placeholder='type your email' onChange={(e)=>{setemail(e.target.value)}} />
            <h3>Name:</h3>
            <input type="text" placeholder='type your name' onChange={(e)=>{setname(e.target.value)}} />
            <h3>Password:</h3>
            <input type="text"  placeholder='Type ypur password' onChange={(e)=>{setpassword(e.target.value)}}/>
            <button type="submit" >Signup or register</button>
            <Link to="/login"> Already a customer</Link>
            </form>   
       
    </div>
  )
}

export default Signup