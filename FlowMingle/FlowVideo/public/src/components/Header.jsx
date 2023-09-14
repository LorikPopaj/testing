import React,{Component} from "react";
import '../main.css'
import {BrowserRouter, Route, Routes, NavLink, useNavigate} from 'react-router-dom';
function Header(props){   
          return(    
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0.5% 3%", background: "white", position: "fixed", width: "100%", zIndex: "1", boxShadow: '0 1px 20px rgba(0 0 0.2)'}}>
              <NavLink to="../home" className="logo" aria-label="homepage">flow.</NavLink>
              <nav className="main_nav">
          <ul className="nav_list">
          <li className="nav_list-item"><NavLink to="../" className="nav_link">Home</NavLink></li>
            <li className="nav_list-item"><NavLink to="../about" className="nav_link">About</NavLink></li>
            <li className="nav_list-item"><NavLink to="../chat" className="nav_link">Chat</NavLink></li>
            <li className="nav_list-item"><NavLink to="../voice" className="nav_link">Voice Call</NavLink></li>
            <li className="nav_list-item"><NavLink to="../news" className="nav_link">News</NavLink></li>
            <li className="nav_list-item"><NavLink to="../contacts" className="nav_link">Contacts</NavLink></li>
            <li className="nav_list-item"><NavLink to="../dashboard" className="nav_link">Dashboard</NavLink></li>
          </ul>
        </nav>
        <nav>
          <ul className="nav_list">
           <li className="nav_list-item"><NavLink to="../login" className="nav_link nav_link--btn">Login</NavLink></li>
           <li className="nav_list-item"><NavLink to="../register" className="nav_link nav_link--btn nav_link--btn--highlight">Register</NavLink></li>
  
          </ul>
        </nav>
        </div>
        )
          }
    export default Header;
