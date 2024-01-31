/* eslint-disable no-unused-vars */
import React, { Children } from "react";
import MainSidebar from "../components/Layout/MainSidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

function Layout() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      {/* Header */}
      <header className="">
        <Header />
      </header>
      <section className="flex flex-row h-[calc(100vh-56px)]">
        {/* left */}
        <MainSidebar />
        {/* right */}
        <div className="border w-full p-2">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Layout;
