import Axios from "axios";
import React, { Component } from "react";
import { API_URL, API_URL_IMAGE } from "../../Service/API_URL";
import VideoTeaser from "../../Assets/Video/Teaser.mp4";
import PosterTeaser from "../../Assets/Images/Poster.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPrewedding: [],
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    Axios.get(API_URL + `prewedding/getHideShowPrewedding`, { status: "show" })
      .then((res) => {
        console.log(res.data);
        this.setState({ dataPrewedding: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="gallery">
        <div className="title" data-aos="zoom-in">
          Galeri
        </div>
        <div className="video">
          <video controls poster={PosterTeaser}>
            <source src={VideoTeaser} type="video/mp4" />
          </video>
        </div>
        <div className="row">
          {this.state.dataPrewedding.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card" data-aos="fade-right">
                  <div className="image">
                    <img src={API_URL_IMAGE + item.image} alt="img-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
