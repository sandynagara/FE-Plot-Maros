import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import {AiOutlineClose} from "react-icons/ai"
import {useNavigate} from "react-router-dom"

function FormPDF({data,setDataPdf,setOpenPdf}) {

  const [koordinatX, setKoordinatX] = useState("")
  const [koordinatY, setKoordinatY] = useState("")
  const [luas, setLuas] = useState("")
  const [fotoBidang, setFotoBidang] = useState(false)
  const [fotoBidangUrl, setFotoBidangUrl] = useState("")

  const navigate = useNavigate()

  const cetakPDF = () => {
    var dataBaru = data
    dataBaru["gambarBidang"] = fotoBidangUrl
    dataBaru["koordinatTM3"] = [koordinatX,koordinatY]
    dataBaru["luas"] = luas
    console.log(dataBaru,"databaru")
    setDataPdf(dataBaru)
    navigate("/pdf");
  }

  useEffect(() => {
    if (!fotoBidang) return;
    console.log(URL.createObjectURL(fotoBidang))
    setFotoBidangUrl(URL.createObjectURL(fotoBidang));
  },[fotoBidang]);

  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-20 flex justify-center items-center 
    w-screen min-h-max h-full rounded-md'>
      <div className='bg-white rounded-md  min-w-[400px] w-2/5 relative'>
        <div className='font-bold flex justify-center items-center text-lg py-4 border-b-2 border-gray-300'>
          Cetak PDF
          <div className='absolute right-5 top-5 cursor-pointer'
              onClick={()=>setOpenPdf(false)}
          >
            <AiOutlineClose size={20}/>
          </div>
        </div>
        <div className='py-2 px-4'>
            <TextField
                required
                id="standard-required"
                label="Koordinat X (TM3)"
                margin='dense'
                className='w-full'
                onChange={(e)=>setKoordinatX(e.target.value)}
            />
            <TextField
                required
                id="standard-required"
                label="Koordinat Y (TM3)"
                margin='dense'
                className='w-full'
                onChange={(e)=>setKoordinatY(e.target.value)}
            />
            <TextField
                required
                id="standard-required"
                label="Luas"
                margin='dense'
                className='w-full'
                onChange={(e)=>setLuas(e.target.value)}
            />
            <div className='py-2'>
              Plotting Bidang  
            </div>
            {fotoBidangUrl &&  <img src={fotoBidangUrl} className="h-[200px] my-2"/>}
            <input type="file" accept="image/*" onChange={(e)=>setFotoBidang(e.target.files[0])}/>
            <div className='w-full flex justify-end my-2'>
                <div className='px-5 py-2 cursor-pointer text-white rounded-md font-medium bg-sky-500 hover:bg-sky-800'
                  onClick={cetakPDF}
                >
                    Cetak PDF
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FormPDF