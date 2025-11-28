import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function NavbarComponent() {
const { cart } = useContext(CartContext);


return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<div className="container">
<Link className="navbar-brand" to="/">DailyMeds Pharmacy</Link>


<div>
<ul className="navbar-nav me-auto">
<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
<li className="nav-item"><Link className="nav-link" to="/store">DailyMeds Store</Link></li>
<li className="nav-item"><Link className="nav-link" to="/cart">Cart ({cart.length})</Link></li>

</ul>
</div>
</div>
</nav>
);
}