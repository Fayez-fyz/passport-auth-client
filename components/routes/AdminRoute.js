import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context";
const AdminRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  const [state] = useContext(UserContext);
  useEffect(() => {
    if (state && state.role) getCurrentAdmin();
  }, [state && state.role]);

  const getCurrentAdmin = async () => {
    try {
      const { data } = await axios.get(`/current-admin`);
      if (data.ok) setOk(true);
      console.log('this is data',data)
    } catch (error) {
      console.log('this is error',error)
      router.push("/login");
    }
  };
  process.browser &&
    state === null &&
    setTimeout(() => {
      getCurrentAdmin();
    }, 1000);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    />
  ) : (
    <>{children}</>
  );
};

export default AdminRoute;
