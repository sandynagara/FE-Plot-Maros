import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import {Link,useNavigate} from "react-router-dom"
import Logo from "../images/Logo.png"
import configData from "../config/config.json"
import Swal from "sweetalert2"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const login = () => {
    console.log(username,password)
    const url = configData.Developer_API+"login"
    console.log(url)
    fetch(url,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body:JSON.stringify({
        username:username,
        password:password
      }),
      credentials:"include",
    }).then(res=>res.json()).then(res=>{
      if(res["RTN"]){
        Swal.fire({
          icon: 'success',
          title: res["MSG"],
        })
        navigate("/dashboard");
      }else{
        Swal.fire({
          icon: 'error',
          title: res["MSG"],
      })
      }
    }).catch(err=>console.log(err))
  }

  return (
     <div className='w-screen bg-slate-600 h-screen flex justify-center items-center'>
        <div className=" h-3/5 bg-white  rounded-md flex">
          <div className='bg-sky-700 h-full w-[300px] flex justify-center items-center flex-col'>
            <img src={Logo} className="w-28 h-28"/>
            <div className='text-sm text-white text-center font-medium mt-5'>Kantor Badan Pertanahan<br/>Kabupaten Maros</div>
          </div>
          <div className='h-full w-[400px] flex justify-center items-center flex-col'>
          <div className='font-bold mb-3 text-lg'>Log In</div>
              <div className='flex flex-col w-64'>
                <div className='my-2'/>
                <TextField
                  id="standard-required"
                  label="Username"
                  size='medium'
                  margin='dense'
                  onChange={(value)=>setUsername(value.target.value)}
                />
                <div className='my-2'/>
                <TextField
                  id="standard-required"
                  label="Password"
                  size='medium'
                  margin='dense'
                  type="password"
                  onChange={(value)=>setPassword(value.target.value)}
                />
              </div>
              <div className='bg-sky-500 hover:bg-sky-700 rounded-md mt-8 w-64 font-medium text-white p-3 text-center cursor-pointer'
                  onClick={login}
              >
                Login
              </div>
          </div>
        </div>
     </div>
  )
}

export default Login