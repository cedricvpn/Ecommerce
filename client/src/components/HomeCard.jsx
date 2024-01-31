import React from "react";

const HomeCard = ({ name, image, price, category, loading }) => {
  return (
    <div className=" border rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl min-w-[150px]">
      {name ? (
        <>
          <div className="w-40 min-h-[90px] ">   
            <img src={image} className="w-full h-full object-cover" />
          </div>

          <div className="p-2">
          <h3 className="font-semibold  text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-gray-600 text-center text-sm font-medium">{category}</p>
          <p className="text-center font-bold">
            <span>{price}</span> <span className="text-green-700">FCFA</span>
          </p>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading || "Loading ..."}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
