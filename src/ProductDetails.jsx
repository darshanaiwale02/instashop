import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl text-gray-700">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center text-xl text-red-500">Product not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-md">
        
        <img
          src={product.images?.[0] || "https://via.placeholder.com/400"}
          alt={product.title}
          className="w-full h-60 object-cover rounded-md"
        />

        
        <p className="text-sm font-bold text-gray-700 mt-4 border-b pb-2">Product ID: {product.id}</p>

        
        <h1 className="text-3xl font-bold mt-2">{product.title}</h1>

        
        <p className="text-gray-700 mt-2">{product.description}</p>

        
        <p className="text-xl font-semibold text-green-600 mt-2">Price: ${product.price}</p>

        
        <p className="text-sm text-gray-500">Category: {product.category?.name || "N/A"}</p>

      
        <div className="mt-4 flex justify-between">
        
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>

          
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            onClick={() => alert(`Buying ${product.title} for $${product.price}`)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
