import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const url = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/jobs";

const JobsDetail = ({ data }) => {
  const { _id: id, pengalaman, tanggal, title, kualifikasi } = data.vacancy;
  const setTanggal = (tanggal) => {
    return `${tanggal.slice(8, 10)}-${tanggal.slice(5, 7)}-${tanggal.slice(
      0,
      4
    )}`;
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 h-full  mx-auto  bg-clrBaseLight rounded-sm shadow-sm p-10">
      <div
        className="w-full  border-b-clrBorder pb-5 mb-5"
        style={{ borderBottomWidth: "1px" }}
      >
        <h4>{title}</h4>
        <div className="line"></div>
        <h5>Dipost tanggal : {setTanggal(tanggal)}</h5>
        {pengalaman ? (
          <h5 className=" capitalize">
            pengalaman minimal : {pengalaman} tahun
          </h5>
        ) : (
          <h5 className=" capitalize">Menerima Fresh Graduate</h5>
        )}
      </div>
      <h5>Persyaratan: </h5>
      <ul className="loker-content-list mb-5">
        {kualifikasi.map((item, index) => {
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
      <Link href={`/hospital/jobs`}>
        <button className="btn bg-clrPrimaryDark">Back</button>
      </Link>
    </div>
  );
};

export default JobsDetail;

// export async function getStaticPaths() {
//   const res = await fetch(url);
//   const data = await res.json();
//   const paths = data.vacancies.slice(0, 3).map((item) => {
//     return { params: { jobsid: item._id } };
//   });
//   return {
//     paths,
//     fallback: "blocking",
//     // Only render 3 pages at the beginning and going to continue only when triggered
//   };
// }

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req.headers);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name = wishwash"]);
  // console.log(req.headers.cookie);
  // res.setHeaders('Set-Cookie', ['name'='wishwash'])
  const response = await fetch(`${url}/${params.jobsid}`);
  const data = await response.json();
  return { props: { data } };
}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const res = await fetch(`${url}/${params.jobsid}`);
//   const data = await res.json();
//   return { props: { data } };
// }
