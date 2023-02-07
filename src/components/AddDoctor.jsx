import React, { useState } from "react";

const AddDoctor = () => {
    const [aAddDoctor, setAAddDoctor] = useState("");

    const aAddDoctorHandler = (event) => {
        setAAddDoctor(event.target.value);
}
const formSubmitHandler = (event) => {
    event.preventDefault();
    setAAddDoctor("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="aadddoctor">Add Doctor</label>
        <input
          type="text"
          id="aadddoctor"
          onChange={aAddDoctorHandler}
          value={aAddDoctor}
          required
        />
        <input type="submit" value="Add Doctor" />
      </form>
    </>
  );
};

export default AddDoctor;

