import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SiBandsintown } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import "./Navbar.css";

function Navbar() {
  const [expanded, setExpand] = useState(false);

  return (
    <div className="Navbar">
      <div className="main-wrapper">
        <div className="main">
          <SiBandsintown size={33} />
          <NavLink className="heading long home" to="/">
            Tresensportmusik
          </NavLink>
          <NavLink className="heading short home" to="/">
            TSM
          </NavLink>
        </div>

        <IoMenu
          className="burger-menu"
          onClick={() => {
            setExpand(!expanded);
          }}
        />
      </div>

      <ul className={"menu-items " + (expanded ? "expanded" : "not-expanded")}>
        <li>
          <NavLink to="/auftritte" className={"navbar-link"}>
            {" "}
            Auftritte
          </NavLink>
        </li>
        <li>
          <NavLink to="/buchen" className={"navbar-link"}>
            {" "}
            Buchen
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={"navbar-link"}>
            Über Uns
          </NavLink>
        </li>
        <li>
          <NavLink to="/vip" className={"navbar-link"}>
            {" "}
            VIP
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
