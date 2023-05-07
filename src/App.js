import './App.css';
import Login from './Login';
import Upload from './Upload';
import Found from './Found';
import Verify from './Verify';
import NotFound from './NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Verify/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="home" element={ <Upload/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
