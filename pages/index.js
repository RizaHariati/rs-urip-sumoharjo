import React from "react";
import SideMenu from "./components/SideMenu";

const Home = () => {
  return (
    <div>
      <div className="main-pages-container home-background">
        <div className="h-full">Home</div>
        <SideMenu />
      </div>
      <articles className="h-32 block bg-stone-100">
        this will be articles
      </articles>
    </div>
  );
};

export default Home;
