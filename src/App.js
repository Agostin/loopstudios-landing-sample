import { useState } from "react";

import MobileMenu from "./components/Menu/MobileMenu";
import DesktopMenu from "./components/Menu/DesktopMenu";

import logo from "./assets/images/logo.svg";
import claimImage from "./assets/images/desktop/image-interactive.jpg";
import earthImageDesktop from "./assets/images/desktop/image-deep-earth.jpg";
import earthImageMobile from "./assets/images/mobile/image-deep-earth.jpg";
import arcadeImageDesktop from "./assets/images/desktop/image-night-arcade.jpg";
import arcadeImageMobile from "./assets/images/mobile/image-night-arcade.jpg";
import soccerImageDesktop from "./assets/images/desktop/image-soccer-team.jpg";
import soccerImageMobile from "./assets/images/mobile/image-soccer-team.jpg";
import gridImageDesktop from "./assets/images/desktop/image-grid.jpg";
import gridImageMobile from "./assets/images/mobile/image-grid.jpg";
import fromAboveImageDesktop from "./assets/images/desktop/image-from-above.jpg";
import fromAboveImageMobile from "./assets/images/mobile/image-from-above.jpg";
import borealisImageDesktop from "./assets/images/desktop/image-pocket-borealis.jpg";
import borealisImageMobile from "./assets/images/mobile/image-pocket-borealis.jpg";
import curiosityImageDesktop from "./assets/images/desktop/image-curiosity.jpg";
import curiosityImageMobile from "./assets/images/mobile/image-curiosity.jpg";
import fishEyeImageDesktop from "./assets/images/desktop/image-fisheye.jpg";
import fishEyeImageMobile from "./assets/images/mobile/image-fisheye.jpg";

import iconFacebook from "./assets/images/icon-facebook.svg";
import iconTwitter from "./assets/images/icon-twitter.svg";
import iconPinterest from "./assets/images/icon-pinterest.svg";
import iconInstagram from "./assets/images/icon-instagram.svg";
import CreationItem from "./components/CreationItem";

const App = () => {
  const [logoClass, setLogoClass] = useState("");
  const creations = [
    {
      title: "Deep Heart",
      imgMobile: earthImageMobile,
      imgDesktop: earthImageDesktop,
    },
    {
      title: "Night Arcade",
      imgMobile: arcadeImageMobile,
      imgDesktop: arcadeImageDesktop,
    },
    {
      title: "Soccer Team VR",
      imgMobile: soccerImageMobile,
      imgDesktop: soccerImageDesktop,
    },
    {
      title: "The Grid",
      imgMobile: gridImageMobile,
      imgDesktop: gridImageDesktop,
    },
    {
      title: "From Up Above VR",
      imgMobile: fromAboveImageMobile,
      imgDesktop: fromAboveImageDesktop,
    },
    {
      title: "Pocket Borealis",
      imgMobile: borealisImageMobile,
      imgDesktop: borealisImageDesktop,
    },
    {
      title: "The Curiosity",
      imgMobile: curiosityImageMobile,
      imgDesktop: curiosityImageDesktop,
    },
    {
      title: "Make It Fisheye",
      imgMobile: fishEyeImageMobile,
      imgDesktop: fishEyeImageDesktop,
    },
  ];

  let rawLogoClass = "";
  const mobileMenuToggleHandler = (menuOpen) => {
    if (menuOpen) {
      rawLogoClass += "fixed top-8 left-8";
    }
    setLogoClass(rawLogoClass);
  };

  return (
    <>
      {/* Hero section */}
      <div className="flex flex-col mx-auto h-screen md:h-auto md:mx-0 bg-hero p-8 md:p-16">
        {/* Top (logo + menus) */}
        <div className="flex justify-between items-center relative">
          <img src={logo} className={`h-6 z-20 ${logoClass}`} alt="Logo" />
          {/* Mobile menu */}
          <MobileMenu onToggle={mobileMenuToggleHandler} />
          {/* Desktop menu */}
          <DesktopMenu />
        </div>
        {/* Claim */}
        <div className="flex flex-col justify-center h-full">
          <div className="mx-auto border border-white p-6 tracking-wide max-w-xs md:mx-0 md:max-w-[50%] md:my-16">
            <h2 className="uppercase text-white text-4xl md:text-5xl leading-10">
              Immersive experiences that deliver
            </h2>
          </div>
        </div>
      </div>
      {/* Claim section VR */}
      <div className="flex justify-center items-center my-20">
        <div className="relative container p-8 md:px-0">
          <img
            src={claimImage}
            alt=""
            className="w-full mx-auto md:ml-0 max-w-lg"
          />
          <div className="text-center bg-white p-8 md:text-left md:pt-20 md:pl-20 md:absolute md:bottom-0 md:right-0 md:left-[40%] md:max-w-lg md:z-20">
            <h3 className="uppercase text-3xl tracking-wide">
              The leader in interactive VR
            </h3>
            <p className="text-sm mt-4">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
      {/* Creations section */}
      <div className="flex justify-center items-center my-20">
        <div className="container mx-auto">
          <div className="flex justify-center md:justify-between">
            <h3 className="uppercase text-3xl font-extralight">
              Our Creations
            </h3>
            {/* Desktop button */}
            <button className="align-middle hidden md:block outline outline-1 py-2 px-12 uppercase text-sm tracking-superWide font-alata hover:bg-black hover:border-black hover:text-white duration-150">
              See All
            </button>
          </div>
          {/* Grid */}
          <div className="grid grid-flow-rows gap-2 px-8 py-8 mx-auto md:grid-flow-cols md:grid-cols-4 md:gap-4 md:px-0">
            {creations.map((item) => (
              <CreationItem
                title={item.title}
                mobileImg={item.imgMobile}
                desktopImg={item.imgDesktop}
              />
            ))}
          </div>
          {/* Mobile button */}
          <button className="mx-auto align-middle block md:hidden outline outline-1 py-2 px-12 uppercase text-md tracking-superWide font-alata hover:bg-black hover:text-white hover:border-black duration-150">
            See All
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-black p-12">
        <div className="text-center md:text-left">
          <img src={logo} className="h-8" alt="Footer logo" />
          <nav className="flex flex-col my-8 md:flex-row md:space-x-6 md:mb-0 mb:mt-4">
            <a className="text-white font-alata text-sm my-3 md:my-0" href="#">
              About
            </a>
            <a className="text-white font-alata text-sm my-3 md:my-0" href="#">
              Careers
            </a>
            <a className="text-white font-alata text-sm my-3 md:my-0" href="#">
              Events
            </a>
            <a className="text-white font-alata text-sm my-3 md:my-0" href="#">
              Products
            </a>
            <a className="text-white font-alata text-sm my-3 md:my-0" href="#">
              Support
            </a>
          </nav>
        </div>
        <div className="text-center md:text-right">
          <a href="#">
            <img className="inline mx-2" src={iconFacebook} />
          </a>
          <a href="#">
            <img className="inline mx-2" src={iconTwitter} />
          </a>
          <a href="#">
            <img className="inline mx-2" src={iconPinterest} />
          </a>
          <a href="#">
            <img className="inline mx-2" src={iconInstagram} />
          </a>
          <p className="text-xs text-darkGray font-alata mt-8">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
