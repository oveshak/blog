import React from "react";
import logo from "../../assets/images/logo.svg";
import { nav } from "../../assets/data/Data";
import { Link } from "react-router-dom";
import User from "./User";
import "./header.css";
const Header = () => {
  return (
    <>
      <header>
        <section className="container flex">
          <div className="logo">
            <img src={logo} alt="" width="100px" />
          </div>
          <nav className="">
            <ul className="flex">
              {nav.map((item) => (
                <li key={item.id}>
                  <Link to={item.url}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexContainer">
            <User />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
