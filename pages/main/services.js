import React, { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import facilities from "../../data/facility.json";
import Modal from "../../components/Modal";

const Services = () => {
  const [facility, setFacility] = useState("");
  const [facilityList, setFacilityList] = useState([]);
  const [openModal, setOpenModal] = useState({ opened: false, facility: {} });
  const facilityCategories = [
    ...new Set(facilities.map((item) => item.category)),
  ];

  useEffect(() => {
    if (facility) {
      const list = facilities.filter((item) =>
        item.title.toLowerCase().includes(facility.toLowerCase())
      );
      return setFacilityList(list);
    }
  }, [facility]);

  return (
    <div className="main-pages-container">
      {openModal.opened && (
        <Modal facility={openModal.facility} setOpenModal={setOpenModal} />
      )}
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit py-2 px-5 md:px-10 text-clrTextDark">
          <h2 className="py-2 border-b-2 border-b-clrBorder ">Fasilitas</h2>
          <h5>
            Fasilitas Medis dan Non Medis Terbaik Kami sesuai Perkembangan
            Teknologi Terkini
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}
        <div className=" px-5 md:px-10 py-5">
          {/* --------------------------- subheader -------------------------- */}

          <div className="facility-input-container ">
            <Image
              src="/images/pelayanan-fasilitas/hemodialisa.jpg"
              height={200}
              width={400}
              className="object-cover"
              alt="hemodialisa"
            />
            <div className="relative w-full ">
              <h5 className="text-center md:text-right mt-3 md:mt-0 mb-3 text-clrTextMedium">
                Silahkan cari fasilitas yang Anda butuhkan
              </h5>
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

          {/*  ------------------------- facility list ------------------------ */}
          {!facility && (
            <div>
              {facilityCategories.map((item, index) => {
                return (
                  <div key={index}>
                    <h3>{item}</h3>
                    <div className="w-20 h-1 bg-clrPrimaryDark mt-1 mb-3"></div>
                    <div className="facility-list">
                      {facilities
                        .filter((facilityItem) => {
                          return facilityItem.category === item;
                        })
                        .map((facilityItem, index) => {
                          return (
                            <FacilityButton
                              key={index}
                              item={facilityItem}
                              setOpenModal={setOpenModal}
                            />
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {facility && facilityList && (
            <div className="facility-list">
              {facilityList.map((item, index) => {
                return (
                  <FacilityButton
                    key={index}
                    item={item}
                    setOpenModal={setOpenModal}
                  />
                );
              })}
            </div>
          )}
          {facility && facilityList.length < 1 && (
            <div>
              <h5>Tidak ditemukan fasilitas dengan kata kunci tersebut</h5>
            </div>
          )}
          {/*  ------------------------- facility list ------------------------ */}
        </div>
      </div>
      {/*  ----------------------------- modal ---------------------------- */}

      {/*  ----------------------------- modal ---------------------------- */}
      <SideMenu />
    </div>
  );
};

export default Services;

const FacilityButton = ({ item, setOpenModal }) => {
  const { id, title, img } = item;
  return (
    <button
      key={id}
      className="facility-list-btn"
      style={{
        backgroundImage: `url('/images/pelayanan-fasilitas/small/${img}.jpg')`,
      }}
      onClick={() => setOpenModal({ opened: true, facility: item })}
    >
      <h5 className="z-20 leading-4">{title}</h5>
      <div className=" transition-all bg-clrTextMedium hover:bg-clrBorder active:bg-clrBaseLightActive bg-opacity-40 mix-blend-multiply absolute w-full h-full top-0 left-0"></div>
    </button>
  );
};
