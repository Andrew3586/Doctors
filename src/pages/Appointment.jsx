import React from "react";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div>
      Appointment
      <Link to="/addappointment">Appointment</Link>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Appointment;
