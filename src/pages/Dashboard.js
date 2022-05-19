import {useMemo,useEffect,useState } from 'react'
import StatusProcess from '../component/Utils/StatusProcess';
import UserLogin from '../component/Dashboard/UserLogin';
import DetailButton from '../component/Dashboard/DetailButton';
import InformasiJumlah from '../component/Dashboard/InformasiJumlah';
import configData from "../config/config.json"
import TableDashboard from "../component/Utils/TableDashboard";
// import DetailPengajuan from '../DetailPengajuan';

export default function Dashboard() {

    var [dataTable, setDataTable] = useState([])

    const columns = useMemo(
        () => [
        {
            Header: 'Tanggal',
            accessor: 'tanggal', // accessor is the "key" in the data
        },
        {
            Header: 'NIB',
            accessor: 'nib',
        },
        {
            Header: 'Pemilik',
            accessor: 'pemohon',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        
        {
            Header: 'Petugas',
            accessor: 'petugas_cek',
        },
        
        
        {
            Header: 'Detail',
            accessor: 'detail',
        },
        ],
        []
    )

    useEffect(() => {
        const url = configData.Developer_API+"pengajuan"
        fetch(url,{
            method: 'GET',
            credentials: 'include'
        }).then(res=>res.json()).then((res)=>{
            if(res.length > 0){
                var data = []
                res.map(dataDetail=>{
                    data.push({
                        tanggal: dataDetail["tanggal"],
                        nib:  dataDetail["nib"],
                        pemohon:  dataDetail["User"]["nama"],
                        status: <StatusProcess status = { dataDetail["status"]}/>,
                        petugas_cek:  dataDetail["petugas_cek"],
                        detail: <DetailButton id={dataDetail["id"]}/>,
                    })
                })
                setDataTable(data)
            }
            
        }).catch(err=>console.log(err))
    }, [])
  

  return (

      <div className='bg-gray-200 w-screen min-h-screen h-full flex flex-col px-10 py-5'>
      <UserLogin/>
      <div className='p-5 rounded-md bg-white'>
        <InformasiJumlah text={"Daftar Pengajuan Bidang Tanah"}/>
            <TableDashboard data={dataTable} columns={columns}/>
        </div>
      </div>

  )
}
