import React, { useState } from "react";
import "./BarCodeSeries.scss";
import Barcode from "react-barcode";

const BarCodeSeries = () => {
  const [prefix_value, setprefix_value] = useState("");
  const [start_value, setstart_value] = useState(0);
  const [end_value, setend_value] = useState(0);
  const [series, setseries] = useState([]);

  const [show, setShow] = useState(true); // Example state management
  console.log("series", series);


  const generate = () => {
    if (prefix_value && start_value && end_value) {
      if (end_value >= start_value) {
        setShow(true); // Show loading state before generating the series
  
        let arr = [];
        for (let index = start_value; index <= end_value; index++) {
          arr = [...arr, prefix_value + index];
        }
        
        setseries(arr);
        setShow(false); // Hide loading state after generating the series
      }
    }
    alert("Hi");
  };
  
//   const generate = () => {
   
//     let arr = [];
//     if (prefix_value && start_value && end_value) {
//       if (end_value > start_value) {
//           for (let index = start_value; index <= end_value; index++) {
//             setshow(true);
//           arr = [...arr, prefix_value + [index]];
//         }
//         setseries(arr);
//         setshow(false);

//       }
//     }
//     alert("Hi");
//   };

  return (
    <>
      <div className="s_main_container">

      <div style={{ display: show ? "block" : "none" }} className="modal">
  Modal
</div>

        {/* <div style={{visibility: show ? "visible" : "hidden"}} className="modal">Modal</div> */}
        <div className="info_container">
          <h3>Generate Bar Code Series</h3>
          <div className="info_container_child">
            <div>
              <label>Enter Prefix Value</label>
              <br />
              <input
                type="text"
                value={prefix_value}
                onChange={(e) => {
                  setprefix_value(e.target.value);
                }}
              />
            </div>

            <div>
              <label>Enter Start Value</label>
              <br />
              <input
                type="number"
                min={0}
                value={start_value}
                onChange={(e) => {
                  setstart_value(e.target.value);
                }}
              />
            </div>

            <div>
              <label>Enter End Value</label>
              <br />
              <input
                type="number"
                min={0}
                value={end_value}
                onChange={(e) => {
                  setend_value(e.target.value);
                }}
              />
            </div>

            <div>
              <button type="button" onClick={generate}>
                {" "}
                Generate Series
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="barcode_container">
        <h2>Bar Series are :</h2>

        {series.map((item, index) => {
          return <Barcode value={item} />;
        })}
      </div>
    </>
  );
};

export default BarCodeSeries;
