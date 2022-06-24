import React,{useMemo,useState,useEffect} from 'react'
import InformasiJumlah from '../component/Dashboard/InformasiJumlah'
import UserLogin from '../component/Dashboard/UserLogin'
import TambahPengguna from '../component/Pengguna/TambahPengguna'
import configData from "../config/config.json"
import TableDashboard from '../component/Utils/TableDashboard'
import EditDeletePengguna from '../component/Pengguna/EditDeletePengguna'

function Pengguna() {

    const [tambah, setTambah] = useState(false)
    const [data, setData] = useState(false)

    useEffect(() => {
      const url = configData.Developer_API + "user"
      fetch(url,{
          method:"GET",
          credentials:"include"
      }).then(res=>res.json()).then(res=>{
            console.log(res["MSG"])
            if(res["MSG"].length > 0){
                var data = []
                res["MSG"].map(dataDetail=>{
                    data.push({
                        kelas: dataDetail["kelas"],
                        nama:  dataDetail["nama"],
                        username:  dataDetail["username"],
                        aksi: <EditDeletePengguna username={dataDetail["username"]} nama={dataDetail["nama"]} kelasPengguna={dataDetail["kelas"]}/>,
                    })
                })
                setData(data)
            }
      }).catch(err=>console.log(err))
    }, [])
    

    const columns = useMemo(
        () => [
        {
            Header: 'Username',
            accessor: 'username', 
        },
        {
            Header: 'Nama Lengkap',
            accessor: 'nama',
        },
        {
            Header: 'Kelas',
            accessor: 'kelas',
        },
        {
            Header: 'Aksi',
            accessor: 'aksi',
        }
        ],
        []
    )



  return (

        <div className='bg-gray-200 w-screen min-h-screen h-full flex flex-col px-10 py-5'>
        <UserLogin/>
        {tambah && <TambahPengguna setTambah={setTambah}/>}
        <div className='p-5 rounded-md bg-white'>
            <div className='flex items-center relative'>
                <InformasiJumlah text={"Daftar User"}/>
                <div className='bg-sky-500 hover:bg-sky-700 cursor-pointer py-1 px-3 rounded-md font-medium text-white right-0 absolute'
                    onClick={()=>setTambah(true)}
                >
                    Tambah
                </div>
            </div>
            {data && data !== [] && <TableDashboard columns={columns} data={data}/>}
        </div>
      </div>
  )
}

export default Pengguna