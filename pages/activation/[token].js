import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import { toast } from "react-toastify";
const Activation = () => {
  const router = useRouter();
  let token = router.query.token;
  const [name, setName] = useState("");
  const [tok, setTok] = useState("");
  let decoded = jwt.decode(token);

  useEffect(() => { 
    if (token) {
      setName(decoded.name)
      setTok(token);
    }
  }, [decoded || token]);

  const clickSubmit = async (e) => {
    e.preventDefault();
    console.log("Hi ")
    try {
      const { data } = await axios.post(`/account-activation`, { token });
      if (data.error) {
        toast.error(data.error);
        router.push("/register");
      } else {
        toast.success(data.message);
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <>
   <div className="container">
       <div className="text-center py-5 ">
       <h1 className="">Hey {name},please activate acoount</h1>
        <a className="btn btn-outline-primary" onClick={clickSubmit} >
       Activate Account
        </a>
       </div>
   </div>
   </>
  );
};

export default Activation;
