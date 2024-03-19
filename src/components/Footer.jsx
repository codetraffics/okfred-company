import { navigation, clients } from "../constants";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../assets/logomain.jpg";

const Footer = () => {
  return (
    <section className="bg-tertiary-bg p-10 md:p-20">
      <div
        className="md:flex space-y-10 md:space-y-0"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="md:w-1/5">
          <img
            src={logo}
            className="rounded-full h-[100px] w-[100px] mt-5 md:mt-0"
            alt=""
          />
        </div>

        <div className="md:w-4/5 md:flex space-y-5 md:space-y-0 justify-around text-white">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl capitalize">links</h3>
            <ul className="space-y-2">
              {navigation.map(({ id, title, url }) => (
                <a
                  key={id}
                  href={url}
                  className="block font-normal text-base text-primary-text"
                >
                  {title}
                </a>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl capitalize">clients</h3>
            <ul className="space-y-2">
              {clients.map(({ id, title, url }) => (
                <a
                  key={id}
                  href={url}
                  className="block font-normal text-base text-primary-text"
                >
                  {title}
                </a>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl capitalize">social</h3>
            <a href="">
              <FaLinkedin className="text-white text-4xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white text-center mt-10">
        <a href="https://www.linkedin.com/in/codetraffics/" target="blank">
          Designed by @codetraffics
        </a>
      </div>
    </section>
  );
};

export default Footer;
