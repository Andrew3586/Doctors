import React, { useState } from "react";

const EditDoctor = () => {
    const [aEditDoctor, setAEditDoctor] = useState("");

    const aEditDoctorHandler = (event) => {
        setAEditDoctor(event.target.value);
}
const formSubmitHandler = (event) => {
    event.preventDefault();
    setAEditDoctor("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="aeditdoctor">Edit Doctor</label>
        <input
          type="text"
          id="aeditdoctor"
          onChange={aEditDoctorHandler}
          value={aEditDoctor}
          required
        />
        <input type="submit" value="Edit Doctor" />
      </form>
    </>
  );
};

export default EditDoctor;
