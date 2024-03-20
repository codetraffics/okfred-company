import Button from "./Button";
import { IoMdArrowDown } from "react-icons/io";
import WhoWeAre from "./WhoWeAre";

const About = () => {
  return (
    <section className="mx-10 my-20 md:my-32 md:mx-20" id="about">
      <div className="flex space-x-4 items-center my-5">
        <div className="border h-0 border-primary-color w-10"></div>
        <h4 className="uppercase text-text-secondary font-semibold text-[10px]">
          About us
        </h4>
      </div>

      <p className="text-secondary-text text-justify my-10 md:w-4/5 text-lg lg:text-[22px] leading-relaxed font-semibold">
        Okfred Company Ltd was established in August 2018, head-quartered in
        Kumasi with Branches in Tema and Sunyani. Okfred has a presence in over
        10 major regions in Ghana due to our partnership with Oil Marketing
        Companies (OMC). <br /> <br /> Okfred is truly committed to maximising
        productivity & efficiency by delivering uniquely designed Fuel Delivery
        solutions to both corporate & individual clients.
      </p>

      <WhoWeAre />
    </section>
  );
};

export default About;
