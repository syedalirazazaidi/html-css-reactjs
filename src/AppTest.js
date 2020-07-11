import React from "react";
import logo from "./Images/computer.png";
import logo1 from "./Images/shopping-bag.png";
import logo2 from "./Images/ima.jpg";
import scgImg from "./Images/circle.svg";
import back from "./Images/back.svg";
import next from "./Images/next.svg";
import more from "./Images/more.svg";
import "./App.css";
export const AppTest = () => {
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} alt="code" />
          <h4 className="logo">Three Dots</h4>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="#">
                Specs
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="cart">
          <img src={logo1} alt="logo " />
        </div>
      </header>
      <main>
        <section className="presentation">
          <div className="introduction">
            <div className="intro-text">
              <h1>Laptop For the future</h1>
              <p>
                The new 14 inch display offering a 4k display with a touch
                screen
              </p>
            </div>
            <div className="cta">
              <button className="cta-select">View Product</button>
              <button className="cta-add">Add to Cart</button>
            </div>
          </div>
          <div className="cover">
            <img src={logo2} alt="logo2" />
          </div>
        </section>
        <div className="laptop">
          <img src={back} alt="back" />
          <img src={more} alt="more" />
          <img src={next} alt="next" />
        </div>
        <img className="big-circle" src={scgImg} alt="xyz" />
        <img className="medium-circle" src={scgImg} alt="xyz" />
        <img className="small-circle" src={scgImg} alt="xyz" />
      </main>
    </>
  );
};
