import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "../context";
import "antd/dist//antd.css";
import Navbar from "../components/Header/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Head>
          <title>Event App</title>
        </Head>
        <Navbar />
        <ToastContainer position="top-center" />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
