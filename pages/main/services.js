import React, { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
// import facilities from "../../data/facility.json";
import Modal from "../../components/Modal";
import LoadingSpinner from "../../components/LoadingSpinner";

const URL = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1";

const Services = ({ data }) => {
  const { total, facilities: sourceFacilities } = data;
  const [facilities, setFacilities] = useState(sourceFacilities);
  const [facilityCategories, setFacilityCategories] = useState([]);
  const [facility, setFacility] = useState("");
  const [openModal, setOpenModal] = useState({ opened: false, facility: {} });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (facilities.length > 0) {
      const newCategories = [
        ...new Set(facilities.map((item) => item.category)),
      ];
      setFacilityCategories(newCategories);
    }
  }, [facilities]);

  const fetchData = async (key) => {
    setLoading(true);
    try {
      const res = await fetch(`${URL}/facilities/?title=${key}`);
      const data = await res.json();
      if (data) {
        const { total, facilities: sourceFacilities } = data;

        if (sourceFacilities) setFacilities(sourceFacilities);
        sourceFacilities ? setFacilities(sourceFacilities) : setFacilities([]);
        setLoading(false);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    if (facility) {
      fetchData(facility);
    }
  }, [facility]);

  return (
    <div className="main-pages-container">
      <Head>
        <title>rs-uripsumoharjo || Fasilitas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {openModal.opened && (
        <Modal facility={openModal.facility} setOpenModal={setOpenModal} />
      )}
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit my-3 md:my-5 px-5 md:px-10 text-clrTextDark">
          <h2 className="border-b-2 mb-2 md:mb-5 border-b-clrBorder ">
            Fasilitas
          </h2>
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
              src="/images/pelayanan-fasilitas/small/hemodialisa.jpg"
              height={200}
              width={400}
              className="object-cover"
              alt="hemodialisa"
              loading="lazy"
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
          {loading && <LoadingSpinner />}
          {!loading && facilities.length > 0 && (
            <div className=" bg-clrBaseLight pb-10">
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

          {facilities.length < 1 && (
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
  const { _id, title, img } = item;
  const { cloud_image } = img;
  return (
    <button
      key={_id}
      className="facility-list-btn"
      onClick={() => setOpenModal({ opened: true, facility: item })}
    >
      <div className="absolute w-full h-full top-0 left-0">
        <Image
          loading="eager"
          src={cloud_image}
          width={300}
          height={200}
          className=" object-cover object-center"
        />
      </div>
      <h5 className="z-20 leading-4">{title}</h5>
      <div className=" transition-all bg-clrTextMedium hover:bg-clrBorder active:bg-clrBaseLightActive bg-opacity-40 mix-blend-multiply absolute w-full h-full top-0 left-0"></div>
    </button>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${URL}/facilities`);
  const data = await res.json();

  return { props: { data } };
};
