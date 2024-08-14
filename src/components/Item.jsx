import { useState } from "react";

export default function Item({ item, onDelItem, onToggleChecked }) {
    const [checked, setChecked] = useState(item.checked);
  
    function handleCheckboxChange() {
      onToggleChecked(item.id);
      setChecked(!checked);
    }
  
    return (
      <li key={item.id}>
        <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
        <span style={checked ? { textDecoration: 'line-through' } : {}}>
          {item.quantity} {item.name}
        </span>
        <button onClick={() => onDelItem(item.id)}>&times;</button>
      </li>
    );
  }