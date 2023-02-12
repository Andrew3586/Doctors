import React, { useState } from "react";

const AddAppointmentsForm = () => {
  const [aDate, setADate] = useState("");
  const [aFees, setAFees] = useState("");
  const [aReason, setAReason] = useState("");
  const [aDoctorsName, setADoctorsName] = useState("");

  const aDateHandler = (event) => {
    setADate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // setaDate("");
    // setaFees("");
    // setaReason("");
    // setaDoctorsName("");
  };

  return (
    <div className="flex flex-col h-screen items-center gap-6">
      <h1 className="text-4xl font-bold m-4">Add Appointment</h1>
      <form onSubmit={formSubmitHandler} className="grid gap-6 mb-6 w-[40%]">
        <div>
          <label
            htmlFor="appointmentdate"
            className="block mb-2 text-md font-medium"
          >
            Appointment Date
          </label>
          <input
            type="date"
            id="appointmentdate"
            min="2022-01-31"
            max="2023-01-31"
            onChange={aDateHandler}
            value={aDate}
            required
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div>
          <label
            htmlFor="appointmentfees"
            className="block mb-2 text-md font-medium"
          >
            Appointment Fees
          </label>
          <input
            type="text"
            id="appointmentfees"
            onChange={(e) => {
              setAFees(e.target.value);
            }}
            value={aFees}
            required
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div>
          <label
            htmlFor="appointmentreason"
            className="block mb-2 text-md font-medium"
          >
            Appointment Reason
          </label>
          <input
            type="text"
            id="appointmentreason"
            onChange={(e) => {
              setAReason(e.target.value);
            }}
            value={aReason}
            required
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div >
          <label
            htmlFor="doctorsname"
            className="block mb-2 text-md font-medium"
          >
            Appointment Doctor's Name
          </label>
          <select
            name="doctorsname"
            id="doctorsname"
            onChange={(e) => {
              setADoctorsName(e.target.value);
            }}
            required
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          >
            <option disabled selected>
              Select Doctor
            </option>
            <option value="Dr James Cross">Dr James Cross</option>
            <option value="Dr Peter Day">Dr Peter Day</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="lg:absolute lg:bottom-[30%]">
          <input
            type="submit"
            value="Submit"
            className="text-white cursor-pointer hover:bg-[hsl(231,25%,26%)] p-4 bg-[#243e8e] rounded duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAppointmentsForm;
