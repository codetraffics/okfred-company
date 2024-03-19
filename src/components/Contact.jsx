import ceo from "../assets/ceo.jpg";

const Contact = () => {
  return (
    <section className="m-10 md:m-20" id="contact">
      <div className="lg:flex space-y-10 md:space-x-20 mb-10 md:mb-20">
        <div
          className="lg:w-2/5"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <img src={ceo} />
        </div>

        <div
          className="flex flex-col space-y-4 md:w-3/5 justify-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="flex space-x-4 items-center">
            <div className="border h-0 border-primary-color w-10"></div>
            <h4 className="uppercase text-secondary-text font-semibold text-[12px]">
              contact us
            </h4>
          </div>
          <h2 className="text-3xl text-secondary-text">
            Want to find out more
          </h2>
          <p className="text-lg text-primary-text text-justify lg:w-3/5">
            Businesses large and small rely on Okfred Company for scheduled and
            emergency generator refueling; don’t get left in the dark. Focus on
            other aspects of your business, and stop worrying about how your
            fuel is managed.
          </p>
          <div className="text-lg text-secondary-text font-semibold">
            <p>+233 50000000000</p>
            <p>+233 50000000000</p>
          </div>
          <a
            href="tel:123-456-7890"
            className="p-4 bg-primary-color w-[150px] text-white rounded-md"
          >
            contact us
          </a>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.885064757107!2d-1.6558099685761887!3d6.681411355139105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb972295ccfc61%3A0x6f9bf6a64b474f10!2sPatasi%2C%20Kumasi!5e0!3m2!1sen!2sgh!4v1710709737245!5m2!1sen!2sgh"
        width="100%"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
