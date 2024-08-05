// import React from "react";
// import logo from "../Images/logo.jpg";
// import { Link, useNavigate } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// export default function Navbar(props) {
//   const navigate = useNavigate();
//   return (
//     <>
//       <nav className="navbar" style={{ height: "5px" }}>
//         <div className="w3-top">
//           <div
//             className="w3-bar w3-black w3-card container-fluid"
//             id="myNavbar"
//           >
//             <button className="navbar-brand">
//               <img
//                 src={logo}
//                 alt="Company logo"
//                 width="90"
//                 height="50"
//                 className="d-inline-block align-text-top"
//                 onClick={() => {
//                   navigate("/");
//                 }}
//               />
//             </button>

//             <div className="w3-right w3-hide-small">
//               <Link className="w3-bar-item w3-button w3-hover-teal" to="/">
//                 <i className="fa fa-home"></i> HOME
//               </Link>
//               <button
//                 className="w3-bar-item w3-button w3-hover-teal"
//                 onClick={() => {
//                   navigate("/About");
//                 }}
//               >
//                 <i className="fa fa-globe"></i> ABOUT
//               </button>
//               <button
//                 className="w3-bar-item w3-button w3-hover-teal"
//                 onClick={() => {
//                   navigate("/Team");
//                 }}
//               >
//                 <i className="fa fa-children"></i> TEAM
//               </button>
//               <button
//                 className="w3-bar-item w3-button w3-hover-teal"
//                 onClick={() => {
//                   navigate("/Eyeglasses");
//                 }}
//               >
//                 <i className="fa fa-glasses"></i> EYEGLASSES
//               </button>
//               <button
//                 className="w3-bar-item w3-button w3-hover-teal"
//                 onClick={() => {
//                   navigate("/Contact");
//                 }}
//               >
//                 <i className="fa fa-envelope"></i> CONTACT
//               </button>
//               <div className="w3-dropdown-hover w3-hover-teal">
//                 <button className="w3-button w3-bar-item w3-hover-teal">
//                   <i className="fas fa-shopping-basket"></i> PRODUCTS
//                 </button>
//                 <div className="w3-dropdown-content w3-bar-block w3-card-4">
//                   <HashLink
//                     to="/Products#man"
//                     className="w3-bar-item w3-button w3-hover-teal"
//                   >
//                     Man Glasses
//                   </HashLink>
//                   <HashLink
//                     to="/Products#woman"
//                     className="w3-bar-item w3-button w3-hover-teal"
//                   >
//                     Woman Glasses
//                   </HashLink>
//                   <HashLink
//                     to="/Products#kid"
//                     className="w3-bar-item w3-button w3-hover-teal"
//                   >
//                     Kids Glasses
//                   </HashLink>
//                   <HashLink
//                     to="/Products#sun"
//                     className="w3-bar-item w3-button w3-hover-teal"
//                   >
//                     SunGlasses
//                   </HashLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
import React, { useContext, useState } from "react";
import logo from "../Images/logo.jpg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { storeContext } from "../Context and Reduce/StoreContext";

export default function Navbar() {
  //   const { products } = useContext(storeContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const list = [
    { name: "HOME", tag: "/", icon: "home" },
    { name: "ABOUT", tag: "/About", icon: "globe" },
    { name: "TEAM", tag: "/Team", icon: "children" },
    { name: "EYEGLASSES", tag: "/Eyeglasses", icon: "glasses" },
    { name: "CONTACT", tag: "/Contact", icon: "envelope" },
    { name: "PRODUCTS", tag: "/Products", icon: "shopping-basket" },
  ];
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar my-0 mb-4" style={{ height: "50px" }}>
        <div className="w3-top">
          <div
            className="w3-bar w3-black w3-card container-fluid py-0"
            id="myNavbar"
          >
            <div className="w3-left">
              <button
                className="navbar-brand mx-2 my-0 py-0"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/");
                }}
              >
                <img
                  src={logo}
                  alt="Company logo"
                  width="90"
                  height="120"
                  className="d-inline-block align-text-top my-0"
                />
              </button>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="w3-right w3-hide-medium w3-hide-large">
              <button
                className="w3-bar-item w3-button w3-hover-blue"
                onClick={toggleMenu}
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>

            {/* Desktop navigation links */}
            <div className="w3-right w3-hide-small">
              {list.map((item, index) => (
                <button
                  className="w3-bar-item w3-button w3-hover-blue"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(item.tag);
                  }}
                >
                  <i className={`fa fa-${item.icon}`}></i> {item.name}
                </button>
              ))}

              <HashLink
                to="/#review"
                className="w3-bar-item w3-button w3-hover-blue"
              >
                <i className="fa fa-comment"></i> REVIEWS
              </HashLink>
              {/* <button
                className="w3-bar-item w3-button w3-hover-blue"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/Cart");
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i> */}
              {/* <sup>&nbsp;&nbsp;({products.length})</sup> */}
              {/* </button> */}
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="w3-center w3-bar-block w3-hide-medium w3-hide-large">
                {list.map((item, index) => (
                  <button
                    className="w3-bar-item w3-button w3-hover-blue"
                    onClick={() => {
                      toggleMenu();
                      window.scrollTo(0, 0);
                      navigate(item.tag);
                    }}
                  >
                    <i className={`fa fa-${item.icon}`}></i> {item.name}
                  </button>
                ))}
                <HashLink
                  className="w3-bar-item w3-button w3-hover-blue"
                  onClick={() => {
                    toggleMenu();
                  }}
                  to={"/#review"}
                >
                  <i className="fa fa-comment"></i> REVIEWS
                </HashLink>
                {/* <button
                  className="w3-bar-item w3-button w3-hover-blue"
                  onClick={() => {
                    toggleMenu();
                    window.scrollTo(0, 0);
                    navigate("/Cart");
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>*/}
                {/* <sup>&nbsp;&nbsp;({products.length})</sup> */}
                {/* </button> */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
