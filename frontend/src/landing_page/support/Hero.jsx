function Hero() {
  return (
    <div>
      <h2 className="text-decoration-none p-3 text-dark mt-5 mb-4 ms-5 fs-2 fw-semibold">
        Quick links
      </h2>
      <div >
        <li >
        <ol >
          <a href="/" className="text-decoration-none">
            {" "}
            <li className="mb-3 ms-5 fs-5"> Track account opening</li>
          </a>
          <a href="/" className="text-decoration-none">
            {" "}
            <li className="mb-3 ms-5 fs-5" > Track segment activation</li>
          </a>
          <a href="/" className="text-decoration-none">
            {" "}
            <li className="mb-3 ms-5 fs-5"> Intraday margins</li>
          </a>
          <a href="/" className="text-decoration-none">
            {" "}
            <li className="mb-3 ms-5 fs-5"> Kite user manual</li>
          </a>
          <a href="/" className="text-decoration-none">
            {" "}
            <li className="mb-5 ms-5 fs-5"> Learn how to create a ticket</li>
          </a>
        </ol>
      </li>
      </div>
    </div>
  );
}

export default Hero;
