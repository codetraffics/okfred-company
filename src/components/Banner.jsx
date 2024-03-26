const Banner = () => {
  return (
    <div
      className="overlay bg-banner-image h-screen w-full bg-cover relative bg-no-repeat bg-center"
      id="home"
    >
      <div
        className=" text-white absolute  text-center w-full top-[50%] mt-[-25px]"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h1 className="leaing-normal text-5xl md:text-6xl px-10 font-semibold">
          We are Okfred <br />
          <span className="hidden md:block">
            {" "}
            A fuel distribution company <br />
            <span className="hidden lg:block">in Ghana</span>
          </span>
        </h1>
        <p className="text-md mt-5 md:mt-10 px-10 md:px-20">
          We take fuel forward - making it safer, cleaner, and more efficient
          for people and the planet.
        </p>
      </div>
    </div>
  );
};

export default Banner;
