import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const AddDoctorsForm = () => {
  let navigate = useNavigate();

  const [aDoctorsName, setaDoctorsName] = useState("");

  const aDoctorsNameHandler = (event) => {
    setaDoctorsName(event.target.value);
  };

  const formSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const response=await addDoc(collection(db, "doctors"), {
        name: aDoctorsName,
        created: Timestamp.now(),
      });
      if (response) {
        setaDoctorsName("");
        navigate("/doctors");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <h1 className="text-4xl font-bold m-4">Add Doctor</h1>
      <form
        onSubmit={formSubmitHandler}
        className="w-full max-w-sm flex items-center border-b border-[#243e8e] py-2"
      >
        <input
          type="text"
          id="adoctorsname"
          onChange={aDoctorsNameHandler}
          value={aDoctorsName}
          required
          placeholder="Doctor Name"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <input
          className="flex-shrink-0 bg-[#243e8e] hover:bg-[#323754] border-[#243e8e] hover:border-[#323754] text-sm border-4 text-white py-1 px-2 rounded duration-300"
          type="submit"
          id="submit"
          value="Add"
        />
        <Link
          type="button"
          className="flex-shrink-0 border-transparent border-4 text-[#243e8e] hover:text-[#323754] text-sm py-1 px-2 rounded duration-300"
          to="/"
        >
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default AddDoctorsForm;
