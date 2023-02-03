import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link to="doctors">Doctor</Link>
      <Link to="appointments">Appointment</Link>
    </div>
  );
};

export default Home;
