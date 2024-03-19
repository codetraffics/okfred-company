import Button from "./Button";
import { IoMdArrowDown } from "react-icons/io";

const About = () => {
  return (
    <section className="m-10 md:m-20" id="about">
      <div className="flex space-x-4 items-center my-5">
        <div className="border h-0 border-primary-color w-10"></div>
        <h4 className="uppercase text-text-secondary font-semibold text-[10px]">
          About us
        </h4>
      </div>

      <p
        className="text-text-secondary text-justify mb-10 md:w-4/5 text-lg lg:text-[22px] leading-relaxed font-semibold block"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        In a world that never stops moving, your business needs a fuel solution
        that keeps pace. At Okfred Company, we are more than just a fuel
        delivery service – we are your partner in uninterrupted operations and
        seamless efficiency. Discover the unparalleled benefits of our Fuel
        Delivery Service and why we stand out as the preferred choice for
        businesses like yours.
      </p>

      <Button
        // text="explore "
        iconUrl={<IoMdArrowDown className="text-3xl" />}
        href="/"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
    </section>
  );
};

export default About;
