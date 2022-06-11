import doctordb from "../data/doctordb.json";
import facilitydb from "../data/facility.json";
import beddb from "../data/data_inap.json";
const FindPurpose = (purpose) => {
  const clinic = [...new Set(doctordb.map((item) => item.poli))];

  let list = [];
  if (purpose) {
    const doctor = doctordb.filter((item) =>
      item.nama.toLowerCase().includes(purpose.toLowerCase())
    );
    const specialization = clinic.filter((item) =>
      item.toLowerCase().includes(purpose.toLowerCase())
    );
    const facility = facilitydb.filter((item) =>
      item.title.toLowerCase().includes(purpose.toLowerCase())
    );
    const bed = beddb.filter((item) =>
      item.kelas.toLowerCase().includes(purpose.toLowerCase())
    );
    if (doctor.length > 0)
      list.push({ title: "doctor", data: doctor.map((item) => item.nama) });
    if (specialization.length > 0)
      list.push({ title: "specialization", data: specialization });

    if (facility.length > 0)
      list.push({
        title: "facility",
        data: facility.map((item) => item.title),
      });
    if (bed.length > 0)
      list.push({ title: "bed", data: bed.map((item) => item.kelas) });
  }
  return list;
};

export default FindPurpose;
