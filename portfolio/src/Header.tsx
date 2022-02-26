import "./Header.css";
import {mongodbIcon,expressIcon, reactIcon, nodeIcon} from './imgURLs';

import React from "react";

function Header() {
  return (
    <div className="header">
        <div className="header__containerIcon">
            <img src={mongodbIcon} className="header__M" alt=""/>
            <img src={expressIcon} className="header__E" alt=""/>
            <img src={reactIcon} className="header__R" alt=""/>
            <img src={nodeIcon} className="header__N" alt=""/>
        </div>
      <div className="header__containerLetter">
        <span className="header__M">M</span>
        <span className="header__E">E</span>
        <span className="header__R">R</span>
        <span className="header__N">N</span>
      </div>
    </div>
  );
}

export default Header;
