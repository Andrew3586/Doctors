import React from "react";

const DoctorsList = () => {
  return (
    <>
      <h1>Doctor List</h1>
      <table>
        <thead>
          <tr>
            <th>Doctors Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Peter Brown</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Alexi Brown</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DoctorsList;
