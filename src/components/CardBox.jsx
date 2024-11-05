import { useEffect, useState } from "react";
import Gadget from "./Gadget";

const CardBox = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const filteredGadgets =
    selectedCategory === "All"
      ? gadgets
      : gadgets.filter((gadget) => gadget.category === selectedCategory);

  return (
    <>
      <h1 className="text-4xl text-center">Explore Cutting-Edge Gadgets</h1>
      <div className="flex flex-col md:flex-row justify-around w-[80%] mx-auto rounded-3xl my-10 gap-4">
        <div className="flex flex-col gap-4 p-4 bg-white rounded-xl h-full"> 
          <button
            className={`btn rounded-full ${
              selectedCategory === "All" ? "bg-[#9538E2] text-white " : ""
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All Products
          </button>
          <button
            className={`btn rounded-full ${
              selectedCategory === "Smartphones"
                ? "bg-[#9538E2] text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory("Smartphones")}
          >
            Smartphones
          </button>
          <button
            className={`btn rounded-full ${
              selectedCategory === "Cameras" ? "bg-[#9538E2] text-white" : ""
            }`}
            onClick={() => setSelectedCategory("Cameras")}
          >
            Cameras
          </button>
          <button
            className={`btn rounded-full ${
              selectedCategory === "Audio Devices"
                ? "bg-[#9538E2] text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory("Audio Devices")}
          >
            Audio
          </button>
          <button
            className={`btn rounded-full ${
              selectedCategory === "Smartwatch" ? "bg-[#9538E2] text-white" : ""
            }`}
            onClick={() => setSelectedCategory("Smartwatch")}
          >
            Smartwatch
          </button>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGadgets.length > 0 ? (
            filteredGadgets.map((gadget) => (
              <Gadget key={gadget.id} gadget={gadget} />
            ))
          ) : (
            <div className="col-span-3">
              <p className="text-4xl text-[#9538E2] p-8 md:mt-20">
                No gadgets available in the {selectedCategory} category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardBox;