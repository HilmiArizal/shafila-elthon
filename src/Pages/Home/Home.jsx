import React, { Component } from "react";
import Couple from "../Couple/Couple";
import Event from "../Event/Event";
// import Gallery from "../Gallery/Gallery";
import Reservation from "../Reservation/Reservation";
import Wish from "../Wish/Wish";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";
import Protokol from "../Protokol/Protokol";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init({ duration: 1000 });
  }

  renderHome = () => {
    return (
      <div className="home">
        <div className="text">
          <div className="name" data-aos="zoom-in">
            Shafila <br /> &amp; <br /> Elthon
          </div>
          <div className="date" data-aos="zoom-out">
            Minggu, 6 February 2022
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="section">
        <div id="section-home">{this.renderHome()}</div>
        <div id="section-couple">
          <Couple />
        </div>

        <div id="section-event">
          <Event />
        </div>

        <div id="section-protokol">
          <Protokol />
        </div>

        {/* <div id="section-gallery">
          <Gallery />
        </div> */}

        <div id="section-reservation">
          <Reservation />
        </div>

        <div id="section-reservation">
          <Wish />
        </div>
      </div>
    );
  }
}

export default Home;
