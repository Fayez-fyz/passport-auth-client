import React from "react";
import { SyncOutlined } from "@ant-design/icons";
// import PhoneInput from "react-phone-input-2";
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const AuthForm = ({
  handleSubmit,
  name,
  setname,
  email,
  setemail,
  password,
  setpassword,
  role,
  setrole,
  questions,
  setQuestions,
  secret,
  setsecret,
  loading,
  page,
  mobile,
  setMobile,
  city,
  country,
  setCountry,
  region,
  setRegion,
  setCity,
  username,
  setUsername,
  about,
  setAbout,
  profileUpdate,
}) => {

  // const onChangeValue = (e) => {
  //   setRole(e.target.value);
  //   console.log(e.target.value);
  // }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* {profileUpdate && (
          <div className="form-group">
            <label htmlFor="user" className="form-label">
              Username
            </label>

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="user"
              className="form-control"
              placeholder="Username"
            />
          </div>
        )}
        {profileUpdate && (
          <div className="form-group ">
            <label htmlFor="about" className="form-label">
              About
            </label>
            <input
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              type="text"
              id="about"
              className="form-control"
              placeholder="About"
            />
          </div>
        )} */}

        {page !== "login" && (
          <>
            <div className="form-group mb-1">
              {/* <label htmlFor="name" className="form-label">
              Name
            </label> */}
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
          </>
        )}
        <div className="form-group mb-1">
          {/* <label htmlFor="email" className="form-label">
            Email
          </label> */}
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            // disabled={profileUpdate}
          />
        </div>
        <div className="form-group mb-1">
          {/* <label htmlFor="Password" className="form-label">
            Password
          </label> */}
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
          />
        </div>
        {page !== "login" && (
          <div className="d-flex justify-content-center mt-2">
            <div >
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  defaultValue="user"
                  // value={role}
                  // value="user"
                  onClick={(e) => setrole(e.target.defaultValue)}
                  // checked={role === "user"}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Attender
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  // value="admin"
                  defaultValue="admin"
                  // value={role}
                  onClick={(e) => setrole(e.target.defaultValue)}
                  // checked={role === "admin"}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Condutor
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            disabled={
              // profileUpdate
              //   ? loading
              page === "login"
                ? !email || !password || loading
                : !name || !email || !password || !role || loading
            }
            type="submit"
            className="btn btn-dark col-12 my-2 "
          >
            {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
