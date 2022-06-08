import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const CareItem = ({ icon, title, info, button, addclass, href }) => {
  return (
    <div className="grid " style={{ gridTemplateColumns: "1fr 5fr" }}>
      <div className="relative">
        <FontAwesomeIcon
          icon={icon}
          className="text-3xl sm:text-4xl md:text-5xl text-clrBorder"
        />
        <div
          className={`absolute h-6 w-6 bg-opacity-60 rounded-full ${addclass}`}
        ></div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h4>{title}</h4>
          <p>{info}</p>
        </div>
        <Link href={href}>
          <button className="w-fit bg-clrPrimaryMedium text-clrBaseLight px-5 py-2 my-5 hover:bg-clrPrimaryDark transition-all rounded-sm hover:shadow-md shadow-sm active:shadow-sm active:bg-clrPrimaryMedium">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CareItem;
