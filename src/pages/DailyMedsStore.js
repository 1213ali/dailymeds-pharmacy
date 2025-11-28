import React from "react";
import medicines from "../data/medicines";
import { Link } from "react-router-dom";

const DailyMedsStore = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">DailyMeds Store</h2>

      <div className="row">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="col-md-4 mb-4">
            <div className="card p-3 shadow-sm">
              <img
                src={medicine.img}
                alt={medicine.name}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                  borderRadius: "6px",
                }}
              />
              <h5 className="mt-3 text-center">{medicine.name}</h5>
              <p className="text-center">${medicine.price}</p>

              <Link
                to={`/medicine/${medicine.id}`}
                className="btn btn-primary w-100"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyMedsStore;
