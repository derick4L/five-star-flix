import { useContext, useEffect } from "react";
import { UserContext } from "../../App";

import AuthForm from "../../components/AuthForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./style.scss";

const Auth = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <h1>Auth</h1>
      <>
        <AuthForm user={user} />
      </>
      <Footer />
    </>
  );
};
export default Auth;
