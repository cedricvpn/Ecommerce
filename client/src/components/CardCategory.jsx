import React from "react";

const CardCategory = ({ name, image, price, category }) => {
  return (
    <article className="border rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <figure className="h-48">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <figcaption className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{category}</p>
        <p className="text-md font-bold">{price}</p>

        <button className="font-bold bg-green-600 rounded mt-3 px-4 py-2 w-full">
          Add cart
        </button>
      </figcaption>
    </article>
  );
};

export default CardCategory;
