import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";

const AppointmentsTable = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then((data) => {
        console.log(data.data);
        setAppointmentsData(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    console.log(id);
    axios
      .delete(`http://localhost:3000/appointments/${id}`)
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          axios
            .get("http://localhost:3000/appointments")
            .then((data) => {
              console.log(data.data);
              setAppointmentsData(data.data);
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
      <table className="w-[60vw] border-solid border-4 ">
        <thead className="m-2">
          <tr className="border-solid border-2 bg-[#ba34db] text-white">
            <th className="p-2 text-left border-solid border-2 ">
              Appointment Date
            </th>
            <th className="p-2 text-left border-solid border-2">
              Appointment Dr
            </th>
            <th className="p-2 text-left border-solid border-2">
              Appointment Reason
            </th>
            <th className="p-2 text-left border-solid border-2">
              Appointment Fees
            </th>
            <th className="p-2 text-left border-solid border-2">Action</th>
          </tr>
        </thead>
        {appointmentsData.length > 0 && (
          <tbody className="m-2">
            {appointmentsData.map((el, index) => {
              return (
                <tr className="border-solid border-2" key={el.id}>
                  <td className="p-2 border-solid border-2">
                    {el.appointmentDate}
                  </td>
                  <td className="p-2 border-solid border-2">
                    {el.appointmentDoctor}
                  </td>
                  <td className="p-2 border-solid border-2">
                    {el.appointmentReason}
                  </td>
                  <td className="p-2 border-solid border-2">
                    {el.appointmentFees}
                  </td>
                  <td className="p-2 border-solid border-2">
                    <button
                      className="m-2"
                      onClick={(event) => {
                        handleDelete(event,el.id);
                      }}
                    >
                      <MdOutlineDelete className="hover:text-red-500 duration-300" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default AppointmentsTable;
