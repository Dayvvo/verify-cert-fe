import './App.css';
import Login from './Login';
import Upload from './Upload';
import Verify from './Verify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={ <Register/> } />
          <Route path="/" element={ <Verify/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="home" element={ <Upload/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
