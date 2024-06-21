// import NavBar from './components/ui/NavBar'
import { Outlet } from "react-router-dom";
import Navbar from "./widgets/Navbar/Navbar";
import Footer from "./widgets/Footer/Footer";
import { useState } from "react";

export default function Root({ user, setUser, cost }) {
  return (
    <>
      <Navbar user={user} setUser={setUser} cost={cost}  />
      <Outlet/>
      <Footer user={user} />
    </>
  );
}
