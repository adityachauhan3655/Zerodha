import React from "react";

function InvestOptions() {
  return (
    <div className="container mt-5 p-">
      <div className="row text-center mb-5">
        <h2 className="fs-3 text-muted">Investment options with Zerodha demat account</h2>
      </div>

      <div className="row justify-content-center p-4">
        {/* Left Column */}
        <div className="col-md-5 mb-5">
          <div className="d-flex align-items-center">
            <img src="/images/stocks-acop.svg" style={{ width: "120px" }} alt="Stocks" />
            <div className="text-start ms-4">
              <h3 className="fs-4">Stocks</h3>
              <p className="text-muted">Invest in all exchange-listed securities</p>
            </div>
          </div>
              </div>
              
              <div className="col-1"></div>

        {/* Right Column */}
        <div className="col-md-5 mb-5">
          <div className="d-flex align-items-center">
            <img src="/images/mf.svg" style={{ width: "120px" }} alt="Mutual Funds" />
            <div className="text-start ms-4">
              <h3 className="fs-4">Mutual funds</h3>
              <p className="text-muted">Invest in commission-free direct mutual funds</p>
            </div>
          </div>
              </div>
              

        {/* Bottom Left */}
        <div className="col-md-5 mb-5">
          <div className="d-flex align-items-center">
            <img src="/images/ipo.svg" style={{ width: "120px" }} alt="IPO" />
            <div className="text-start ms-4">
              <h3 className="fs-4">IPO</h3>
              <p className="text-muted">Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
              </div>
              <div className="col-1"></div>

        {/* Bottom Right */}
        <div className="col-md-5 mb-5">
          <div className="d-flex align-items-center">
            <img src="/images/fo.svg" style={{ width: "120px" }} alt="F&O" />
            <div className="text-start ms-4">
              <h3 className="fs-4">Futures & options</h3>
              <p className="text-muted">Hedge and mitigate market risk through simplified F&O trading</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
          <button className="btn btn-primary mb-5 px-5 py-2 fs-5" style={{backgroundColor:" #387ed1"}}>Explore Investments</button>
      </div>
    </div>
  );
}

export default InvestOptions;