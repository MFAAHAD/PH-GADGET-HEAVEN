import { useNavigate } from "react-router-dom";
import CardBox from "./CardBox.jsx";
import { Helmet } from "react-helmet";
const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("Button clicked");
    navigate("/dashboard");
  };

  return (
    <>
      <Helmet>
        <title>Home || Gadget Heaven</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center bg-[#9538E2] w-[90%] mx-auto rounded-b-3xl p-20 relative pb-44 md:pb-52 lg:pb-72 mb-32 md:mb-72 lg:mb-96 ">
        <div className="text-center">
          <div className=""> 
            <h1 className="text-5xl font-bold text-white mb-4">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p className="text-lg text-white mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories, we have
              it all!
            </p>
            <button
              onClick={handleNavigate}
              className="btn bg-white text-[#9538E2] text-lg rounded-full px-8 py-2 hover:bg-yellow-50"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="absolute bottom-[-100px] md:bottom-[-250px] lg:bottom-[-310px] p-6 border rounded-2xl w-4/5 lg:w-3/5 backdrop-blur-md">
          <img src="./banner.jpg" alt="" className="" />
        </div>
      </div>
      <CardBox />
    </>
  );
};

export default Banner;
