import React from "react";

const sloganwords = [
  "Senyum",
  "Sapa",
  "Sabar",
  "Salam",
  "Semangat",
  "Ringkas",
  "Rapih",
  "Resik",
  "Rawat",
  "Rajin",
];
const Slogan = () => {
  return (
    <div className="relative overflow-x-hidden w-full pb-10">
      <h2 className="text-center  mb-3 text-clrTextDark">
        Kami berusaha memberikan pelayanan terbaik untuk anda melalui :
      </h2>
      <div className="gridwithbackground">
        {sloganwords.map((item, index) => {
          if (index === 0 || index == 9) {
            return (
              <button
                className="border-clrBaseLight border-2 col-span-2 text-white py-10 mix-blend-hard-light hover:mix-blend-lighten bg-clrTextDark cursor-default transition-all"
                key={index}
              >
                <h4 className="font-medium uppercase"> {item}</h4>
              </button>
            );
          } else {
            return (
              <button
                className="border-clrBaseLight border-2 text-white py-10 mix-blend-hard-light  bg-stone-600 hover:bg-stone-500 cursor-default transition-all"
                key={index}
              >
                <h4 className="font-medium uppercase">{item}</h4>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Slogan;
