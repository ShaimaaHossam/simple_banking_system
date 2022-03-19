import "./App.css";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Customers from "./components/Customers";
import Transfer from "./components/Transfer";
import Info from "./components/Info";
import {useEffect, useState} from 'react'
import axios from 'axios'
function App() {
  
  const [customers, setCustomers] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/customers')
      .then(response =>{
        if(response.data.length > 0){
            setCustomers(response.data)
        }
  })
  }, [])
  
  
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/ViewCustomers"  element={<Customers customers={customers} />} />
        <Route path="/ViewCustomers/:id"  element={<Info /> } />
        <Route path="/Transfer"  element={<Transfer />} />
      </Routes>
    </Router>
  );
}
export default App;
