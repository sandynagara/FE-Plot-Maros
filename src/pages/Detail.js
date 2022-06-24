import { useEffect,useState,useContext } from 'react';
import configData from "../config/config.json"
import UserLogin from '../component/Dashboard/UserLogin';
import InformasiJumlah from '../component/Dashboard/InformasiJumlah';
import PdfContext from '../context/PDFContext';
import {AiOutlineArrowLeft} from "react-icons/ai"
import InformasiPengajuan from '../component/Detail/InformasiPengajuan';
import InformasiStatusTanah from '../component/Detail/InformasiStatusTanah';
import InformasiGeometryTanah from '../component/Detail/InformasiGeometryTanah';
import InformasiPemohon from '../component/Detail/InformasiPemohon';
import { useParams } from 'react-router-dom';
import InformasiPemohonLain from '../component/Detail/InformasiPemohonLain';
import {useNavigate} from "react-router-dom"
import geojsonArea from "@mapbox/geojson-area"
import proj4 from 'proj4';
import FormPDF from '../component/PDF/FormPDF';
// import DetailPengajuan from '../DetailPengajuan';

export default function Detail() {

    const [data, setData] = useState(false)
    const [open, setOpen] = useState(false)
    const [takeScreenshot, setTakeScreenshoot] = useState(false)
    const [openPDF, setOpenPdf] = useState(false)
    const [imageScreenshoot, setImageScreenshoot] = useState(false)
    const {setDataPdf} = useContext(PdfContext);
    

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      const url = configData.Developer_API + "pengajuan/"+params["id"]
      fetch(url,{
          method:"GET",
          credentials:"include"
      }).then(res=>res.json()).then((res)=>{
        setData(res)
      }).catch(err=>console.log(err))
    }, [])

    // useEffect(() => {
      
    //   if(imageScreenshoot){
    //     var firstProjection = '+proj=longlat +datum=WGS84 +no_defs';
    //     var secondProjection = "+proj=utm +zone=50 +south +datum=WGS84 +units=m +no_defs";
    //     var dataBaru = data
    //     var koordinatTM3 = proj4(firstProjection,secondProjection,data["bidang_tanah"]["coordinates"][0][0][0])
    //     dataBaru["gambarBidang"] = imageScreenshoot
    //     dataBaru["koordinatTM3"] = koordinatTM3
    //     dataBaru["luas"] = geojsonArea.geometry(dataBaru["bidang_tanah"]).toFixed(2)
    //     setDataPdf(dataBaru)
    //     navigate("/pdf");
    //   }
    // }, [imageScreenshoot])
    
    
    const createPDF = () => {
      setOpenPdf(true)
    }

  return (
        <div className='bg-gray-200 w-screen min-h-screen h-full flex flex-col px-10 py-5 text-left'>
          <UserLogin/>
          <div className='p-5 rounded-md bg-white'>
          <div className='flex items-center'>
              <AiOutlineArrowLeft className='mr-3 cursor-pointer' onClick={()=>navigate(-1)}/>
              <InformasiJumlah text={"Detail Pengajuan"}/>
          </div>

          {data &&
            <div>
              <InformasiPengajuan data={data} pdf={createPDF}/>
              <InformasiPemohon data={data}  open={open} setOpen={setOpen}/>
              {data && data["ktp_kuasa"] &&   <InformasiPemohonLain data={data}  open={open} setOpen={setOpen}/>}
              <InformasiStatusTanah data={data} open={open} setOpen={setOpen}/>
              <InformasiGeometryTanah data={data} open={open} setOpen={setOpen} setImageScreenshoot={setImageScreenshoot} takeScreenshot={takeScreenshot} setTakeScreenshoot={setTakeScreenshoot}/>
              {openPDF && <FormPDF data={data} setDataPdf={setDataPdf} setOpenPdf={setOpenPdf}/>}
            </div>
          }
          </div>
        </div>
  )
}
