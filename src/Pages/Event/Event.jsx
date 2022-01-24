import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Event.scss";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="detail-event">
        <div className="title" data-aos="zoom-in">
          Detail Acara
        </div>
        <div className="section-detail-event">
          <div className="akad" data-aos="zoom-out-right">
            <div className="text">AKAD</div>
            <div className="date">6 FEBRUARY 2022</div>
            <div className="time">09:00 - 11:00</div>
          </div>
          <div className="resepsi" data-aos="zoom-out-right">
            <div className="text">RESEPSI</div>
            <div className="date">6 FEBRUARY 2022</div>
            <div className="sesi">
              <div>SESI 1 : 11.00 - 13.00</div>
              <div>SESI 2 : 13.00 - 15.00</div>
            </div>
          </div>
          <div className="place">
            <div data-aos="zoom-in">
              <div className="text">GEDUNG BKPSDM KAB. SUKABUMI</div>
              <div className="address">
                Gedung BKPSDM Kab.Sukabumi ( Jl. Raya Kadupugur No.KM 10,4,
                Lembursawah, Kec. Cicantayan, Kabupaten Sukabumi, Jawa Barat
                43155)
              </div>
            </div>
            <div className="button">
              <button
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                LIHAT LOKASI ACARA
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Google Maps Location
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <iframe
                        title="maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9000578668515!2d106.84096511477286!3d-6.902554295012432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6836e84b31bb35%3A0xc5ac990d42b9415a!2sBKPSDM%20Kab.%20Sukabumi!5e0!3m2!1sid!2sid!4v1643029628351!5m2!1sid!2sid"
                        width="100%"
                        height="300"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
