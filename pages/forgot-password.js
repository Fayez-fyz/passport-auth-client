import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Modal } from "antd";
import Link from "next/link";
import ForgotPasswordForm from "../components/forms/ForgotPassForm";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const [email, setemail] = useState("");
  // const [newPassword, setNewPassword] = useState("");
//   const [questions, setQuestions] = useState("");
//   const [secret, setsecret] = useState("");
  // const [ok, setok] = useState(false);
  const [loading, setloading] = useState(false);

  const [state] = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(name, email, password, secret);
      setloading(true);
      const { data } = await axios.put(`/forgot-password`, {
        email,
        // questions,
        // secret,
      });

      console.log("forgot password res => ", data);

      if (data.error) {
        toast.error(data.error);
        setloading(false);
      } else {
        setemail("");
        // setQuestions("");
        // setsecret("");
        toast.success(data.message);
        // setok(true);
        setloading(false);
        // router.push("/login");
      }
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };
  if (state && state.token) router.push("/");
  return (
    <div className="container-fluid gradient">
    
      <div className="row ">
        <div className="col-lg-4 offset-lg-4 my-5">
            <Card>
            <div className="text-center">
                <h2 className="Mono">FORGOT PASSWORD</h2>
            </div>
            <ForgotPasswordForm
            handleSubmit={handleSubmit}
            email={email}
            setemail={setemail}
            // questions={questions}
            // setQuestions={setQuestions}
            // setNewPassword={setNewPassword}
            // secret={secret}
            // setsecret={setsecret}
            loading={loading}
          />
                <div className="row">
        <div className="col">
          <p className="text-center">
            You already registered?{" "}
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
        <p>Congrats!, Now you can login with new password</p>
        <Link href="/login">
          <a className="btn btn-sm btn-primary">Login</a>
        </Link>
      </Modal> */}

    </div>
  );
};

export default ForgotPassword;
