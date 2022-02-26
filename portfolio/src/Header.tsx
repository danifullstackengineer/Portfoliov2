import "./Header.css";
import { mongodbIcon, expressIcon, reactIcon, nodeIcon } from "./imgURLs";

import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const name = "Baba Dan Constantin";
    let colors = ["#449438", "#fa9426", "#30b5de", "#9bbd4f"];

    const colorpairs = [];

    var ranOnce = false;

    setInterval(() => {
      var counter = 0;
      var counter2 = 0;
      const nameSpan = document.getElementsByClassName("header__name")[0];
      var fullstackSpan = document.getElementsByClassName("header__fullstack")[0];
      if (!ranOnce) {
        for (let i = 0; i < name.length; i++) {
          const span = document.createElement("span");
          span.innerHTML = name[i];
          if (span.innerHTML !== " ") {
            if (counter % 4 === 0) {
              span.style.color = colors[0];
            } else if ((counter - 1) % 4 === 0) {
              span.style.color = colors[1];
            } else if ((counter - 2) % 4 === 0) {
              span.style.color = colors[2];
            } else if ((counter - 3) % 4 === 0) {
              span.style.color = colors[3];
            }
            counter += 1;
          }
          document.getElementsByClassName("header__name")[0].appendChild(span);
        }
      }
      else {
        for (let i = 0;i<name.length; i++ ){
          var currentL = nameSpan.children[i] as HTMLSpanElement;
          if(currentL.innerHTML !== " ") {
            if( counter % 4 === 0 ){
              currentL.style.color = colors[0];
            }
            else if((counter - 1) % 4 === 0 ){
              currentL.style.color = colors[1];
            }
            else if((counter - 2) % 4 === 0) {
              currentL.style.color = colors[2];
            }
            else if((counter - 3) % 4 === 0) {
              currentL.style.color = colors[3];
            }
            counter += 1;
          }
        }
      }
      let newSchema = ["#449438", "#fa9426", "#30b5de", "#9bbd4f"];
      newSchema[0] = colors[3];
      newSchema[1] = colors[0];
      newSchema[2] = colors[1];
      newSchema[3] = colors[2];
      colors = newSchema;
      ranOnce = true;
    },1000);
  }, []);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__M">
          <img className="header__MIcon" src={mongodbIcon} alt="" />
          <span className="header__MLetter">M</span>
        </div>
        <div className="header__E">
          <img className="header__EIcon" src={expressIcon} alt="" />
          <span className="header__ELetter">E</span>
        </div>
        <div className="header__R">
          <img className="header__RIcon" src={reactIcon} alt="" />
          <span className="header__RLetter">R</span>
        </div>
        <div className="header__N">
          <img className="header__NIcon" src={nodeIcon} alt="" />
          <span className="header__NLetter">N</span>
        </div>
      </div>
      <div className="header__info">
        <span className="header__name"></span>
        <span className="header__fullstack">Full Stack Developer</span>
      </div>
    </div>
  );
}

export default Header;
