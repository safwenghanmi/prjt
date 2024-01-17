import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../ContactUs/ContactUs";
import Products from "../Products/Products";
import "./Home.css";
import video from "./videoplayback (2).mp4";

const Home = ({ filtredProducts }) => {
  const myRef = useRef(null);


  return (
    <div className="bg">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FREE SHOP</title>
        <link rel="canonical" />
      </Helmet>
      <h1>
        <p className="nostech1">SHOPPING EN LIGNE</p>
      </h1>
      
          <div className="Banner">
      <video id="video" width={1524} autoPlay loop muted >
  <source src={video} type="video/mp4"/>
</video>

          </div>
    

      <div ref={myRef}>
        {<Products filtredProducts={filtredProducts} />}
        
      </div>

      <ContactUs />
    </div>
  );
};

export default Home;
