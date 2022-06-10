import {
  faCaretRight,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import hak from "../../data/data_hak_kewajiban.json";

const TermAndConditions = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <div className=" bg-clrBaseLightActive w-full py-5 ">
      {hak.map((pasal) => {
        const { menu, title, rules } = pasal;
        return (
          <div key={menu} className="mx-auto text-clrTextDark  ">
            <div className="w-full md:w-9/12 mx-auto ">
              <div className="w-full  px-5">
                <h5 className="leading-5 text-center my-5">{title}</h5>
              </div>
              <div className=" text-clrTextDark  ">
                {rules.map((rule) => {
                  const { id, title, info } = rule;
                  return (
                    <div
                      key={id}
                      className="bg-clrBaseLightHover hover:bg-white active:bg-clrBaseLightHover rounded-sm shadow-sm mb-2 px-7"
                    >
                      <div
                        className="flex items-center justify-between border-b-clrBorder"
                        style={
                          selected === id
                            ? { borderBottomWidth: "1px" }
                            : { borderBottomWidth: "0px" }
                        }
                      >
                        <h5 className="text-clrTextDark font-medium py-2">
                          {title}
                        </h5>
                        <button
                          onClick={() => {
                            toggle(id);
                          }}
                        >
                          <FontAwesomeIcon
                            className=" text-clrTextMedium active:text-clrTextDark hover:text-clrBorder transition-all"
                            icon={
                              selected === id ? faMinusCircle : faPlusCircle
                            }
                          />
                        </button>
                      </div>
                      {selected === id && (
                        <ul className="py-3 ">
                          {info.map((item, index) => {
                            return (
                              <li
                                key={index}
                                className="grid items-start m-2"
                                style={{ gridTemplateColumns: "1fr 14fr" }}
                              >
                                <FontAwesomeIcon
                                  icon={faCaretRight}
                                  className="text-clrBorder mt-2"
                                />
                                <p className="leading-5">{item}</p>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TermAndConditions;
