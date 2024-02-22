import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Documentacion", quantity: 2, packed: false },
  { id: 2, description: "Medias", quantity: 12, packed: false },
  { id: 3, description: "Remeras", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> ✈ Check List ✈</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { quantity, description, packed: false };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> Que necesitas para tu viaje? 🧷</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item it={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ it }) {
  return (
    <li>
      <span style={it.packed ? { textDecoration: "line-through" } : {}}>
        {it.quantity}
        {it.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      tienes x elementos en tu lista, y ya empacaste x
    </footer>
  );
}

export default App;
