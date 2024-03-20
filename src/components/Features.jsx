import { features } from "../constants";

const Features = () => {
  return (
    <section className="bg-secondary-bg p-10 md:p-20">
      <div
        className="text-white text-center mt-10"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
      >
        <div className="flex space-x-4 items-center mb-5">
          <div className="border h-0 border-primary-color w-10"></div>
          <h4 className="uppercase text-secondary-text font-semibold text-[10px]">
            features
          </h4>
        </div>
        <div className="lg:flex justify-around">
          {features.map((feature) => (
            <div
              className="flex flex-col lg:w-[200px] text-base space-y-5 text-center items-center"
              key={feature.id}
            >
              <img src={feature.imgUrl} className="w-[80px]" alt="" />
              <h4 className="text-secondary-text text-base uppercase font-semibold">
                {feature.title}
              </h4>

              <p className="text-primary-text">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
