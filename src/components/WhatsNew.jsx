import React, { useState } from "react";
import { Helmet } from "react-helmet";

const topPicks = [
  {
    id: "1",
    title: "Smart Home Assistant",
    image: "https://i.ibb.co/gPgH8GH/bigstock-Smart-Home-Assistant-Device-V-310936552-1024x470.jpg",
    category: "Smart Home",
    price: 129.99,
    description: "Control your home with ease using voice-activated commands.",
    features: ["Voice control", "Home automation", "Compact design", "Wi-Fi enabled"],
    rating: 4.7,
  },
  {
    id: "2",
    title: "Portable Solar Charger",
    image: "https://i.ibb.co/Qv61yXy/14c5899b5735302086b98de963b9c12d-jpg-960x960q80-jpg.webp",
    category: "Outdoor Tech",
    price: 49.99,
    description: "Charge your devices anywhere with this eco-friendly solar charger.",
    features: ["High-efficiency solar", "USB ports", "Lightweight", "Water-resistant"],
    rating: 4.5,
  },
  {
    id: "3",
    title: "Gaming Headset Ultra",
    image: "https://i.ibb.co/Yt3bsNY/steelseries-arctis-7-gaming-headset-1-1592937320.jpg",
    category: "Gaming Accessories",
    price: 89.99,
    description: "Immerse yourself in sound with this high-quality gaming headset.",
    features: ["Surround sound", "Noise-canceling mic", "Adjustable fit", "RGB lighting"],
    rating: 4.6,
  },
  {
    id: "4",
    title: "Wireless Charging Pad",
    image: "https://i.ibb.co/ZgcrXgx/anker-315-wireless-charger.webp",
    category: "Mobile Accessories",
    price: 29.99,
    description: "Effortlessly charge your phone with this sleek wireless pad.",
    features: ["Fast charging", "Non-slip design", "LED indicator", "Lightweight"],
    rating: 4.4,
  },
];

const TopPicks = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <>
      <Helmet>
        <title>Top Picks || Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] p-10">
        <h1 className="text-4xl text-center text-white font-bold">Top Picks</h1>
        <p className="text-center text-lg text-white mt-2">
          Discover our top-rated gadgets handpicked just for you.
        </p>
      </div>
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topPicks.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out h-full flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-sm text-gray-600 mb-3 flex-grow">{product.description}</p>
                <p className="text-lg font-bold text-blue-600 mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {product.rating} ★
                  </span>
                  <p className="text-gray-500 text-xs">Rating</p>
                </div>
                <button
                  onClick={() => openModal(product)}
                  className="mt-auto w-full py-2 bg-[#9538E2] text-white font-semibold rounded-lg hover:bg-green-500"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-bold text-blue-600 mb-4">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <h3 className="text-md font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {selectedProduct.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="w-full py-2 mt-4 bg-[#9538E2] text-white font-semibold rounded-lg hover:bg-green-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopPicks;
