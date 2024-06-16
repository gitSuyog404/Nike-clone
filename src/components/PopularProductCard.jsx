import React from "react";

import { star } from "../assets/icons";
import { useState } from "react";
const PopularProductCard = ({ imgURL, name, price }) => {
  const [isPopOpen, setIsPopOpen] = useState(false);
  const handleClickImg = () => {
    setIsPopOpen(true);
  };
  const closePopup = () => {
    setIsPopOpen(false);
  };
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px]"
        onClick={handleClickImg}
      />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>

      {isPopOpen && (
        <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <button onClick={closePopup} className="float-right">
              Close
            </button>

            <img src={imgURL} alt={name} className="w-full h-auto  mt-4" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularProductCard;
