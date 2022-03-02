import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../context/index";
import { useRouter } from "next/router";
import axios from "axios";
const Navbar = () => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = () => {
    axios
      .get("http://localhost:5000/api/logout")
      .then((res) => {
        if (res.data === "done") {
          setState({
            name: null,
            role: null,
            email: null,
          });
         
          window.localStorage.removeItem("auth");
          router.push("/login");
        }
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
      <Link href="/" className={`nav-link ${current === "/" && "active"}`}>
        <a className="navbar-brand" href="#">
          EventApp 
        </a>
      </Link>
      {/* <pre>{JSON.stringify(state,null,1)}</pre> */}
      <div className="navbar-nav">
        {state && state.name !== null ? (
          <>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-light"
                type="button"
                id="navbarDarkDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {state && state.name}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link href="/user/dashboard">
                    <a
                      className={`nav-link dropdown-item  ${
                        current === "/user/dashboard" && "active"
                      }`}
                      href="#"
                    >
                      Dashboard
                    </a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/user/profile/update">
                      <a
                        className={`nav-link dropdown-item  ${
                          current === "/user/profile/update" && "active"
                        }`}
                        href="#"
                      >
                       Profile
                      </a>
                    </Link>
                  </li> */}
                {/* {state.user.role === 'Admin' &&(
                     <li>
                     <Link href="/admin">
                         <a
                           className={`nav-link dropdown-item  ${
                             current === "/admin" && "active"
                           }`}
                           href="#"
                         >
                          Admin
                         </a>
                       </Link>
                     </li> 
                  )} */}
                <li>
                  <a
                    onClick={logout}
                    className="nav-link dropdown-item "
                    href="#"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <form className="d-flex">
              <Link href="/login">
                <a
                  className={`nav-link px-2 mx-2  ${
                    current === "/login" && "active px-2"
                  }`}
                  href="#"
                >
                  Login{" "}
                </a>
              </Link>

              <Link href="/register">
                <a
                  className={`nav-link  px-2 ${
                    current === "/register" && "active px-2"
                  }`}
                  href="#"
                >
                  Register
                </a>
              </Link>
            </form>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
