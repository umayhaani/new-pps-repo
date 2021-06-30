import React from "react";
import CourseAdmins from "./CourseAdmins";
import SuperAdmin from "./SuperAdmin";
import { useLocalStorage } from "../../LocalStorage/Local";

const Admin = () => {
  const [adminType, setAdminType] = useLocalStorage("adminType", "null");
  return (
    <>
      {adminType === "admin" && <SuperAdmin />}
      {adminType !== "admin" && <CourseAdmins />}
    </>
  );
};

export default Admin;
