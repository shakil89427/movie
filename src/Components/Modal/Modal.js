import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ setShow, movie }) => {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...userInfo };
    newData[name] = value;
    setUserInfo(newData);
  };

  const confirmBook = (e) => {
    e.preventDefault();
    const data = { user: userInfo, movie };
    localStorage.setItem("bookinginfo", JSON.stringify(data));
    alert("Booking Success");
    setShow(false);
  };
  return (
    <div className="modal-main">
      <form className="modal-form" onSubmit={confirmBook}>
        <div className="top">
          <h4>Please Enter Your Info</h4>
          <p>Your Name</p>
          <input
            onChange={getUserInfo}
            name="name"
            required
            placeholder="Enter Your Name"
            type="text"
          />
          <p>Your Email</p>
          <input
            onChange={getUserInfo}
            required
            name="email"
            placeholder="Enter Your Email"
            type="email"
          />
          <p>Movie Name</p>
          <input value={movie?.name} readOnly type="text" />
          <p>Schedule Time</p>
          <input
            value={`${movie?.schedule?.days[0]} at ${movie?.schedule?.time}`}
            readOnly
            type="text"
          />
        </div>
        <div className="bottom">
          <button onClick={() => setShow(false)}>Cancel</button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
