import React, { useEffect, useState } from "react";
import "./Nav.css";
import moviemania from "../imgs/mmbig.png";
import {withRouter} from 'react-router';
import { createBrowserHistory } from 'history';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Nav(props) {
  props=false;

  let history = createBrowserHistory();
  const [show, handleShow] = useState(false);
  
 function handlebuttonclick()
 {
    history.push('/signup');
    props=true;
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={moviemania}
        alt="Logo"
      />
    
      <AccountCircleIcon className="nav_avatar" fontSize="large" onClick={handlebuttonclick}/>
      
    </div>
  );
}

export default withRouter(Nav);
