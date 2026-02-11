import "./Stats.css";

function Stats() {
  return (
    <div className="container p-5 mt-5 ms-3">
      <div className="row align-items-center">
        <div className="col-6">
          <h2 className="mb-5 fs-3">Trust with confidence</h2>
          <h3 className="mb-2 fs-5">Customer-first always</h3>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="mb-2 fs-5">No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            Our philosophies.
          </p>
          <h3 className="mb-2 fs-5">The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mb-2 fs-5">Do better with money</h3>
          <p>
            With initiatives like Nudge and <a>Kill Switch</a>, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="/images/ecosystem.png"
            alt="Ecosystem"
            style={{width:"100%"}}
          />
          <div className="d-flex gap-5 mx-5 ps- links">
            <a href="/">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/">
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center my-5 ms-3">
          <img
            src="/images/pressLogos.png"
            alt="press"
            className="img-fluid text-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
