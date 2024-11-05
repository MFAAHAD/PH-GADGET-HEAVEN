import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { id, title, image, category, price } = gadget;

  return (
    <>
      <div className="card   bg-white ">
        <div className="p-4 ">
          <img
            className="rounded-xl flex justify-center items-center w-[282.67px] h-[181px] "
            src={image}
            alt={title}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <h1 className="text-lg">{title}</h1> */}
          <p>Price: ${price}</p>
          <div className="card-actions">
            <Link to={`gadget/${id}`}>
            <button className="btn btn-primary font-bold rounded-full bg-white text-purple-600 hover:bg-purple-500 hover:text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gadget;
