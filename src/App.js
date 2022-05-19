
import './App.css';
import Login from "./pages/Login";
import {Routes, Route,BrowserRouter,Navigate    } from "react-router-dom";
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
