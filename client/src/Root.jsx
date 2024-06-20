// import NavBar from './components/ui/NavBar'
import { Outlet } from "react-router-dom";
import Navbar from "./widgets/Navbar/Navbar";
import Footer from "./widgets/Footer/Footer";

export default function Root({ user, setUser }) {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Outlet/>
      <Footer />
    </>
  );
}
