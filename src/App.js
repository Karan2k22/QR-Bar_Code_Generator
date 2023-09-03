import React from 'react';
import Home from './screens/home/Home';
import "./App.css";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import BarCode from './screens/barCode/BarCode';
import BarCodeSeries from './screens/barCode/BarCodeSeries';
import QrCode from './screens/qrCode/QrCode';
import Footer from "./screens/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barcode" element={<BarCode />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/barcodeseries" element={<BarCodeSeries />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
