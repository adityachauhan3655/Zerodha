function Benefit() {
  return (
    <div className="container mb-5 mt-5 p-4">
      <div className="row align-items-center">
        <div className="col text-center">
          <img src="/images/benefits.svg" style={{ width: "80%" }} />
          <h2 className="fs-4 mt-4">Benefits of opening a Zerodha demat account</h2>
        </div>
        <div className=" ms-3 col">
          <h3 className="fs-5 mb-4">Unbeatable pricing</h3>
          <p className="text-muted mb-5">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>
          <h3 className="fs-5 mb-4">Best investing experience</h3>
          <p className="text-muted mb-5">
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>
          <h3 className="fs-5 mb-4">No spam or gimmicks</h3>
          <p className="text-muted mb-5">
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>{" "}
          <h3 className="fs-5 mb-4">The Zerodha universe</h3>
          <p className="text-muted mb-5">
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
