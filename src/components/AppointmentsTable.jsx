import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const AppointmentsTable = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
      <table className="w-[50vw] border-solid border-4 max-w-lg">
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
            <th className="p-2 text-left border-solid border-2">
              Appointment Type
            </th>
            <th className="p-2 text-left border-solid border-2">Action</th>

          </tr>
        </thead>
        <tbody className="m-2">
          <tr className="border-solid border-2">
            <td className="p-2 border-solid border-2">26-9-2022</td>
            <td className="p-2 border-solid border-2">
            </td>
          </tr>
          <tr className="border-solid border-2">
            <td className="p-2 border-solid border-2">17-1-2020</td>
            <td className="p-2 border-solid border-2">
            </td>
          </tr>
              <button className="m-2">
                <FiEdit3 className="hover:text-blue-500 duration-300" />
              </button>
              <button className="m-2">
                <MdOutlineDelete className="hover:text-red-500 duration-300" />
              </button>
              <button className="m-2">
                <FiEdit3 className="hover:text-blue-500 duration-300" />
              </button>
              <button className="m-2">
                <MdOutlineDelete className="hover:text-red-500 duration-300" />
              </button>
            </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
