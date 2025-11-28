import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [urgent, setUrgent] = useState(false);

  const deliveryFee = 5;
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  const handleDeliver = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    navigate("/order-summary", {
      state: { name, phone, address, urgent, cart, subtotal, deliveryFee, total },
    });
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Your Cart</h2>
        <p>No items in cart.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {item.name} (${item.price.toFixed(2)}) x {item.quantity}
            </div>
            <div>
              <button className="btn btn-sm btn-secondary me-2" onClick={() => removeFromCart(item.id)}>
                -
              </button>
              <button className="btn btn-sm btn-primary" onClick={() => addToCart(item)}>
                +
              </button>
            </div>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <strong>Delivery Fee</strong>
          <span>${deliveryFee.toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <strong>Total</strong>
          <span>${total.toFixed(2)}</span>
        </li>
      </ul>

      <form onSubmit={handleDeliver}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
  <label className="form-label">Phone Number</label>
  <input
    type="tel"
    className="form-control"
    value={phone}
    onChange={(e) => {
      let input = e.target.value;
      input = input.replace(/\D/g, "");
      if (input.length <= 3) {
        input = `(${input}`;
      } else if (input.length <= 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
      } else {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
      }
      setPhone(input);
    }}
    maxLength={14} 
    required
  />
</div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="urgentCheck"
            checked={urgent}
            onChange={(e) => setUrgent(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="urgentCheck">
            Urgent Delivery (2–5 hours)
          </label>
        </div>
        <button type="submit" className="btn btn-success">Deliver</button>
      </form>
    </div>
  );
}
