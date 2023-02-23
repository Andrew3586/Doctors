import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase/config";

const DoctorsList = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "doctors"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setDoctorData(
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
      const taskDocRef = doc(db, "doctors", id);
      await deleteDoc(taskDocRef);
    } catch (err) {
      console.error(err);
    }
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
                  <td className="p-2 border-solid border-2">
                    {object.data.name}
                  </td>
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
