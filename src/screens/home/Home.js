import React from 'react'
import BarCode from '../barCode/BarCode'
import QrCode from '../qrCode/QrCode'
import { useNavigate } from 'react-router-dom';
import "./Home.scss";
const Home = () => {
  return (
    <div className='h_container'>
   <div className='child1'>
<div className='content'>
  <span>
    <h3>Generate QrCode & Bar for Free</h3>
    <button>Get Start!</button>
  </span>
  <span style={{background:"white"}}>Image</span>
</div>
   </div>

   <div className='child2'>
    <div className='child2_content'></div>

</div>


<div className='child3'>

</div>
    </div>
  )
}

export default Home