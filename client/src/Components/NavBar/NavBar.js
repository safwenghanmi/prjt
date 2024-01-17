import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Dropdown,
} from "react-bootstrap";
import "./Style.css";
import img from "./Capture d’écran 2024-01-15 230141-PhotoRoom.png-PhotoRoom.png";
import { useDispatch, useSelector } from "react-redux";
import userico from "./user.png";

import out from "./arrow.png";
import allusers from "./uti.png";
import message from "./messa.png";
import order from "./shop.png";
import { current, logout } from "../../JS/Actions/user";
import { useNavigate } from "react-router-dom";
import { currentAdmin } from "../../JS/Actions/admin";


const NavBar = ({inputSearch,setInputSearch}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
 const handleChange=(e)=>{
  setInputSearch(e.target.value)
 }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  return (
    <header className="NavBar">
      
      <Navbar expand="lg" className="v1">
        <Container fluid>
         
        <Nav.Link href="/">  <img src={img} height="80px"  style={{ marginLeft:"10%" }}className="nostech" alt="nostech" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "50px",margin:"12%" }}
              navbarScroll
            >
              <Nav.Link href="/Produits" style={{width:'200px'}}>
                <span className="v4" >Nos Produits</span>
              </Nav.Link>

              <Nav.Link href="/Aproposdenous" style={{width:'250px'}}>
                {" "}
                <span className="v4">À propos de nous</span>
              </Nav.Link>
              <Form className="search">
               
                <input class="input" type="search" placeholder="Chercher produit ..." value={inputSearch}
                onChange={handleChange} ></input>
              </Form>
              {isAuth ? (
                <div className="logout">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="v11"
                      id="dropdown-basic"
                      variant="secondary"
                    >
                      <span className="v3">
                        {" "}
                        <img
                          src={userico}
                          height="23px"
                          className="userico"
                          alt="img"
                        />{" "}
                        {user && user.name}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => navigate(`/profile/${user._id}`)}
                      >
                        Profil
                      </Dropdown.Item>
                      <Dropdown.Item href="/Produits">
                        Nos Produits
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="/"
                        onClick={() => dispatch(logout())}
                      >
                        {" "}
                        <img
                          src={out}
                          height="20px"
                          className="userico"
                          alt="img"
                        />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : isAuthAdmin && isAdmin ? (
                <div className="logoutAdmin">
                  <Nav.Link href="/AllOrders">
                    {" "}
                    <img
                      src={order}
                      height="30px"
                      className="userico"
                      alt="img"
                    />
                    <span className="v4">Order(s)</span>
                  </Nav.Link>
                  <Nav.Link href="/messages">
                    {" "}
                    <img
                      src={message}
                      height="30px"
                      className="userico"
                      alt="img"
                    />
                    <span className="v4">Message(s)</span>
                  </Nav.Link>
                  <Nav.Link href="/users">
                    {" "}
                    <img
                      src={allusers}
                      height="30px"
                      className="userico"
                      alt="img"
                    />
                    <span className="v4">Utilisateurs</span>
                  </Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="v11"
                      id="dropdown-basic"
                      variant="secondary"
                    >
                      <span className="v3">
                        {" "}
                        <img
                          src={userico}
                          height="20px"
                          className="userico"
                          alt="img"
                        />{" "}
                        {admin && admin.name}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => navigate(`/profile/${admin._id}`)}
                      >
                        Profil
                      </Dropdown.Item>
                      <Dropdown.Item href="Produits">
                        Nos Produits
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="/"
                        onClick={() => dispatch(logout())}
                      >
                        {" "}
                        <img
                          src={out}
                          height="20px"
                          className="userico"
                          alt="img"
                        />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <div className="inscription">
                  <Nav.Link href="/login">
                    {" "}
                    <span className="v4">Login</span>
                  </Nav.Link>
                  <Button className="v2" variant="light" href="/accountCreate">
                    {" "}
                    <span className="v3">Inscription</span>
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
