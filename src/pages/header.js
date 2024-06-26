import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="/">
          Beldi Food
        </a>

        <div className="d-lg-none">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="about">
                Story
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="menu">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="news">
                Our Updates
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>
      </div>
    </nav>
  );
}
