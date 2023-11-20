import React from "react";
import Sidenav from "../components/SideNav/sidenav";
import Groups from "../components/Groups/groups";


const HomePage = () => {
  return (
    <>
    <div className="home">
        <Sidenav/>
        <Groups/>
    </div>
    </>
  );
};

export default HomePage;
