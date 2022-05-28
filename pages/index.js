import React, { useEffect, useState } from "react";
import SideMenu from "./components/SideMenu";

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 500);
  }, []);

  return (
    <div>
      <div className="main-pages-container home-background">
        <div className="relative h-full">
          <div
            className={
              showTitle
                ? "absolute w-full bottom-12 left-10 text-clrBaseLight pr-20 transition-all opacity-100"
                : "absolute w-full bottom-12 left-32 text-clrBaseLight pr-20 transition-all opacity-0"
            }
          >
            <h1>Rs Urip Sumoharjo</h1>

            <h2>
              Memberikan Pelayanan yang Profesional dan Prima kepada Seluruh
              Masyarakat
            </h2>
          </div>
        </div>
        <SideMenu />
      </div>
      <articles className="h-32 block bg-stone-100">
        this will be articles
      </articles>
    </div>
  );
};

export default Home;
