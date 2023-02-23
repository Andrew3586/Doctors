import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { db } from "../Firebase/config";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

const AppointmentsTable = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "appointments"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setAppointmentsData(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);

  const handleDelete = async (event, id) => {
    try {
      event.preventDefault();
      const taskAppRef = doc(db, "appointments", id);
      await deleteDoc(taskAppRef);
    } catch (err) {
      console.error(err);
    }
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
                    {el.data.appointmentDate}
                  </td>
                  <td className="p-2 border-solid border-2">
                    {el.data.appointmentDoctor}
                  </td>
                  <td className="p-2 border-solid border-2">
                    {el.data.appointmentReason}
                  </td>
                  <td className="p-2 border-solid border-2">
                    {el.data.appointmentFees}
                  </td>
                  <td className="p-2 border-solid border-2">
                    <button
                      className="m-2"
                      onClick={(event) => {
                        handleDelete(event, el.id);
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
