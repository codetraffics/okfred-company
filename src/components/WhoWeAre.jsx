import { useState } from "react";

const photos = [
  "https://i.ibb.co/5GRXSb5/IMG-20240228-WA0017-1.jpg",
  "https://i.ibb.co/2s6YrXS/IMG-20240310-WA0009-1.jpg",
  "https://i.ibb.co/1rympQK/ceo-1.jpg",
  "https://i.ibb.co/kJ1KVQ7/IMG-20240310-WA0007-1.jpg",
];

const WhoWeAre = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

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
        <div className="bg-secondary-bg p-5  rounded-3xl">
          <img
            src={photos[currentPhotoIndex]}
            className="rounded-xl"
            alt="Current photo"
          />
        </div>
        <div className="justify-around flex mt-4">
          <button
            onClick={handlePrevClick}
            className="bg-primary-color py-2 px-5 rounded-xl uppercase text-white"
          >
            Prev
          </button>
          <button
            onClick={handleNextClick}
            className="bg-primary-color py-2 px-5 rounded-xl uppercase text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
