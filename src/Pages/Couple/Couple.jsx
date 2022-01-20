import React, { Component } from "react";
import Bismillah from "../../Assets/Images/bismillah.png";
import AvatarMale from "../../Assets/Images/Hilmi.png";
import AvatarFemale from "../../Assets/Images/Lisna.png";
import Flower from "../../Assets/Images/leaf-up.png";
import Flower2 from "../../Assets/Images/leaf-down.png";
import { FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Couple.scss";

class Couple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      hours: 0,
      minutes: 0,
      second: 0,
    };
  }

  componentDidMount() {
    this.renderTimeEvent();
    AOS.init({
      duration: 1000,
    });
  }

  renderTimeEvent = () => {
    const goalDate = new Date("Feb 6, 2022 09:00:00").getTime();
    setInterval(() => {
      const nowDate = new Date().getTime();
      const results = goalDate - nowDate;

      const day = Math.floor(results / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (results % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((results % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((results % (1000 * 60)) / 1000);

      this.setState({
        day: day,
        hours: hours,
        minutes: minutes,
        second: second,
      });
    }, 1000);
  };

  render() {
    return (
      <div className="couple">
        <div className="card">
          <div className="image-bismillah">
            <img src={Bismillah} alt="img-bismillah" data-aos="fade-zoom" />
          </div>
          <div className="text-muqodimah">
            <div className="salam" data-aos="fade-zoom">
              Assalamu'aikum Wr. Wb.
            </div>
            <div className="muqodimah" data-aos="fade-zoom">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
              <br />
              <div style={{ fontWeight: "bold" }}>QS. Ar-Rum Ayat 21</div>
            </div>
          </div>
          <div className="couple-identity">
            <div className="love">
              <div data-aos="zoom-in">
                <FaHeart style={{ color: "#7daaa4" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="female" data-aos="fade-down">
                  <div className="text">
                    <div className="name">Shafila Darajatin Sartika</div>
                    <div className="as">Putri Tercinta</div>
                    <div className="son">
                      <div className="father">Bapak Aa. Hasan Siregar</div>
                      <div className="mother">Ibu Tini Supartini</div>
                    </div>
                  </div>
                  <div className="image">
                    <img src={AvatarFemale} alt="img-avatar" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="male" data-aos="fade-up">
                  <div className="image">
                    <img src={AvatarMale} alt="img-avatar" />
                  </div>
                  <div className="text">
                    <div className="name">Elthon Chairul Umam</div>
                    <div className="as">Putra Tercinta</div>
                    <div className="son">
                      <div className="father">Bapak Iwan Setiawan</div>
                      <div className="mother">Ibu Ain Nur Aliyah</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flower" data-aos="fade-down">
            <div className="image">
              <img src={Flower} alt="img-flower" />
            </div>
          </div>
          <div className="event" data-aos="zoom-in">
            <div className="day">MINGGU</div>
            <div className="date">6 February 2022</div>
          </div>
          <div className="flower" data-aos="fade-up">
            <div className="image-2">
              <img src={Flower2} alt="img-flower" />
            </div>
          </div>
          <div className="wish">
            <div className="text" data-aos="fade-zoom">
              Merupakan suatu kehormatan dan kebahagian bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do'a restu untuk
              kami
            </div>
          </div>
          <div className="time" data-aos="flip-right">
            <div>
              {this.state.day} <span>Hari</span>
            </div>
            <div>
              {this.state.hours} <span>Jam</span>
            </div>
            <div>
              {this.state.minutes} <span>Menit</span>
            </div>
            <div>
              {this.state.second} <span>Detik</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Couple;
