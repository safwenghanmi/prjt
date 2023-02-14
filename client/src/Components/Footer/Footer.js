import React from "react";
import "./Style1.css";
import img1 from "./1.png";
import img2 from "./3.png";
import img3 from "./2.png";
import { Link } from "react-router-dom";
import facebook from "./facebook.png";
import info from "./info.png";
import product from "./product.png";
import mail from "./gmail.png";
import phone from "./telephone.png";
import adresse from "./navigation.png";
import { Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddMessages from "../addMessages/AddMessages";

const Footer = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <footer>
      <div className="Info">
        <div>
          <img src={img1} className="Image" alt="livraison" />{" "}
          <p className="text">
            Livraison sur le grand tunis 
          </p>
        </div>
        <div>
          <img src={img2} className="Image1" alt="Service client" />{" "}
          <p className="text">
            Service client 
          </p>
        </div>
        <div>
          <img src={img3} className="c" alt="c" />
          <p className="c-text">
          repair et maintenance <br></br>
          </p>
        </div>
      </div>

      {isAuth || isAuthAdmin ? null : (
        <div className="mainfooter2">
          <div className="contain5">
            <p className="txt7">
              Inscrivez-vous pour recevoir les codes promos
            </p>
            <div className="form7">
              <FormControl placeholder="Votre adresse e-mail" />
            </div>
            <div>
              <Button className="v33" variant="light" href="/accountCreate">
                {" "}
                <span className="v3">Inscription</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {isAuthAdmin ? null : <AddMessages />}

      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <p>Informations</p>
              <div className="flex">
                <Link to="/Aproposdenous" className="path">
                  {" "}
                  <img src={info} className="ico" alt="img" /> À propos de nous
                </Link>
                <br />
                <Link to="/Produits" className="path">
                  <img src={product} className="ico" alt="img" />
                  Nos Produits
                </Link>
                <br />
                <a
                  target="_blank"
                  href="https://www.facebook.com/hamza.kefi1/"
                  className="path"
                  rel="noreferrer"
                >
                  <img src={facebook} className="ico" alt="img" />
             facebook.com/hamza.kefi1
                </a>
              </div>
            </div>

            {/* Column3 */}
            <div className="col">
              <p>Nous contacter</p>

              <a href="tel:+216-78443500" className="path">
                <img src={phone} className="ico" alt="img" />
                Tél : (+216) 58 59 07 17
              </a>
              <a href="mailto: kefihamza23.hamza@gmail.com" className="path">
                <p>
                  <img src={mail} className="ico" alt="img" /> Mail:
                  kefihamza23.hamza@gmail.com
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/GOMYCODE+Menzah+5/@36.8579652,10.1566185,12.83z/data=!4m6!3m5!1s0x12fd359f19cff1a1:0x71a7d4d04a5b1ef2!8m2!3d36.8468867!4d10.1704428!16s%2Fg%2F11qy9xm8kr"
                className="path"
                rel="noreferrer"
              >
                <p>
                  <img src={adresse} className="ico" alt="img" />
                  GOMYCODE Menzah 5 {" "}
                </p>
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} NOSTECH | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
