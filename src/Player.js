import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import SideBar from "./SideBar";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
