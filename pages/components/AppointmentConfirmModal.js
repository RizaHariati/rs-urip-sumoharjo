import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const AppointmentConfirmModal = ({
  setOpenConfirmModal,
  confirmedName,
  formik,
}) => {
  const router = useRouter();
  return (
    <div className="modal-base">
      <div
        className="modal-container  bg-clrBaseLightHover h-fit"
        style={{ width: "500px" }}
      >
        <div className="w-full  pt-10 px-5 pb-0 ">
          <div className="sub-form pb-0  bg-clrBaseLightHover ">
            <div className="form-title">
              <h5>Data dikonfirmasi</h5>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src="/images/logo bulat.jpg" width={50} height={50} />
              <p className="leading-5">
                Terimakasih {confirmedName}, data Anda sudah kami terima
                <br />
                Petugas kami akan menghubungi anda secepat mungkin untuk
                mengkonfirmasi. Sampai berjumpa di RS Urip Sumoharjo.
              </p>
            </div>

            <div className="flex space-x-5 my-3 w-full justify-center">
              <button
                type="submit"
                onClick={() => {
                  setOpenConfirmModal({
                    status: false,
                    confirmedName: "",
                  });

                  formik.resetForm();
                  router.reload(window.location.pathname);
                }}
                className=" bg-clrPrimaryDark logo-btn h-7"
              >
                <FontAwesomeIcon icon={faThumbsUp} className="mr-3" />
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmModal;
