import { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { actionCodeSettings } from "../../firebase.config";

const AuthForm = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [sentBanner, setSentBanner] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        setSentBanner(true);
        setTimeout(() => {
          setSentBanner(false);
        }, "15000");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <>Quick Sign In Via Email Link</>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Enter Your Email Here</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <button type="submit">SEND LINK</button>
      </form>
      <>{sentBanner === true ? <h3>Check Your Email!</h3> : null}</>
    </>
  );
};
export default AuthForm;
