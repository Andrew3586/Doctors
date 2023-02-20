import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";

const DoctorsList = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/doctors")
      .then((data) => {
        console.log(data.data);
        setDoctorData(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    console.log(id);
    axios
      .delete(`http://localhost:3000/doctors/${id}`)
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          axios
            .get("http://localhost:3000/doctors")
            .then((data) => {
              console.log(data.data);
              setDoctorData(data.data);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col gap-12 items-center">
      {doctorData.length > 0 && (
        <table className="w-[50vw] border-solid border-4 max-w-lg">
          <thead className="m-2">
            <tr className="border-solid border-2 bg-[#ba34db] text-white">
              <th className="p-2 text-left border-solid border-2 ">
                Doctors Name
              </th>
              <th className="p-2 text-left border-solid border-2">Action</th>
            </tr>
          </thead>
          <tbody className="m-2">
            {doctorData.map((object, index) => {
              return (
                <tr className="border-solid border-2" key={index}>
                  <td className="p-2 border-solid border-2">{object.name}</td>
                  <td className="p-2 border-solid border-2">
                    <button
                      className="m-2"
                      onClick={(event) => {
                        handleDelete(event, object.id);
                      }}
                    >
                      <MdOutlineDelete className="hover:text-red-500 duration-300" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DoctorsList;
