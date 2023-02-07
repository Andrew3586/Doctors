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
    <>
      <form onSubmit={formSubmitHandler} className="flex flex-col items-center py-10">
        <label htmlFor="appointmentdate"><div className="py-8 font-bold text-2xl"><h1>Add Appointment</h1></div>
          <div className="flex justify-center py-6" >Appointment Date</div></label>
        <div className="border-2 border-width: 4px ">

          <input
            type="date"
            id="appointmentdate"
            min="2022-01-31"
            max="2023-01-31"
            onChange={aDateHandler}
            value={aDate}
            required
          />
        </div>

        <label htmlFor="appointmentfees"><div className="py-8">Appointment Fees</div></label>
        <input
          type="text"
          id="appointmentfees"
          onChange={(e) => {
            setAFees(e.target.value);
          }}
          value={aFees}
          required
        />

        <label htmlFor="appointmentreason"><div className="py-8">Appointment Reason</div></label>
        <input
          type="text"
          id="appointmentreason"
          onChange={(e) => {
            setAReason(e.target.value);
          }}
          value={aReason}
          required
        />

        <label htmlFor="doctorsname"><div className="py-6">Appointment Doctors Name</div></label>
        <select
          name="doctorsname"
          id="doctorsname"
          onChange={(e) => {
            setADoctorsName(e.target.value);
          }}
          required
        >
          <option disabled selected>
            Select Doctor
          </option>
          <option value="Dr James Cross">Dr James Cross</option>
          <option value="Dr Peter Day">Dr Peter Day</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <div className="py-60">
          <div className="text-white cursor-pointer hover:bg-[hsl(231,25%,26%)] p-4 bg-[#243e8e] rounded duration-300">
            <input type="submit" value="Add Appointment" />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddAppointmentsForm;
