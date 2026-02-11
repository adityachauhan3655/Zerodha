function Pricing() {
  return (
    <div>
      <div className="container ps-5 mt-5 ms-3 mb-5">
        <div className="row">
          <div className="col-6">
            <h2 className="fs-3">Unbeatable pricing</h2>
            <p className="fs-6">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="/">
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-6 d-flex justify-content-between">
            <img
              src="images/pricing0.svg"
              className="img-fluid text-center"
              style={{ width: "22%" }}
            />
            <p style={{ fontSize: "10px" }}>
              Free account opening
            </p>
            <img
              src="images/pricing0.svg"
              className="img-fluid text-center"
              style={{ width: "22%" }}
            />
            <p style={{ fontSize: "10px" }}>
              Free equity delivery <br />
              and direct mutual funds
            </p>
            <img
              src="images/intradayTrades.svg"
              className="img-fluid text-center"
              style={{
                width: "22%"
              }}
              class="d-flex justify-content-end"
            />
            <p style={{ fontSize: "10px" }}>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Pricing;
