import React, { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else setShowNav(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav__bar ${showNav && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://lh3.googleusercontent.com/proxy/qgJozNiTBI0sSqSxQFQWnntfyT85JSecr1W2md_eXXsGzHxxDDcnRyWzIhx_QazrP_-HWBFq6BofOgqAE9OdmPoVg5mB1Q3IXdcRd_jUomaatfE6zHE"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/564x/34/62/d2/3462d27440aa255b1c314ff16f4032b4.jpg"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default NavBar;
