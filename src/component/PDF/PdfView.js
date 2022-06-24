import React,{useContext,useEffect} from 'react';
import PdfContext from '../../context/PDFContext';
import configData from "../../config/config.json"
import { Document, Page, Text, View, StyleSheet,Image,PDFViewer } from '@react-pdf/renderer';
import {useNavigate} from "react-router-dom"
// Create styles
const styles = StyleSheet.create({
  titleFirst: {
    fontSize: 12,
    textAlign: "center",
    fontWeight:"700",
    fontFamily: "Times-Bold",
  },
  textBold: {
    margin: 1,
    fontSize: 9,
    fontFamily: "Times-Bold",
    lineHeight:"1.6 "
  },
  text: {
    margin: 1,
    fontSize: 8,
    fontFamily: "Times-Roman",
    lineHeight:"1.6 "
  },
  textPeryataan: {
    margin: 1,
    fontSize: 7,
    fontFamily: "Times-Roman",
    lineHeight:"1.6 "
  },
});

const PdfView = () => {
  const {dataPdf} = useContext(PdfContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(!dataPdf){
        navigate("/dashboard");
        console.log(dataPdf)
    }
  }, [])
  
  

  return (
  <div className='w-screen'>
    {dataPdf && 
      <PDFViewer className='w-full h-screen'>
      <Document>
        <Page size="A4" style={{paddingTop:35,paddingBottom:65,paddingHorizontal:45,display:"flex",flexDirection:"column",width:"100vw"}} wrap={false} orientation="portrait">
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/The_Agrarian_Affairs_and_Spatial_Planning_%28Indonesia%29.svg/1200px-The_Agrarian_Affairs_and_Spatial_Planning_%28Indonesia%29.svg.png" style={{width:40,height:40}}/>
          <View style={{marginLeft:10,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.titleFirst}>
              <b>PELAYANAN CEK PLOT BIDANG TANAH</b>
            </Text>
            <Text style={{fontSize:10,textAlign:"center",marginTop:3}}>
              <b>KANTOR PERTANAHAN KABUPATEN MAROS</b>
            </Text>
          </View>
        </View>
        <View style={{marginTop:30,display:"flex",flexDirection:"row",justifyContent:"center"}}>
          <Image src={configData.Developer_API+`profil/foto/${dataPdf["User"]["id"]}&${dataPdf["User"]["selfie_name"]}`} style={{width:80,height:100}}/>
          <View style={{marginLeft:15}}>
            <Text style={styles.textBold}>
              IDENTITAS PEMOHON
            </Text>
            <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
              <Text style={[{width:"30%"}]}>
                Nama
              </Text>
              <Text>
                : {dataPdf["User"]["nama"]}
              </Text>
            </View>
            <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
              <Text style={{width:"30%"}}>
                No. KTP
              </Text>
              <Text>
                : {dataPdf["User"]["nik"]}
              </Text>
            </View>
            <Text style={[styles.textBold,{marginTop:10}]}>
              IDENTITAS BIDANG TANAH
            </Text>
            <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
              <Text style={{width:"30%"}}>
                Status Tanah
              </Text>
              <Text>
                : {dataPdf["nomor_surat"]}
              </Text>
            </View>
            <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
              <Text style={{width:"30%"}}>
                Luas (m2)
              </Text>
              <Text>
                : {dataPdf["luas"]}
              </Text>
            </View>
            <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
              <Text style={{width:"30%"}}>
                Penggunaan
              </Text>
              <Text>
                : {dataPdf["peruntukan"]}
              </Text>
            </View>
          </View>
          <View>
            {dataPdf["nama_kuasa"] !== null && 
              <View style={{marginBottom:10}}>
                <Text style={styles.textBold}>
                  IDENTITAS PEMBERI KUASA
                </Text>
                <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
                  <Text style={{width:"30%"}}>
                    Nama
                  </Text>
                  <Text>
                    : {dataPdf["nama_kuasa"]}
                  </Text>
                </View>
              </View>
            } 
            
            <Text style={[styles.textBold]}>
              LETAK BIDANG TANAH
            </Text>
            <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
              <Text style={{width:"40%"}}>
                Alamat
              </Text>
              <Text>
                : {dataPdf["alamat_denah"]}
              </Text>
            </View>
            <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
              <Text style={{width:"40%"}}>
                Koordinat X (TM3) 
              </Text>
              <Text>
                : {dataPdf["koordinatTM3"][0]}
              </Text>
            </View>
            <View style={[{display:"flex",flexDirection:"row"},styles.text]}>
              <Text style={{width:"40%"}}>
                Koordinat Y (TM3) 
              </Text>
              <Text>
                : {dataPdf["koordinatTM3"][1]}
              </Text>
            </View>
          </View>
        </View>
        <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginTop:10}}>
          <Text style={styles.textBold}>PLOTTING BIDANG TANAH</Text>
          <Image src={dataPdf["gambarBidang"]} style={{width:"100%",height:280,marginTop:5}}/>
        </View>
    
        <View style={{marginTop:10}}>
          <Text style={styles.textPeryataan}>PERNYATAAN</Text>
          <Text style={styles.textPeryataan}>1. Pelayanan cek plot bidang tanah ini bukan tanda bukti Hak/Pemilikan</Text>
          <Text style={styles.textPeryataan}>2. Lokasi dan penggunaan tanah yang ditunjukkan kepada petugas Kantor Pertanahan Kabupaten Maros dalam rangka permohonan Hak atau Pembaharuan data
  dilandasi dengan itikad baik dan tidak mengambil hak/kepunyaan siapapun</Text>
          <Text style={styles.textPeryataan}>3. Lokasi yang ditunjukkan akan dipelihara tanda batasnya, dengan memperhatikan kepemilikan pihak yang berbatasan</Text>
          <Text style={styles.textPeryataan}>4. Plotting bidang tanah merupakan hasil deliniasi sesuai penunjukan pemohon pada peta digital</Text>
          <Text style={styles.textPeryataan}>5. Pemohon menjamin sepenuhnya bahwa tanah yang dimiliki dan tunjukkan benar dikuasai serta tidak daam keadaan sengketa</Text>
          <Text style={styles.textPeryataan}>6. Pemohon bertanggung jawab baik secara pidana maupun perdata tanpa melibatkan pihak lain, atas segala permasalahan dan/atau resiko hukum yang mungkin
  terjadi kemudian harl, apabia terjadi kesalahan penunjukan yang diakukan oleh pemohon dalam pelayanan ini</Text>
        </View>
  
        <View style={{display:"flex",flexDirection:"row",marginTop:15}}>
          <View style={{width:"40%",fontSize:8,textAlign:"center"}}>
            <Text>Maros,   /    /2022</Text>
            <Text>Yang membuat pernyataan,</Text>
            <Text>Pemohon</Text>
            <Text style={{marginTop:40}}>{dataPdf["User"]["nama"]}</Text>
            <Text style={{marginLeft:-50,marginTop:5}}>No. Telp : {}</Text>
          </View>
          <View  style={{width:"50%",fontSize:7}}>
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{padding:5,width:"40%",borderTop: '1px solid black',borderBottom:'1px solid black',borderLeft:'1px solid black'}}>NOMOR PEMETAAN</Text>
              <Text style={{padding:5,width:"60%",border: '1px solid black'}}></Text>
            </View> 
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{padding:5,width:"40%",borderTop: '1px solid black',borderBottom:'1px solid black',borderLeft:'1px solid black'}}>TANGGAL PEMETAAN</Text>
              <Text style={{padding:5,width:"60%",border: '1px solid black'}}>{dataPdf["tanggal"]}</Text>
            </View> 
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text  style={{padding:5,width:"40%",borderTop: '1px solid black',borderBottom:'1px solid black',borderLeft:'1px solid black'}}>PETUGAS PEMETAAN</Text>
              <Text  style={{padding:5,width:"60%",border: '1px solid black'}}>{dataPdf["petugas_pencatat"]}</Text>
            </View> 
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={{padding:5,width:"40%",borderTop: '1px solid black',borderBottom:'1px solid black',borderLeft:'1px solid black'}}>PETUGAS CEK LOKASI</Text>
              <Text style={{padding:5,width:"60%",border: '1px solid black'}}>{dataPdf["petugas_cek"]}</Text>
            </View> 
          </View>
        </View>
        </Page>
      </Document>
      </PDFViewer>
    }

  </div>)
}
 
  


export default PdfView
