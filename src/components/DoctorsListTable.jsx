import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const DoctorsList = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
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
          <tr className="border-solid border-2">
            <td className="p-2 border-solid border-2">Peter Brown</td>
            <td className="p-2 border-solid border-2">
              <button className="m-2">
                <MdOutlineDelete className="hover:text-red-500 duration-300" />
              </button>
            </td>
          </tr>
          <tr className="border-solid border-2">
            <td className="p-2 border-solid border-2">Alexi Brown</td>
            <td className="p-2 border-solid border-2">
              <button className="m-2">
                <MdOutlineDelete className="hover:text-red-500 duration-300" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsList;
