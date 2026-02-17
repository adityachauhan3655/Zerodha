function LeftSection({
  imageURL,
  productName,
  productDes,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-7">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
         <div className="col-1"></div>
        <div className="col-4">
          <h2 className="fs-3 mb-3">{productName}</h2>

          <p className="mb-4 lh-base">{productDes}</p>

          <div className="mb-4">
            <a href="#" className="me-4 text-decoration-none">
              {tryDemo}
            </a>
            <a href="#" className="me-4 text-decoration-none">{learnMore}</a>
          </div>

          <div>
            <a href="#" className="me-3">
              <img src="/images/googlePlayBadge.svg" className="store-badge" />
            </a>

            <a href="#">
              <img src="/images/appstoreBadge.svg" className="store-badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
