import { Footer, NavBar } from "../../components";

const AuthLayout = ({ children, showModal, setShowModal }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export { AuthLayout };
