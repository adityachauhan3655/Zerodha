function Team() {
  return (
    <div>
      <div className="container mt-5 p-5">
        <div className="row p-5 mb-5 mt-5">
          <h2 className="mb-5 fs-4 ms-4 text-center">People</h2>
          <div className="col-5 text-center ">
            <img
              src="/images/nithinKamath.jpg"
              alt="founder"
              style={{
                height: "295px",
                marginBottom: "10px",
                borderRadius: "100%",
              }}
            />
            <h5 className="fw-normal">Nithin Kamath</h5>
            <p className="text-grey">Founder, CEO</p>
          </div>
                  <div className="col-7 ps-5">
                      
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on  <a href="" className="text-decoration-none" style={{ color: "#387ed1" }}>Homepage</a> / <a href="" className="text-decoration-none" style={{ color: "#387ed1" }}>TradingQnA</a> / <a href="" className="text-decoration-none" style={{ color: "#387ed1" }}>Twitter</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
