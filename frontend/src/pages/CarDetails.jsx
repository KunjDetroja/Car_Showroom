import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import "../components/defaultlayout.css"

const CarDetailsCard = ({ car }) => {
  return (
    <div
      style={{ border: "1px solid lightgrey" }}
      className="cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden  mx-3"
    >
      <Link to={`/carinfo/${car._id}`}>
        <div>
          <img
            className="object-cover object-top w-full h-full"
            src={`https://loremflickr.com/300/200/${car?.Make}","${car?.Model.replaceAll(" ","")}`}
            alt={car?.Make}
          />
        </div>
        <div style={{ marginTop: "5px", marginBottom: "10px" }}>
          <p style={{ width: "fit-content", paddingLeft: "15px" }}>
            {car?.Make} {car?.Model}
          </p>
          <p style={{ width: "fit-content", paddingLeft: "15px" }}>
            ₹ {car?.Price}
          </p>
          <div>
            <button className="btn1 mr-2">
              <Link to={`/carinfo/${car._id}`}>Details</Link>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarDetailsCard;
