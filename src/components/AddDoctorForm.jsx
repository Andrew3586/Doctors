import React, { useState } from "react";

const AddDoctorsForm = () => {
  const [aDoctorsName, setaDoctorsName] = useState("");

  const aDoctorsNameHandler = (event) => {
    setaDoctorsName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setaDoctorsName("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="adoctorsname">Doctors Name</label>
        <input
          type="text"
          id="adoctorsname"
          onChange={aDoctorsNameHandler}
          value={aDoctorsName}
          required
        />
        <input type="submit" value="Add Doctors Name" />
      </form>
    </>
  );
};

export default AddDoctorsForm;
