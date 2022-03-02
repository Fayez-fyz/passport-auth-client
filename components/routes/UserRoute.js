import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context";
const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  const [state] = useContext(UserContext);
  useEffect(() => {
    if (state && state.role) getCurrentUser();
  }, [state && state.role]);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/current-user`);
      if (data.ok) setOk(true);
      console.log('this is data',data)
    } catch (error) {
      router.push("/login");
    }
  };
  process.browser &&
    state === null &&
    setTimeout(() => {
      getCurrentUser();
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

export default UserRoute;
