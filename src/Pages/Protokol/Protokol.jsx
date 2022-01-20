import React, { Component } from "react";
import Masker from "../../Assets/Images/masker.png";
import Wash from "../../Assets/Images/wash.png";
import Sanitizier from "../../Assets/Images/sanitizier.png";
import Distance from "../../Assets/Images/distance.png";
import './Protokol.scss';

class Protokol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProtokol: [
        {
          title: "Menggunakan Masker",
          image: Masker,
        },
        {
          title: "Menjaga Kebersihan Tangan",
          image: Wash,
        },
        {
          title: "Menggunakan Hand Sanitizier",
          image: Sanitizier,
        },
        {
          title: "Menjaga Jarak",
          image: Distance,
        },
      ],
    };
  }
  render() {
    return (
      <div className="protokol">
        <div className="title">Protokol Kesehatan</div>
        <div className="description">
          Dengan tidak mengurangi rasa hormat. Sehubungan dengan adanya wabah
          Covid-19, dimohon untuk seluruh tamu undangan agar melakukan
          pengecekan suhu sebelum memasuki area acara, selalu menggunakan
          masker, menjaga kebersihan tangan dan menjaga jarak aman selama acara
          berlangsung.
        </div>
        <div className="row">
          {this.state.dataProtokol.map((item, index) => {
            return (
              <div className="col-md" key={index}>
                <div className="card">
                  <div className="image">
                    <img src={item.image} alt="img-1" />
                  </div>
                  <div className="title">
                      {item.title}
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

export default Protokol;
