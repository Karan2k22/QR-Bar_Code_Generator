import React from "react";
import BarCode from "../barCode/BarCode";
import QrCode from "../qrCode/QrCode";
import { useNavigate } from "react-router-dom";
import { GrDownload } from "react-icons/gr";
import { AiOutlineQrcode } from "react-icons/ai";
import { BsQrCode, BsQrCodeScan } from "react-icons/bs";
import { IoIosBarcode } from "react-icons/io";
import "./Home.scss";

import { LuUpload } from "react-icons/lu";
const Home = () => {
  const natigate = useNavigate();
  return (
    <div className="h_container">
      <div className="child1">
        <div className="content">
          <div className="content_text">
            <h1>Generate QrCode & BarCode for Free!</h1>

            <p>
              Make your custom QR codes by adding your own URLs to the Adobe
              Express free online QR code generator. It’s a faster and easier
              way for clients to visit your website, social media accounts, and
              other online resources. Plus, having QR codes on all your
              collateral will help boost customer engagement and experience.
              Just enter a URL and you’ll get your QR code in a few taps!
            </p>
            <div className="btn_container">
              <button
                className="btn1"
                onClick={() => {
                  natigate("/qrcode");
                }}
              >
                Create QR Code Now
              </button>
              <button
                className="btn2"
                onClick={() => {
                  natigate("/barcode");
                }}
              >
                Create Bar Code Now
              </button>
            </div>
          </div>
          <div className="content_image">
            <BsQrCode size={155} />
            <BsQrCode size={155} />
          </div>
        </div>
      </div>

      <div className="step_containr">
        <div className="step_header">
          <h2>How to instantly generate a QR code online.</h2>
        </div>

        <div className="step_child">
          <section className="step_card">
            <div>
              <LuUpload size={32} />
              <h4>1. Enter a link or URL.</h4>
            </div>
            <div style={{ margin: "20px" }}>
              <p>
                Open our online QR code generator. Then, input your website URL
                and tap the “Create QR Code” button. A new QR code will
                instantly be displayed. Pro tip: to ensure your link is
                accurate, paste your URL instead of manually typing it in the
                field.
              </p>
            </div>
          </section>
          <section className="step_card">
            <div>
              <AiOutlineQrcode size={32} />
              <h4>2. Personalize your design.</h4>
            </div>
            <div style={{ margin: "20px" }}>
              <p>
                Customise your free online QR code to match your branding by
                choosing from two styles and five colours. Want to track your QR
                code scans or usage statistics? Try making a few versions in
                different formats so you can monitor each one.
              </p>
            </div>
          </section>
          <section className="step_card">
            <div>
              <GrDownload size={32} />
              <h4>3. Download QR code.</h4>
            </div>
            <div style={{ margin: "20px" }}>
              <p>
                Once you’re happy with how your QR code looks, you have the
                option to download it in three different file types depending on
                your needs — PNG, JPG, or SVG. Planning to adjust the QR code
                size without sacrificing on the resolution? We suggest
                downloading the SVG format as vector files are also easier to
                scale.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="child2">
        <div className="qr_des_container">
          <div className="qr_des">
            <p>
            <h4>Get your free Custom QR Code Generator with Color Options</h4>
              Our Custom QR Code Generator is a user-friendly online tool that
              empowers users to create unique QR codes with custom designs and a
              choice of four distinct color options. QR codes have become an
              essential part of modern communication, and with our generator,
              you can take your QR codes to the next level by personalizing them
              to match your brand, style, or message.
              <br />
              {/* <b>Key Features:</b>
              <br />
              Custom Design: Our QR Code Generator allows you to customize the
              design of your QR code. You can upload your own logo, image, or
              choose from a range of pre-designed templates to make your QR code
              stand out. <br />
              Four Color Options: Personalize your QR code with one of four
              different color options. Whether you prefer a classic black and
              white QR code or want to add a pop of color to your design, you
              can choose the color scheme that suits your branding or personal
              preferences.
              <br />
              Easy-to-Use Interface: Our intuitive interface ensures that
              generating a customized QR code is a breeze. You don't need any
              design or coding skills to create a unique QR code for your
              business or personal use.
              <br /> */}
            </p>
          </div>
          <div className="qr_img">
            {" "}
            <BsQrCodeScan size={120} />
          </div>
        </div>
      </div>

      <div className="child3">
        <div className="bar_des_container">
          <div className="bar_img">
            <IoIosBarcode size={120} />
          </div>
          <div className=" bar_des">
            <p>
              <h4>Effortless Barcode Generation Made Simple</h4>
              Welcome to our Barcode Generator, 
              Discover the power of our Barcode Generator, designed to provide users with the flexibility to create both individual custom barcodes and entire barcode series effortlessly. Whether you need unique barcodes for products, assets, or the convenience of generating a series of codes, our versatile tool has you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
