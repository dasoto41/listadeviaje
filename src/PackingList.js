import Item from "./Item";
import { useState } from "react";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  clear,
}) {
  const [sortBy, setSortby] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            it={item}
            key={item.description}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">mas reciente</option>
          <option value="description">de A - Z</option>
          <option value="packed">empacado</option>
        </select>
        <button onClick={() => clear()}>Limpiar Lista</button>
      </div>
    </div>
  );
}
