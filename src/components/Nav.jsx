import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
export default function Nav() {
  return (
    <nav id="navbar">
      <Link className="nav-items" to="/">
        Home
      </Link>
      <Link className="nav-items" to="/topics">
        Topics
      </Link>
      <Link className="nav-items" to="/articles">
        Articles
      </Link>
    </nav>
  );
}
