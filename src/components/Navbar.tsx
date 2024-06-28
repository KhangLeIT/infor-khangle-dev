import { Link, useLocation } from "react-router-dom"

import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faList, faCog, faProjectDiagram, faSkiing, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

import React from 'react';

const Navbar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const location = useLocation()
  const links = [
      {
          name: "Home",
          path: "/",
          icon: faHome
      },
      {
        name: "Skills",
        path: "/skills",
        icon: faSkiing
    },
      {
          name: "Project",
          path: "/project",
          icon: faProjectDiagram
      },
      {
        name: "About me",
        path: "/about-me",
        icon: faInfoCircle
    },
      {
          name: "Settings",
          path: "/settings",
          icon: faCog
      }
  ]

  function closeSidebar(){
      setShowSidebar(false)
  }
  return (
      <div>
          <div className="navbar container">
              <Link to="/" className="logo">KhangLeIT<span>Developer</span></Link>
              <div className="nav-links">
                  { links.map(link => (
                      <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                  )) }
              </div>
              <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  
              </div>
          </div>
          { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
      </div>
  )
};

export default Navbar;
