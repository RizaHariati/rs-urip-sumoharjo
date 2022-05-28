import {
  faAngleRight,
  faCaretDown,
  faCaretUp,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import adData from "../../data/advertising.json";
const Advertising = () => {
  const [openAd, setOpenAd] = useState(false);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (index > adData.length - 1) {
      setIndex(1);
    } else if (index < 1) {
      setIndex(adData.length - 1);
    }
  }, [index]);

  useEffect(() => {
    if (openAd) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 4000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [openAd]);

  const handleNext = () => {
    setIndex(index + 1);
  };

  return (
    <div className="w-full bg-clrBaseLight">
      <div className="h-12 border-b border-b-clrBorder px-10 flex items-center justify-between">
        <div className="flex space-x-2 text-clrPrimaryDark">
          <FontAwesomeIcon icon={faHandHoldingHeart} className="text-2xl" />
          <h3 className="text-xl font-semibold">Kepedulian Kami</h3>
        </div>
        <button onClick={() => setOpenAd(!openAd)}>
          <FontAwesomeIcon
            icon={openAd ? faCaretUp : faCaretDown}
            className={
              openAd
                ? "text-3xl text-clrPrimaryDark animate-none"
                : "text-3xl text-clrPrimaryDark animate-bounce"
            }
          />
        </button>
      </div>
      <div className={openAd ? "h-80 ad-container " : "h-0 ad-container"}>
        <div className="relative h-80 w-full">
          {adData.map((item) => {
            const { id, title, image, info } = item;
            return (
              <div
                className={
                  index === parseInt(id)
                    ? "ad-slides-container"
                    : "ad-slides-container opacity-0 left-0"
                }
                key={id}
              >
                <button
                  onClick={() => handleNext()}
                  className="w-10 h-10 bottom-5 right-5 bg-clrPrimaryDark shadow-clrPrimaryBorder cursor-pointer shadow-md absolute z-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all active:bg-opacity-80"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-xl text-clrBaseLight"
                  />
                </button>
                <div className="h-full overflow-hidden">
                  <Image
                    src={`/images/slides/${image}`}
                    width={420}
                    height={260}
                    className="object-cover object-left-top"
                  />
                </div>
                <div className="p-4">
                  <div className="flex space-x-2">
                    <Image
                      src="/images/logo bulat.jpg"
                      width={20}
                      height={10}
                      className=" object-center object-cover rounded-full "
                    />
                    <p className="font-semibold">{title}</p>
                  </div>
                  <p className="leading-4 text-sm">{info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advertising;
