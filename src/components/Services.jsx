import DualContent from "./DualContent";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="m-10 md:m-20" id="services">
      <div className="flex gap-20 flex-col">
        <div className="space-y-4" data-aos="zoom-in" data-aos-duration="1500">
          <div className="flex space-x-4 items-center">
            <div className="border h-0 border-primary-color w-10"></div>
            <h4 className="uppercase text-secondary-text font-semibold text-[10px]">
              Services
            </h4>
          </div>
          <h2 className="text-xl md:text-3xl text-secondary-text capitalize">
            We accommodate all orders including mobile tank refueling and heavy
            equipment as well. Same day fuel delivery service is available!
          </h2>
          <p className="text-lg text-primary-text text-justify">
            Okfred Company consistently provides reliable service you can count
            on from a professional and experienced team. We maintain a central
            dispatch in Kumasi, extensive coverage to all surrounding cities,
            throughout Ashanti Region. Our Fuel Delivery Professionals are
            trained in strict environmental standards and can refuel your
            equipment after hours or overnight, and can operate in extreme
            temperatures. Our refueling services are safe, simple and cost
            effective.
          </p>
        </div>

        {/* Map Over Serice Items */}
        {services.map((service) => (
          <DualContent
            key={service.id}
            imgUrl={service.imgUrl}
            className={`mb-5 h-auto  w-full md:mb-0 ${
              service.id % 2 === 0 ? "order-last" : ""
            }`}
            title={service.title}
            subtitle={service.subtitle}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
