import React from "react";
import Image from "next/image";

const Rules = () => {
  return (
    <div className="px-0 lg:px-32 py-10">
      <div className=" bg-clrBaseLightActive  p-10 rounded-sm shadow-sm">
        <div className="float-right w-40 h-40 ml-1">
          <Image
            src="/images/masked.jpg"
            alt="masked man"
            width={200}
            height={200}
          />
        </div>
        <h2 className="font-normal mb-2">Kami peduli pada Anda</h2>
        <p className="mb-5">
          Cara terbaik untuk melindungi Anda dan orang-orang yang Anda kasihi
          adalah dengan melakukan vaksinasi serta boosternya. Mengikuti
          peraturan COVID TESTING, menggunakan masker, mencuci tangan dan
          menjaga jarak.
        </p>
        <h2 className="font-normal mb-2">Tata Cara Menjaga Keamanan Anda</h2>
        <p>
          Masker diwajibkan untuk memasuki area dan fasilitas manapun di dalam
          RS Urip Sumoharjo dan harus dipakai sepanjang waktu, sekalipun Anda
          sudah divaksinasi dan mendapatkan booster. Kami akan menyediakan
          Masker jika diperlukan.
        </p>
        <p>
          Syal, bandana, masker dengan lubang pernafasan, atau pelindung plastik
          muka, tidak bisa menggantikan masker standar.
        </p>
      </div>
    </div>
  );
};

export default Rules;
