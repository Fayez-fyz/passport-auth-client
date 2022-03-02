import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";
import { UserContext } from "../context";
import { Card } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
// import Google from "../components/oauth/Google";
// import Facebook from "../components/0auth/Facebook";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  // console.log(state)

  let handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,email,password,secret)
    setloading(true);
    try {
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });
      console.log("This is our data", data);
      if (data.error) {
        toast.error(data.error);
        setloading(false);
      } else {
        // console.log(data)
        //update context
        setState(data.user);
        // setState({
        //   name: data.user,
        //   token: data.token,
        // });
        //   //save in local storage
        //   window.localStorage.setItem("auth", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
     toast.error(error.response.data.error);
      setloading(false);
    }
  };

  const GoogleV1 = () => {
    window.location.href = `http://localhost:5000/api/login/v1/google`;
  };
  const GoogleV2 = () => {
    window.location.href = `http://localhost:5000/api/login/v2/google`;
  };
 
  const FacebookV1 = () => {
    window.location.href = `http://localhost:5000/api/login/v1/facebook`;
  };
  const FacebookV2 = () => {
    window.location.href = `http://localhost:5000/api/login/v2/facebook`;
  };


  if (state && state.role === "user") {
    router.push("/user/dashboard");
  } else if (state && state.role === "admin") {
    router.push("/admin/dashboard");
  }

  return (
    <div className="container-fluid gradient">
      <div className="row ">
        <div className="col-lg-4 offset-lg-4 mt-5 ">
          <Card>
            <div className="text-center">
              <h2 className="Mono">LOGIN</h2>
            </div>
            <AuthForm
              handleSubmit={handleSubmit}
              email={email}
              setemail={setemail}
              password={password}
              setpassword={setpassword}
              loading={loading}
              page="login"
            />


            <span className="d-flex  ">
            <div className="flex-fill mx-1">
            <button type="button" className="btn btn-dark col-12" onClick={GoogleV1}>
            <GoogleOutlined/>  Login as Attender
            </button>
            {/* <Google btn='Attender'/> */}
            </div>
            <div className="flex-fill mx-1">
            <button type="button" className="btn btn-dark col-12" onClick={GoogleV2}>
            <GoogleOutlined/> Login as Conductor
            </button>
            {/* <Google btn='Conductor'/> */}
            </div>
            </span>
            <span className="d-flex my-2 ">
            <div className="flex-fill mx-1">
            <button type="button" className="btn btn-dark col-12" onClick={FacebookV1}>
            <FacebookOutlined/>  Login as Attender
            </button>
            {/* <Google btn='Attender'/> */}
            </div>
            <div className="flex-fill mx-1">
            <button type="button" className="btn btn-dark col-12" onClick={FacebookV2}>
            <FacebookOutlined/> Login as Conductor
            </button>
            {/* <Google btn='Conductor'/> */}
            </div>
            </span>
            
            {/* <Facebook/> */}
            <div className="row">
              <div className="col">
                <p className="text-center">
                  Not yet registered?{" "}
                  <Link href="/register">
                    <a>Register</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-center ">
                  <Link href="/forgot-password">
                    <a className="text-danger">Forgot password</a>
                  </Link>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
