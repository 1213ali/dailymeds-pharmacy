import { Link } from "react-router-dom";


export default function MedicineCard({ medicine }) {
return (
<div className="card p-2 shadow-sm h-100">
<img src={medicine.img} className="card-img-top" alt={medicine.name} />
<div className="card-body d-flex flex-column">
<h5>{medicine.name}</h5>
<p className="mt-auto">${medicine.price}</p>


<Link className="btn btn-primary mt-2" to={`/medicine/${medicine.id}`}>
View Details
</Link>
</div>
</div>
);
}