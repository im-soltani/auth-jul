import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getAuthUser } from './redux/actions';
import './App.css';
import Dashboard from "./components/pages/Dashboard"
import Home from "./components/pages/Home"
import {Routes ,Route} from "react-router-dom"
import AppNavBar from "./components/AppNavBar"
function App() {
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAuthUser())
},[])
  return (
    <div className="App">
      <AppNavBar />
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
    </div>
  );
}

export default App;
