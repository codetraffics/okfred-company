import { counters } from "../constants";

const Count = () => {
  return (
    <div className="bg-count-image w-full bg-cover relative bg-second-bg overlay bg-no-repeat bg-center h-80 lg:h-[36rem]">
      <div className="absolute p-10 md:p-14 text-white text-base space-y-20 xl:space-y-32">
        <div
          className="space-y-5"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="border h-0 border-primary-color w-10"></div>
          <div className="flex flex-col space-y-4">
            <h1 className="capitalize">We are national</h1>
            <p className="lg:w-2/5 text-base">
              Welcome to Okfred, where we redefine the way businesses fuel
              success through our comprehensive Bulk Fuel services. If you’re
              looking to optimize your fuel management strategy and elevate your
              operational efficiency, you’re in the right place.
            </p>
          </div>
        </div>
        <div
          className="gap-x-5 hidden lg:flex"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {counters.map(({ id, number, text }) => (
            <div className="space-y-4" key={id}>
              <h1 className="text-2xl font-bold">{number}</h1>
              <p className="text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Count;
