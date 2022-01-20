import React, { Component } from "react";
import "./Wish.scss";
import Axios from "axios";
import { API_URL } from "../../Service/API_URL";
import AOS from "aos";
import "aos/dist/aos.css";

class Wish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataReservation: [],
      index: 0,
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    Axios.get(API_URL + "reservation/getReservation")
      .then((res) => {
        this.setState({ dataReservation: res.data.dataReservation });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onPrevious = () => {
    if (this.state.index - 1 >= 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  onNext = () => {
    if (this.state.index + 1 <= this.state.dataReservation.length - 1) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  render() {
    return (
      <div className="wish-pray">
        <div className="title" data-aos="zoom-in">
          Ucapan &amp; Do'a
        </div>
        <div className="wish-card">
          <div className="icon-left" onClick={this.onPrevious}>
            {/* <GrPrevious /> */}
            <button className="btn btn-primary">Prev</button>
          </div>
          <div className="icon-right" onClick={this.onNext}>
            {/* <GrNext /> */}
            <button className="btn btn-primary">Next</button>
          </div>
          <div className="content">
            {this.state.dataReservation.map((item, index) => {
              let position =
                index > this.state.index
                  ? "nextCard"
                  : index === this.state.index
                  ? "activeCard"
                  : "prevCard";
              return (
                <div className={position} key={index}>
                  <div className="friend-name">
                    {this.state.index === index ? item.name : ""}
                  </div>
                  <div className="friend-wish">
                    {this.state.index === index ? item.wish : ""}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="couple-forever">
          <div className="row">
            <div className="and">
              <div data-aos="zoom-in">&amp;</div>
            </div>
            <div className="col-md-6">
              <div className="female">
                Shafila Darajatin Sartika
                {/* <div data-aos="fade-right">Lisna Astriani</div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="male">
                Elthon Chairul Umam
                {/* <div data-aos="fade-left">Hilmi Arizal</div> */}
              </div>
            </div>
          </div>
          <div className="hashtag" data-aos="zoom-in">
            #ShaTonStory
          </div>

          <div
            className="thankyou"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            
          </div>
          <div className="product">
            &copy; 2021 Invitation by{" "}
            <a
              href="https://hilmiarizal.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              https://hilmiarizal.github.io/Portfolio/
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Wish;
