import ceo from "../assets/ceo2.webp";

const WhoWeAre = () => {
  return (
    <div className="grid md:grid-cols-2 mb-10 md:gap-x-10 lg:gap-x-20 space-y-10">
      <div className="space-y-4 flex flex-col justify-center">
        <h4 className="text-xl text-secondary-text mb-5 font-smibold uppercase">
          Mr. Eric Okyere Addo, CEO
        </h4>
        <p className="text-lg text-primary-text text-justify">
          Mr. Eric Okyere Addo is an accomplished, entrepreneur with global
          perspective, avid promoter of positive thinking for wealth creation
          and healthy living. His diverse portfolio of investments cut across
          fuel delivery, small scale mining, and exportation of raw cashew nuts.
          He is the CEO of Okfred Company Ltd. Mr. Eric Okyere Addo holds a
          first degree in Resource Enterprise and Entrepreneurship from the
          University of Energy and Natural Resources, Ghana. He has attended
          several conferences globally to enhance his work at Okfred Company
          Ltd. Mr. Eric Okyere Addo serves on several private boards and
          consults for many start up companies.
        </p>
      </div>
      <div>
        <div className="max-w-full my-0 mx-auto">
          <img src={ceo} className="w-full h-auto block" alt="Current photo" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
