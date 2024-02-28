import LoginModal from "./LoginModel";
import { useState } from "react";

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>

      <button onClick={openModal}>Login</button>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default LoginButton;
