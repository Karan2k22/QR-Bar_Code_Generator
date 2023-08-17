import React, { useState } from "react";
import "./QrCode.scss";
import { QRCode } from "react-qrcode-logo";

const QrCode = () => {
  const [qr_value, setqr_value] = useState("");
  const [setqr_val, setsetqr_val] = useState("");
  const [qr_style, setqr_style] = useState("squares");
  const [qr_color, setqr_color] = useState("black");
  const [qr_logo, setqr_logo] = useState("");
  console.log("qr logo", qr_logo);

  const create_qr = () => {
    setsetqr_val(qr_value);
  };
  return (
    <div className="body1">
      <h1>QR CODE</h1>

      <div className="center_container">
        <div className="section1">
          <div className="qr_container">
            <QRCode
              value={setqr_val}
              size="250"
              //  bgColor={qr_color}
              fgColor={qr_color}
              qrStyle={qr_style}
              logoImage={qr_logo}
              logoWidth= {75}
              logoHeight= {35}
              logoOpacity={1}
            />
            <div style={{ width: "" }}>
              <label>Enter URL / Value</label>
              <input
                style={{ width: "100%" }}
                value={qr_value}
                onChange={(e) => {
                  setqr_value(e.target.value);
                }}
                placeholder="https://ABCD.com"
              />
            </div>

            <button
              style={{
                padding: "6px",
                color: "white",
                background: "black",
                fontWeight: "600",
                cursor:"pointer"
              }}
              type="button"
              disabled={qr_value == ""}
              onClick={create_qr}
            >
              Create QR Code
            </button>
          </div>
        </div>
        <div className="section2">
          <div className="sub_section">
            <h2>Generate QR Code</h2>

            <div className="qr_style">
              <p>QR With Logo</p>
              <div className="style_container">
                <span>
                  <input
                    type="file"
                    onChange={(e) => {
                      const selectedFile = e.target.files[0];
                      if (selectedFile) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const base64String = event.target.result;
                          setqr_logo(base64String);
                        };
                        reader.readAsDataURL(selectedFile);
                      }
                    }}
                  />
                </span>
                {qr_logo && 
                  <button style={{border:"none", color:"red", fontWeight:"600", background:"none", cursor:"pointer"}} type="button" onClick={() => {
                    setqr_logo("");
                  }}>Clear</button>
                }
              
              </div>
            </div>

            <div className="qr_style">
              <p>Style</p>
              <div className="style_container">
                <span>
                  <button
                    className={qr_style === "squares" ? "s_btn1" : ""}
                    type="button"
                    onClick={() => setqr_style("squares")}
                  >
                    Squares
                  </button>
                </span>
                <span>
                  <button
                    className={qr_style === "dots" ? "s_btn1" : ""}
                    type="button"
                    onClick={() => setqr_style("dots")}
                  >
                    Dots
                  </button>
                </span>
              </div>
            </div>

            <div className="qr_color">
              <p>Color</p>
              <div className="colos_container">
                <button
                  style={{
                    background: "red",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "red" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("red")}
                ></button>

                <button
                  style={{
                    background: "blue",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "blue" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("blue")}
                ></button>

                <button
                  style={{
                    background: "green",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "green" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("green")}
                ></button>

                <button
                  style={{
                    background: "gray",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "gray" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("gray")}
                ></button>
              </div>
            </div>

            <div className="download_container">
              <button
                className="download_btn"
                disabled={qr_value === ""}
                onClick={() => alert("click")}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
