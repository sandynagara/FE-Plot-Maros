
import './App.css';
import Login from "./pages/Login";
import {Routes, Route,BrowserRouter    } from "react-router-dom";
import Main from './pages/Main';
import PDF from "./component/PDF/PDF"
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
      {/* <PDFViewer>
        <PDF />
      </PDFViewer> */}
    </div>
  );
}

export default App;
