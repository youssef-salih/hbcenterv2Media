"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const headerLinks = [
  {
    title: "about",
    link: "/#about",
    mobile: "/#about",
  },
  {
    title: "Services",
    link: "/#service",
    mobile: "/#service",
  },
  {
    title: "Why Choose Us",
    link: "/#video",
    mobile: "/#video",
  },
  {
    title: "Reviews",
    link: "/#testimonial",
    mobile: "/#testimonial",
  },
  {
    title: "Our Blog",
    link: "/#blog",
    mobile: "/#blog",
  },

  {
    title: "Contact",
    link: "/contact",
    mobile: "/contact",
  },
];

const Header = () => {
  const [showHeaderBackground, setShowHeaderBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuAnimation = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;
      const shouldShowHeaderBackground = window.scrollY > offset;
      setShowHeaderBackground(shouldShowHeaderBackground);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = async () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
      await menuAnimation.start("open");
    } else {
      document.body.classList.remove("overflow-hidden");
      await menuAnimation.start("closed");
    }
  };

  // const menuVariants = {
  //   closed: {
  //     x: 0,
  //     opacity: 1,
  //   },
  //   open: {
  //     x: "100%",
  //     opacity: 0,
  //   },
  // };
  return (
    <motion.header
      key={showHeaderBackground ? "1" : "2"}
      animate={
        showHeaderBackground && { backgroundColor: "rgba(0, 0, 0, 0.5)" }
      }
      transition={{
        duration: 1,
      }}
      className="w-screen fixed  bg-transparent * z-[99]"
    >
      <div className=" lg:px-8 flex flex-row justify-between items-center mx-auto">
        <div>
          <Link href="#">
   
            <Image
              src="/images/logos/hb.png"
              width={200}
              height={200}
              quality={100}
              alt="hb center"
              className="lg:w-[200px] w-[100px] ml-4 py-2"
            />
          </Link>
        </div>
        {/* links */}
        <nav className="lg:block hidden capitalize font-bold text-white space-x-6">
          {headerLinks.map(({ link, title }, i) => (
            <Link href={link} key={i}>
              {title}
            </Link>
          ))}
        </nav>
        {/* call to actions */}
        <div className="lg:block hidden">
          <button className="border border-slate-50 rounded-md px-4 py-2">
            <Link href="#" className="capitalize text-white font-thin">
              reservez maintenant
            </Link>
          </button>
        </div>
        {/* offcanvas */}

        {/* mobile menu */}
        <AnimatePresence>
          {isOpen ? (
            <>
              <motion.div
                className="w-2/3 h-screen bg-black absolute top-0 right-0 -z-10 capitalize"
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "66.666667%",
                }}
                exit={{
                  width: 0,
                }}
              >
                <div className="pt-16 pl-12 ">
                  <ul>
                    {headerLinks.map(({ mobile, title }, i) => (
                      <li key={i} className="text-white font-bold mt-5">
                        <Link href={mobile}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <div className="absolute w-full  h-screen top-0 left-0 bg-black opacity-60 -z-20 " />
            </>
          ) : (
            ""
          )}
        </AnimatePresence>
        <div className="lg:hidden block mr-8" onClick={() => toggleMenu()}>
          {isOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="w-4 text-white text-4xl "
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="w-4 text-black text-4xl z-50"
            />
          )}
        </div>
      </div>

      {/* logo  */}
    </motion.header>
  );
};

export default Header;
