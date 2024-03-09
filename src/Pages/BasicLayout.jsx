import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const BasicLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default BasicLayout;
