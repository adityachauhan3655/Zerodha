function CreateTicket() {
  return (
    <div className="border-bottom mt-5 p-3" style={{ backgroundColor: "#fbfbfb" }}>
      <div
        className="d-flex justify-content-between mb-4  mx-5"
        
      >
        <a className="text-decoration-none text-dark fs-2 fw-semibold" href=" /">
          Support Portal
        </a>
        <button
          className="btn fs-6 "
          style={{ backgroundColor: "#387ed1", color: "#fff", width: "11%" }}
        >
          My tickets
        </button>
      </div>
      <div className="mt-3 mx-5 mb-5">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
           <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
