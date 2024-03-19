const DualContent = ({ imgUrl, title, subtitle, desc, className, id }) => {
  return (
    <div
      className="md:grid grid-cols-2 md:gap-x-10 lg:gap-x-20 space-y-10"
      key={id}
    >
      <img
        src={imgUrl}
        className={className}
        alt={title}
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      />

      <div
        className="space-y-4 flex flex-col justify-center"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
      >
        <div className="flex space-x-4 items-center">
          <div className="border h-0 border-primary-color w-10"></div>
          <h4 className="uppercase text-secondary-text font-semibold text-[10px]">
            {title}
          </h4>
        </div>

        <h2 className="text-[30px] text-secondary-text capitalize">
          {subtitle}
        </h2>
        <p className="text-lg text-primary-text text-justify">{desc}</p>
      </div>
    </div>
  );
};

export default DualContent;
