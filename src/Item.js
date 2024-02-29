export default function Item({ it, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={it.packed}
        onChange={() => onToggleItem(it.description)}
      />
      <span style={it.packed ? { textDecoration: "line-through" } : {}}>
        {it.quantity} {it.description}
      </span>
      <button onClick={() => onDeleteItem(it.description)}>❌</button>
    </li>
  );
}
