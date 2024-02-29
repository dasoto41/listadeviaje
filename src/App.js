import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(itema) {
    setItems((items) => [...items, itema]);
  }

  function handleDeleteIems(description) {
    setItems((items) =>
      items.filter((item) => item.description !== description)
    );
  }
  function handleToggleItem(description) {
    setItems((items) =>
      items.map((item) =>
        item.description === description
          ? { ...item, packed: !item.packed }
          : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Estas seguro de borrar la lista completa?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteIems}
        onToggleItem={handleToggleItem}
        clear={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
