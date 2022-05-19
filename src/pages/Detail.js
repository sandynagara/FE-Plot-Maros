import { useEffect,useState } from 'react';
import configData from "../config/config.json"
import UserLogin from '../component/Dashboard/UserLogin';
import InformasiJumlah from '../component/Dashboard/InformasiJumlah';
import Sidebar from '../component/Sidebar/Sidebar';
import {AiOutlineArrowLeft} from "react-icons/ai"
import InformasiPengajuan from '../component/Detail/InformasiPengajuan';
import InformasiStatusTanah from '../component/Detail/InformasiStatusTanah';
import InformasiGeometryTanah from '../component/Detail/InformasiGeometryTanah';
import InformasiPemohon from '../component/Detail/InformasiPemohon';
import { Link,useParams } from 'react-router-dom';
import InformasiPemohonLain from '../component/Detail/InformasiPemohonLain';
import ActionDetail from '../component/Detail/ActionDetail';
// import DetailPengajuan from '../DetailPengajuan';

export default function Detail() {

    const [data, setData] = useState(false)
    const [open, setOpen] = useState(false)

    const params = useParams()
    useEffect(() => {
      const url = configData.Developer_API + "pengajuan/"+params["id"]
      console.log(url)
      fetch(url,{
          method:"GET",
          credentials:"include"
      }).then(res=>res.json()).then((res)=>{
        console.log(res)
        setData(res)
      }).catch(err=>console.log(err))
    }, [])
    

  return (

        <div className='bg-gray-200 w-screen min-h-screen h-full flex flex-col px-10 py-5 text-left'>
        <UserLogin/>
        <div className='p-5 rounded-md bg-white'>
        <div className='flex items-center'>
            <Link  to="/dashboard">
                <AiOutlineArrowLeft className='mr-3 cursor-pointer'/>
            </Link>
            <InformasiJumlah text={"Detail Pengajuan"}/>
        </div>

        {data &&
          <div>
            <InformasiPengajuan data={data}/>
            <InformasiPemohon data={data}  open={open} setOpen={setOpen}/>
            {data && data["ktp_kuasa"] &&   <InformasiPemohonLain data={data}  open={open} setOpen={setOpen}/>}
            <InformasiStatusTanah data={data} open={open} setOpen={setOpen}/>
            <InformasiGeometryTanah data={data} open={open} setOpen={setOpen}/>
          </div>
        }
        </div>
        </div>
  )
}
