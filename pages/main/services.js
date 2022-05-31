import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  const [facility, setFacility] = useState("");
  return (
    <div className="main-pages-container">
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit py-2 px-10 text-clrTextDark">
          <h2 className="py-2 border-b-2 border-b-clrBorder ">
            Fasilitas dan Poliklinik
          </h2>
          <h5>
            Fasilitas Medis dan Non Medis Terbaik Kami sesuai Perkembangan
            Teknologi Terkini
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}
        <div className="px-10 py-5">
          {/* --------------------------- subheader -------------------------- */}

          <div
            className="grid space-x-10 place-items-center "
            style={{ gridTemplateColumns: "3fr 5fr" }}
          >
            <Image
              src="/images/pelayanan-fasilitas/hemodialisa.jpg"
              height={200}
              width={400}
              className="object-cover"
            />
            <div className="relative w-full">
              <h3 className="text-right mb-3">
                Silahkan cari fasilitas yang Anda butuhkan
              </h3>
              <form className="w-full flex rounded-full overflow-hidden shadow-sm  ">
                <input
                  autoComplete="false"
                  name="facility"
                  value={facility || ""}
                  id="facility"
                  placeholder="Kata kunci fasilitas ..."
                  className="w-full p-2 px-5 h-10 outline-none"
                  onChange={(e) => {
                    e.preventDefault();
                    setdoctorList([]);
                    setFacility(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="w-14 h-10 bg-clrPrimaryDark text-clrBaseLight"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>

          {/* --------------------------- subheader -------------------------- */}
        </div>
      </div>

      <SideMenu />
    </div>
  );
};

export default Services;
