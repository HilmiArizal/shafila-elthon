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
      currentPage: 1,
      perPage: 5,
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { dataReservation, currentPage, perPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentDataReservation = dataReservation.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    const renderDataReservation = currentDataReservation.map((item, index) => {
      return (
        <li key={index}>
          <div className="name">{item.name} <span>{item.reservation}</span></div>
          <div className="wish">{item.wish}</div>
        </li>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(dataReservation.length / perPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div className="wish-pray">
        <div className="title" data-aos="zoom-in">
          Ucapan &amp; Do'a
        </div>
        <div className="wish-card">
          <div className="content">
            <ul className="list-data">{renderDataReservation}</ul>
            <ul className="page-numbers">{renderPageNumbers}</ul>
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
          {/* <div className="hashtag" data-aos="zoom-in">
            #ShaTonStory
          </div> */}

          <div
            className="thankyou"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          ></div>
          <div className="product">
            &copy; 2022 Invitation by{" "}
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
