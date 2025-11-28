import { useLocation, Link } from "react-router-dom";

export default function OrderSummary() {
  const location = useLocation();
  const { name, phone, address, urgent, cart, subtotal, total } = location.state || {};

  if (!location.state) {
    return (
      <div className="container mt-4">
        <h2>No Order Found</h2>
        <Link to="/">Go Back Home</Link>
      </div>
    );
  }

 
  const finalDeliveryFee = urgent ? 10 : 5;

 
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  
  const finalTotal = subtotal + finalDeliveryFee;

  return (
    <div className="container mt-4">
      <h2>Order Summary</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Delivery Type:</strong> {urgent ? "Urgent (2–5 hours)" : "Standard (1 business day)"}</p>

      <h4 className="mt-3">Items Ordered:</h4>

      <ul className="list-group mb-3">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {item.name} {item.quantity ? `x ${item.quantity}` : ""}
            <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
          </li>
        ))}

        <li className="list-group-item d-flex justify-content-between">
          <strong>Total Items Ordered</strong>
          <span>{totalItems}</span>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <strong>Delivery Fee</strong>
          <span>${finalDeliveryFee.toFixed(2)}</span>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <strong>Total</strong>
          <span>${finalTotal.toFixed(2)}</span>
        </li>
      </ul>

      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
