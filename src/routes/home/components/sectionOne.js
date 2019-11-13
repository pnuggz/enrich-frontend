import React from "react";

import imgPath4 from "../../../assets/img/landing/path4.png";

const SectionOne = () => {
  return (
    <React.Fragment>
      <section className="section">
        <section className="section">
          <img
            alt="..."
            class="path"
            src={imgPath4}
            style={{ left: "-110px", maxWidth: "60%", top: "50px" }}
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-mg-12">
                <h1 className="text-center text-weight-bold">Your best benefits</h1>
                <div className="row justify-content-center">
                  <div className="col-md-4 col-lg-3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Round-Ups</h4>
                      <hr className="line-primary" />
                      <p>
                        Invest the change from your daily purchases and see how
                        quickly it adds up.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Recurring</h4>
                      <hr className="line-warning" />
                      <p>
                        Set recurring daily, weekly or monthly investment
                        amounts to set aside more.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Lump Sums</h4>
                      <hr className="line-success" />
                      <p>
                        Invest a lump sum into your account and let our
                        technology help you grow it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default SectionOne;
