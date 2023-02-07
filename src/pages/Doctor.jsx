import React from "react";
import DoctorsList from "../components/DoctorsListTable";
import { Link } from "react-router-dom";

const Doctor = () => {
  return (
    <div className="flex flex-col items-center gap-8 justify-center">
      <h1 className="ml-2 font-bold text-3xl mt-10">Doctor List</h1>
      <div>
        <Link
          to="/adddoctors"
          className="flex-shrink-0 bg-[#243e8e] hover:bg-[#323754] border-[#243e8e] hover:border-[#323754] text-sm border-4 text-white py-1 px-2 rounded duration-300"
        >
          Add Doctor
        </Link>
        <Link
          to="/"
          className="flex-shrink-0 border-transparent border-4 text-[#243e8e] hover:text-[#323754] text-sm py-1 px-2 rounded duration-300"
        >
          Go Back
        </Link>
      </div>
      <DoctorsList />
    </div>
  );
};

export default Doctor;
