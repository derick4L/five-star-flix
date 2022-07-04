import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "./style.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <h1>404</h1>
      <p>That page does not exist here. Click one of the links above</p>
      <Footer />
    </>
  );
};
export default NotFound;
