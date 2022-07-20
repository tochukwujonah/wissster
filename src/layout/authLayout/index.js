import {
  Footer,
  LetsConnect,
  NavBar,
  Testimonials,
  TestSlider,
} from "../../components";

const AuthLayout = ({ children, showModal, setShowModal }) => {
  return (
    <>
      <NavBar />
      {children}
      <Testimonials />
      <LetsConnect />
      <Footer />
    </>
  );
};

export { AuthLayout };
