import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center h-screen">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
          alt="doctor"
          className="w-[50px] h-[50px]"
        />
        <h1 className="ml-2 font-bold text-3xl">Doctor</h1>
      </div>
      <img
        src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
        alt="doctor-anime"
        className="rounded-md w-[300px] h-[250px]"
      />
      <div className="flex gap-8">
        <Link
          to="doctors"
          className="text-white cursor-pointer hover:bg-[hsl(231,25%,26%)] p-4 bg-[#243e8e] rounded duration-300"
        >
          Doctor
        </Link>
        <Link
          to="appointments"
          className="text-white cursor-pointer hover:bg-[hsl(231,25%,26%)] p-4 bg-[#243e8e] rounded duration-300"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Home;
