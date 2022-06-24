import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import {useNavigate,Link} from "react-router-dom"
import Logo from "../images/Logo.png"
import BackgroundImage from "../images/background.jpg"
import configData from "../config/config.json"
import Swal from "sweetalert2"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  
  const login = () => {
    const url = configData.Developer_API+"login"
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
      if(res["RTN"] && res["status"]==="admin"){
        Swal.fire({
          icon: 'success',
          title: res["MSG"],
        })
        navigate("/dashboard");
      }else{
        Swal.fire({
          icon: 'error',
          title: "Login Gagal",
      })
      }
    }).catch(err=>console.log(err))
  }

  return (
     <div className='w-screen bg-slate-600 h-screen flex justify-center items-center'>
        <div className=" h-[450px] bg-white  rounded-md flex z-10">
          <div className='bg-sky-700 h-full w-[300px] flex justify-center items-center flex-col'>
            <img src={Logo} className="w-28 h-28"/>
            <div className='text-sm text-white text-center font-medium mt-5'>Kantor Badan Pertanahan<br/>Kabupaten Maros</div>
          </div>
          <div className='h-full w-[400px] flex justify-center items-center flex-col'>
          <div className='font-bold mb-3 text-xl'>LOGIN</div>
              <div className='flex flex-col w-64'>
                <div className='my-2'/>
                <TextField
                  id="standard-required"
                  label="Username"
                  size='medium'
                  margin='dense'
                  onChange={(value)=>setUsername(value.target.value)}
                />
                <div className=''/>
                <TextField
                  id="standard-required"
                  label="Password"
                  size='medium'
                  margin='dense'
                  type="password"
                  onChange={(value)=>setPassword(value.target.value)}
                />
              </div>
              <div className='bg-sky-500 hover:bg-sky-700 rounded-md mt-2 w-64 font-medium text-white p-3 text-center cursor-pointer'
                  onClick={login}
              >
                Masuk
              </div>
              <Link to="/files/CekPlotMaros.apk" target="_blank" download>
                <div className='bg-white rounded-md mt-2 w-64 font-medium text-gray-600 hover:text-gray-800 border-2 border-gray-600 hover:border-gray-800 p-3 text-center cursor-pointer'
                >
                  Download APK
                </div>
              </Link>
              
          </div>
        </div>
        <div className="fixed w-screen h-screen top-0">
          <div className='bg-black w-full h-full bg-opacity-30 absolute'></div>
          <img src={BackgroundImage} className="w-full h-full"/>
        </div>
     </div>
  )
}

export default Login