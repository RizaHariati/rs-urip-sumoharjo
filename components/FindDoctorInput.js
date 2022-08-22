import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetDoctors,
  resetKeywords,
  setDoctorList,
  setKeywords,
  setOpenList,
  setspecializationList,
} from "../slice/doctorSlice";
import DoctorList from "./DoctorList";
import LoadingSpinner from "./LoadingSpinner";
const URL = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/doctors/?";
const FindDoctorInput = () => {
  const { doctorList, OpenList, specializationList, keywords, categories } =
    useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchName = async (key, status) => {
    if (!key) {
      return dispatch(resetDoctors());
    }
    setLoading(true);
    try {
      const response = await fetch(`${URL}${status}=${key}`);
      const data = await response.json();

      if (data.total && data.total > 0) {
        const { allDoctors } = data;
        dispatch(setDoctorList(allDoctors));
        if (status === "poli") {
          if (!OpenList) {
            dispatch(setOpenList(true));
          }
          const filteredCategories = [
            ...new Set(allDoctors.map((doctor) => doctor.poli)),
          ];
          dispatch(setspecializationList(filteredCategories));
          setLoading(false);
          return;
        } else {
          setLoading(false);
          return;
        }
      } else {
        dispatch(resetDoctors());
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);

      return;
    }
  };

  useEffect(() => {
    if (keywords.key) {
      fetchName(keywords.key, keywords.status);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords.key]);

  const handleSearch = async (item) => {
    dispatch(setOpenList(false));
    setLoading(true);
    try {
      const response = await fetch(`${URL}poli=${item}`);
      const data = await response.json();
      const { allDoctors, total } = data;
      if (total > 0) {
        dispatch(setDoctorList(allDoctors));
        setLoading(false);
        return;
      } else {
        setDoctorList([]);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keywords.key) {
      return dispatch(resetDoctors());
    } else {
      return fetchName(keywords.key, keywords.status);
    }
  };
  if (categories.length < 0) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  } else {
    return (
      <div
        className="relative bg-clrBaseLight"
        data-testid="search-doctor-form-container"
      >
        <form
          id="search-doctor-form"
          className="px-2 mb-3 md:mb-5 z-20 flex overflow-hidden mx-auto"
          style={{ minWidth: "300px" }}
          onSubmit={handleSubmit}
        >
          <input
            autoComplete="off"
            name="search"
            value={keywords.key || ""}
            id="search-doctor"
            placeholder={
              keywords.isQueryName ? "Nama dokter..." : "Spesialisasi dokter..."
            }
            className="w-full p-2 px-5 h-10 outline-none shadow-sm  rounded-l-full mb-5"
            onChange={(e) => {
              e.preventDefault();
              dispatch(setKeywords({ ...keywords, key: e.target.value }));
            }}
            onFocus={() => {
              if (keywords.status === "poli") {
                dispatch(resetKeywords());
                dispatch(setOpenList(true));
                dispatch(setspecializationList(categories));
              }
            }}
          />
          <button
            type="submit"
            className="w-14 h-10 rounded-r-full bg-clrPrimaryDark shadow-sm text-clrBaseLight"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        {/* ------------------------ search results ------------------------ */}
        {loading && <LoadingSpinner />}

        {OpenList && (
          <div className="list-menu" id="specialization-list">
            {specializationList.length > 0 &&
              specializationList.map((item, index) => {
                return (
                  <button
                    id="specialization-item"
                    onClick={() => handleSearch(item)}
                    key={index}
                    className="text-left h-10 py-3
                        transition-all hover:border-b-2 hover:pl-1 hover:font-medium hover:text-clrTextMedium text-clrTextDark active:text-clrTextDark"
                  >
                    <p>{item}</p>
                  </button>
                );
              })}
          </div>
        )}

        {!OpenList && doctorList.length > 0 && <DoctorList />}

        {!loading && keywords.key && doctorList.length < 1 && (
          <div className="w-full text-center mt-5" id="doctor-list-not-exist">
            <h4>
              {`Tidak ada ${keywords.status} dengan kata kunci ${keywords.key}`}
            </h4>
          </div>
        )}

        {!keywords.key && <div className="find-doctor-image mb-10"></div>}
        {/* ------------------------ search results ------------------------ */}
      </div>
    );
  }
};

export default FindDoctorInput;
