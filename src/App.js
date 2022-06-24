
import './App.css';
import Login from "./pages/Login";
import { useState  } from "react";
import {Routes, Route,BrowserRouter    } from "react-router-dom";
import Main from './pages/Main';
import PdfView from './component/PDF/PdfView';
import PDFContext from "./context/PDFContext"

function App() {

  const [dataPdf, setDataPdf] = useState(false)

  return (
    <div className="App">
      <PDFContext.Provider value={{dataPdf,setDataPdf}}>
        <BrowserRouter >
          <Routes >
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Main  />} />
            <Route path="/pdf" element={<PdfView/>} />
          </Routes>
        </BrowserRouter>
      </PDFContext.Provider>
    </div>
  );
}

export default App;
