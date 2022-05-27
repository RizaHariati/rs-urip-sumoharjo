import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full h-20 bg-stone-700">
      <Link href="/">
        <a className=" text-white">Home</a>
      </Link>
    </div>
  );
};

export default Navbar;
