import { BeatLoader } from "react-spinners";
import { services } from "../constants";
import { Suspense, lazy } from "react";

const DualContent = lazy(() => import("./DualContent"));

const Services = () => {
  return (
    <section className="mx-10 my-20 md:my-32 md:mx-20" id="services">
      <div className="flex gap-20 flex-col">
        <div className="space-y-4">
          <div className="flex space-x-4 items-center">
            <div className="border h-0 border-primary-color w-10"></div>
            <h4 className="uppercase text-secondary-text font-semibold text-[10px]">
              Services
            </h4>
          </div>

          <p className="text-secondary-text text-justify my-10 md:w-4/5 text-lg lg:text-[22px] leading-relaxed font-semibold">
            In a world that never stops moving, your business needs a fuel
            solution that keeps pace. At Okfred, we are more than just a fuel
            delivery service – we are your partner in uninterrupted operations
            and seamless efficiency. Discover the unparalleled benefits of our
            Fuel Delivery Service and why we stand out as the preferred choice
            for businesses like yours.
          </p>
        </div>

        {/* Map Over Serice Items */}
        {services.map((service) => (
          <Suspense
            fallback={<BeatLoader className="text-center" color="#36d7b7" />}
          >
            <DualContent
              key={Math.floor(Math.random() * 100)}
              imgUrl={service.imgUrl}
              className={`mb-5 h-auto rounded-xl w-full md:mb-0 block ${
                service.id % 2 === 0 ? "order-last" : ""
              }`}
              title={service.title}
              subtitle={service.subtitle}
              desc={service.desc}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default Services;
