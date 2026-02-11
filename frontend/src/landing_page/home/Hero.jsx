function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="/images/homeHero.png" alt="HomeHero"/>
        <h1 className="mt-5 mb-3">Invest in everything</h1>
        <p className="mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="btn btn-primary p-2 fs-5" style={{width:"20%" , margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;
