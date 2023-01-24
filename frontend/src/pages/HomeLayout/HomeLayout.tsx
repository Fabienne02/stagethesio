import { Outlet } from "react-router";

import HeaderWrapper from "../../components/Molecules/HeaderWrapper";
import Footer from "../../components/HomePage/Footer";

const HomeLayout = () => {
  return (
    <>
      <HeaderWrapper />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
