import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SearchComponent from "./SearchComponent";
import logo from "../../../stmarklogo.png";
import logo2 from "../../../ablogo.png";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <div className="navbar">
        <div className="logoContainer">
          <img src={logo2} alt="" />
        </div>
        <div className="rightnav">
          <div className="imageContainer">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <div>Home</div>
            <div>About</div>
            <div>Score</div>
          </div>
        </div>
      </div>

      {/* Main Img */}
      <header className="App-header">
        <div className="kidsContainer">
          <img src="/src/assets/kids.png" alt="" />
        </div>

        {/* <h1>Google Sheets Search App</h1> */}
        <h2>Search by child's ID</h2>
        <SearchComponent />
      </header>
    </div>
  );
}
