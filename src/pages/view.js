import React from "react";

export default function View() {
  return (
    <div>
      <div id="container">
        <div className="product-details">
          <h1>Sfenj Donuts </h1>

          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p className="information">
            " Moroccan delicacy, are deep-fried treats known for their fluffy
            texture and irresistible sweetness. Made simple yeast dough, these
            doughnuts are typically coated in sugar or dipped in honey, making
            them a delightful indulgence enjoyed across Morocco.. "
          </p>

          <div className="control">
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

        <div className="product-image">
          <img src="assets/images/breakfast/bk2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
