import React from 'react'
import Home from './screens/home/Home'
import "./App.css"
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
 import BarCode from './screens/barCode/BarCode';
import BarCodeSeries from './screens/barCode/BarCodeSeries';
import QrCode from './screens/qrCode/QrCode';


const App = () => {
  return (
    <>
      <Router>
       <Routes >
         <Route exact  path='*' element={<Home/>}/>
         <Route path='/?barcode' element={<BarCode/>}/>
         <Route path='/?QrCode' element={<QrCode/>}/>
         <Route path='/?BarCodeSeries' element={<BarCodeSeries/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App