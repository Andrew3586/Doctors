import React from "react";
import DoctorsList from "../components/DoctorsListTable";
import { Link } from "react-router-dom";

const Doctor = () => {
  return (
    <div>
      <h1>Doctor Page</h1>
      <Link to="/adddoctors">Add Doctor</Link>
      <Link to="/">Go Back</Link>
      <DoctorsList />
    </div>
  );
};

export default Doctor;
