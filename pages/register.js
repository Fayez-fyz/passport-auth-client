import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState("");
  const [questions, setQuestions] = useState("");
  const [secret, setsecret] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const [ok, setok] = useState(false);
  const [loading, setloading] = useState(false);

  const [state] = useContext(UserContext);
  const router = useRouter();

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, role);
    setloading(true);
    try {
      const { data } = await axios.post(`/register`, {
        name,
        email,
        password,
        role,
        // mobile,
        // city,
        // questions,
        // secret,
      });
      // console.log("This is our data", data);
      if (data.error) {
        toast.error(data.error);
        console.log(data);
        setloading(false);
      } else {
        setname("");
        setemail("");
        setpassword("");
        setrole("");
        // setMobile("");
        // setCity("");
        // setsecret("");
        // setok(data.message);
        toast.success(data.message);
        setloading(false);
      }
    } catch (error) {
      toast.error(error.response.data.error);

      setloading(false);
    }
  };
  // if (state && state.token) router.push("/");
  return (
    <div className="container-fluid gradient ">
      <div className="row  ">
        <div className="col-lg-4 offset-lg-4 my-4">
          <Card>
            <div className="text-center">
              <h2 className="Mono"> REGISTER </h2>
            </div>

            <AuthForm
              handleSubmit={handleSubmit}
              name={name}
              setname={setname}
              email={email}
              setemail={setemail}
              //   mobile={mobile}
              //   setMobile={setMobile}
              //   city={city}
              //   setCity={setCity}
              password={password}
              setpassword={setpassword}
              role={role}
              setrole={setrole}
              //   questions={questions}
              //   setQuestions={setQuestions}
              //   secret={secret}
              //   setsecret={setsecret}
              loading={loading}
              //   country={country}
              //   setCountry={setCountry}
              //   region={region}
              //   setRegion={setRegion}
            />
            <div className="row my-1">
              <div className="col">
                <p className="text-center">
                  You already registered ?{""}
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* <Modal
        title="Congratulations"
        visible={ok}
        onCancel={() => setok(false)}
        footer={null}
      >
        {" "}
        <p>You have successfully registered</p>
        <Link href="/login">
          <a className="btn btn-sm btn-primary">Login</a>
        </Link>
      </Modal> */}
    </div>
  );
};

export default Register;
