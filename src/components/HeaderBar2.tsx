// import React from 'react';
import { MdOutlineSearch } from "react-icons/md";

const HeaderBar2 = () => {
  return (
    <>
      <div className="Header_bar">
        <div className="DevConn">
          <span className="DEV">DEV</span>
          <span className="Conn">CONN</span>
        </div>

        <div className="Searchbar">
          <div className="icon_seacrh">
            <MdOutlineSearch />
          </div>

          <p className="Search">Search</p>
        </div>
        <div className="button">
          <div className="Sign_up">
            <button className="buttons" type="submit">
              Sign Up
            </button>
          </div>
          <div className="Login">
            <button className="buttons" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar2;
