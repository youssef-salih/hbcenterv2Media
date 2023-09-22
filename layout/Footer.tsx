import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const socialMedia = [
  {
    icon: faLinkedinIn,
    link: "#",
  },
  {
    icon: faFacebookF,
    link: "#",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/hbcenter_/",
  },
  {
    icon: faYoutube,
    link: "#",
  },
  {
    icon: faTwitter,
    link: "#",
  },
];

const ourClasses = [
  {
    title: "about",
    link: "#about",
  },
  {
    title: "Services",
    link: "#service",
  },
  {
    title: "Why Choose Us",
    link: "#video",
  },
  {
    title: "Reviews",
    link: "#testimonial",
  },
  {
    title: "Our Blog",
    link: "#blog",
  },

  {
    title: "Contact",
    link: "#contact",
  },
];

const service = [
  {
    title: "Physiotherapy & Osteopathy",
  },
  {
    title: "Wellness & Recovery",
  },
  {
    title: "Sports Performance & Rehabilitation",
  },
];

const Footer = () => {
  return (
    <footer className="text-white   bg-black ">
      <div className="container mx-auto lg:px-16 lg:py-5 px-6  pb-10 grid lg:grid-cols-4 grid-cols-1 gap-8">
        {/* about and social media  */}
        <div>
          <div className="flex lg:justify-start justify-center">
            <Image
              src="/images/logos/hb.png"
              width={180}
              height={200}
              alt=""
              className="invert mt-3"
            />
          </div>
          <p className="text-white text-sm mt-14 mb-6">
            Description de HB Center : Unique à Casablanca, HB Center Osteopathy
            & Sport Performance, créé en 2020 à Romandie Maarif, allie experts
            sportifs et médicaux pour un suivi sportif sur-mesure.
          </p>
          <div className="grid grid-cols-5 gap-2">
            {socialMedia.map(({ icon, link }) => (
              <div className="bg-white p-1 py-4 rounded-full flex items-center justify-center">
                <Link href={link}>
                  <FontAwesomeIcon icon={icon} className="text-black w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* our classes  */}
        <div>
          <div className="flex flex-col space-y-4">
            <h5 className="font-semibold text-xl">Services</h5>
            <span className="bg-white h-1 w-10" />
          </div>
          <nav className="mt-8 flex flex-col justify-start items-start space-y-4">
            {service.map(({ title }) => (
              <p className="hover:border-b hover:border-b-red hover:ml-2 hover:text-red transition-all text-sm font-medium text-white-600">
                {title}
              </p>
            ))}
          </nav>
        </div>
        {/* quick links*/}
        <div>
          <div className="flex flex-col space-y-4">
            <h5 className="font-semibold text-xl">Quick links</h5>
            <span className="bg-white h-1 w-10" />
          </div>
          <nav className="mt-8 flex flex-col justify-start items-start space-y-4">
            {ourClasses.map(({ link, title }) => (
              <Link
                href={link}
                className="hover:border-b hover:border-b-red hover:ml-2 hover:text-red transition-all text-sm font-medium text-white-600"
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
        {/* location  */}
        <div className="space-y-6">
          <div className="flex flex-col space-y-4">
            <h5 className="font-semibold text-xl">HB Center </h5>
            <span className="bg-white h-1 w-10" />
          </div>
          <p className="text-base text-white-600">
            pas loin de, 97 Rue Normandie, Boulevard Bir Anzarane, Casablanca
            20370
          </p>
          <Link href="#" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-red w-6" />
            <span className="font-bold text-2xl">0688676741</span>
          </Link>
          <Link
            href="mailto:gymat@yourname.com"
            className="flex items-center space-x-2"
          >
            contact@hbcenter.ma
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
