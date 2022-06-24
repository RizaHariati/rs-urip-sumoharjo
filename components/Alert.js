import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Alert = ({ msg, setOpenAlert }) => {
  return (
    <div className="bg-black w-full h-full fixed z-30 top-0 bg-opacity-50 flex items-center justify-center">
      <div className=" relative w-96 h-28 rounded-sm bg-pink-200 bg-opacity-75 z-40 mx-auto p-5">
        <h4>Alert</h4>
        <div>
          <p>{msg}</p>
        </div>
        <button
          className="absolute top-5 right-5"
          onClick={() => setOpenAlert({ status: false, msg: "" })}
        >
          <FontAwesomeIcon className="text-red-600" icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default Alert;
