import React , {useState} from 'react'
import "./BarCode.scss"
import Barcode from "react-barcode"

const BarCode_Page = () => {

  const [input_val, setinput_val] = useState("");
  const [barcode_value, setbarcode_value] = useState("ABCD-1234567");


  const generate = () => {
    alert("Refresh")
    setbarcode_value(input_val)
  }
  return (
    <>
    <h1>Bar Code</h1>
    <div className='main_container'>
      <div className='container1'>
        <textarea  placeholder='Enter Value' value={input_val} onChange={((val) => {
          setinput_val(val.target.value);
        })}/>
        <div className='refresh_btn'><button type="button" onClick={generate}><i>Refresh</i></button></div>
      </div>
      <div className='container2'>
      <Barcode value={barcode_value} />
      </div>
    </div>
    </>
  )
}

export default BarCode_Page