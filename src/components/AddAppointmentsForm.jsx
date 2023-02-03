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
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="appointmentdate">Appointment Date</label>
        <input
          type="date"
          id="appointmentdate"
          min="2022-01-31"
          max="2023-01-31"
          onChange={aDateHandler}
          value={aDate}
          required
        />

        <label htmlFor="appointmentfees">Appointment Fees</label>
        <input
          type="text"
          id="appointmentfees"
          onChange={(e) => {
            setAFees(e.target.value);
          }}
          value={aFees}
          required
        />

        <label htmlFor="appointmentreason">Appointment Reason</label>
        <input
          type="text"
          id="appointmentreason"
          onChange={(e) => {
            setAReason(e.target.value);
          }}
          value={aReason}
          required
        />

        <label htmlFor="doctorsname">Doctors Name</label>
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

        <input type="submit" value="Add Appointment" />
      </form>
    </>
  );
};

export default AddAppointmentsForm;
