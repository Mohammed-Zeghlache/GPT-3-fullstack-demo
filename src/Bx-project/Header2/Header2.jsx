import React from "react";
import { FaSlack } from "react-icons/fa";
import { DiAtlassian } from "react-icons/di";
import { LiaDropbox } from "react-icons/lia";
import { SiShopify } from "react-icons/si";



import './Header2.css'



const Header2 =()=>{

  return (
    <div className="headers">
      <nav className="nav-bar">
        <div className="nav-item">
          <p className="p2">Google</p>
        </div>
        <div className="nav-item">
          <FaSlack className="nav-icon" />
          <p className="p2">Slack</p>
        </div>
        <div className="nav-item">
          <DiAtlassian className="nav-icon" />
          <p className="p2">Atlassian</p>
        </div>
        <div className="nav-item">
          <LiaDropbox className="nav-icon" />
          <p className="p2">Dropbox</p>
        </div>
        <div className="nav-item">
          <SiShopify className="nav-icon" />
          <p className="p2">Shopify</p>
        </div>
      </nav>
    </div>
  );
}

export default Header2 ;