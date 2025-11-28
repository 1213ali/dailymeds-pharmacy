import { useParams } from "react-router-dom";
import medicines from "../data/medicines";
import MedicineCard from "../components/MedicineCard";

export default function CategoryDetails() {
  const { category } = useParams();

  // Filter medicines by category (make sure your medicines have a category field)
  const filteredMedicines = medicines.filter(m => m.category === category);

  return (
    <div className="container mt-4">
      <h2>Category: {category.replace("-", " ")}</h2>
      {filteredMedicines.length === 0 ? (
        <p>No medicines found in this category.</p>
      ) : (
        <div className="row mt-3">
          {filteredMedicines.map(m => (
            <div key={m.id} className="col-md-4 mb-3">
              <MedicineCard medicine={m} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}