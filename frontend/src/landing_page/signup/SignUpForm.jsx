import ("./SignUpForm.css")

function SignUpForm() {
  return (
    <div className="container p-3 mt-5">
      <div className="row align-items-center">
        <div className="col p-5">
          <img src="/images/signup.png" alt="Signup" className="img-fluid" />
              </div>
        <div className="col ms-3">
          <h2 className="fs-3 mb-1">Signup now</h2>
          <p className="mt-0 fs-6 ">Or track your existing application</p>

          <div class="input-group">
            <span class="input-group-text align-items-center p-2" id="inputGroup-sizing-lg">
                          <img src="/images/india-flag.svg" />
                          <h2 className="fs-5 mx-2 mt-2 ">+91</h2>
            </span>
            <input
                          type="text"
                          placeholder="Enter your mobile number "
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <button
            className="btn mt-4 px-2 fs-4"
            style={{ backgroundColor: "#387ed1", color: "#fff", width:"80%" }}
          >
            Get OTP
                  </button>
                  <p className="policy mt-4">By proceeding, you agree to the Zerodha  <a style={{ color: "#387ed1" , textDecoration:"none"}} href="/">terms</a> &  <a style={{ color: "#387ed1" , textDecoration:"none"}} href="/">privacy policy</a>

                  </p> 
                  <p className="policy mt-4">Looking to open NRI account? <a style={{ color: "#387ed1" , textDecoration:"none"}} href="/">Click here</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
