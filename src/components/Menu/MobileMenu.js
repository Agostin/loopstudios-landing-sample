import { useState } from "react";

import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";

const MobileMenu = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuIsOpen((prevStatus) => {
      props.onToggle(!prevStatus);
      return !prevStatus;
    });
  };

  return (
    <div class="md:hidden cursor-pointer transition-transform duration-200">
      {!menuIsOpen && (
        <img
          src={hamburgerIcon}
          onClick={menuToggleHandler}
          className=""
          alt=""
        />
      )}
      {menuIsOpen && (
        <>
          <img
            src={closeIcon}
            onClick={menuToggleHandler}
            className="fixed right-8 top-8 z-20"
            alt=""
          />
          <div className="fixed bg-black top-0 left-0 right-0 bottom-0 z-10">
            <nav className="flex flex-col h-full p-8 space-y-4 justify-center items-start">
              <a className="uppercase text-xl text-white">About</a>
              <a className="uppercase text-xl text-white">Carreers</a>
              <a className="uppercase text-xl text-white">Events</a>
              <a className="uppercase text-xl text-white">Products</a>
              <a className="uppercase text-xl text-white">Support</a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
