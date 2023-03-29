import "./App.css";

import {NavLink, BrowserRouter, Route, Routes } from  "react-router-dom"
import MainA from "./Components/klausymas/MainA"
import MainO from "./Components/atsakymas/MainO"
function App() {

  
  return (
    <div className="App">
    
    <BrowserRouter>
    <nav>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/atsakymas" > atsakymas</NavLink>
      </nav>
    <Routes>
      <Route path="/" element={<MainA/>}></Route>
      <Route path="/atsakymas" element={<MainO/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
