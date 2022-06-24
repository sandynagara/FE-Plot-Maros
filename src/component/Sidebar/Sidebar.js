import React from 'react'
import ButtonSidebar from './ButtonSidebar'
import {MdDashboard} from "react-icons/md"
import {AiOutlinePoweroff} from "react-icons/ai"
import {FaUsers,FaMap,FaUserCircle} from "react-icons/fa"
import { Link,useNavigate } from 'react-router-dom'

function Sidebar({data}) {

    const navigate = useNavigate()

    const logOut = () => {
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate("/login");
    }

  return (
      <div style={{width:"270px"}}>
        <div  style={{width:"240px",backgroundColor:"#24344B"}} className='fixed flex flex-col items-center h-screen  min-h-full  left-0 top-0'>
            
            <div style={{backgroundColor:"rgb(43,60,88)"}} className='rounded-md  w-full h-full text-center'>
            <ButtonSidebar judul={data["nama"]} icon={<FaUserCircle size={20}/>}/>
                <Link to={"/peta"}>
                    <ButtonSidebar judul={"Map View"} icon={<FaMap size={20}/>}/>
                </Link>

                <Link to={"/dashboard"}>
                    <ButtonSidebar judul={"Daftar Pengajuan"} icon={<MdDashboard size={20}/>}/>
                </Link>

                <Link to={"/admin"}>
                    <ButtonSidebar judul={"Pengguna"} icon={<FaUsers size={20}/>}/>
                </Link>

                <div className='absolute bottom-0 w-full' onClick={logOut}>
                    <ButtonSidebar judul={"Log Out"}  icon={<AiOutlinePoweroff size={20}/>}/>
                </div>
            </div>
            <div>

            </div>
        </div>
      </div>
    
  )
}

export default Sidebar