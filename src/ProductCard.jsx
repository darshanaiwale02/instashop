import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, image, description }) => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    setTimeout(() => {
      navigate(`/product/${id}`);
    }, 200); 
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white shadow-lg rounded-lg p-4 m-4 transition-transform transform hover:scale-105 cursor-pointer ${
        isSelected ? "border-4 border-blue-500 scale-105" : ""
      }`}
    >
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      
      <p className="text-sm font-bold text-gray-700 mt-2">Product ID: {id}</p>  

      <h2 className="text-lg font-semibold mt-1">{title}</h2>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
      
      <button
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
