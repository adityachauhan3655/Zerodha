function Hero() {
  return (
    <div className="container p-5 mb-5 text-center">
        <img src="/images/homeHero.png" alt="HomeHero"style={{width:"80%"}}/>
        <h1 className="mt-5 mb-3 fs-4">Invest in everything</h1>
        <p className="mb-5 fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="btn px-4 fs-4" style={{backgroundColor:"#387ed1" , color: "#fff"}}>Sign up for free</button>
    
    </div>
  );
}

export default Hero;
