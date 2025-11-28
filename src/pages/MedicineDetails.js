import { useParams, useNavigate } from "react-router-dom";
import medicines from "../data/medicines";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function MedicineDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const medicine = medicines.find((m) => m.id === parseInt(id));

  if (!medicine) {
    return <p>Medicine not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart(medicine);
    
  };

  return (
    <div className="container mt-4">
      <h2>{medicine.name}</h2>
      <div className="row mt-3">
        <div className="col-md-6">
          <img
            src={medicine.img}
            alt={medicine.name}
            className="medicine-img"
          />
        </div>
        <div className="col-md-6">
          <p>{medicine.description}</p>
          <p><strong>Price:</strong> ${medicine.price.toFixed(2)}</p>
          <button className="btn btn-primary me-2" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}