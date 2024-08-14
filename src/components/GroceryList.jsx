import { useState } from "react";
import Item from "./Item";


export default function GroceryList({items, onDelItem, onClearItems, onToggleChecked}) {

    const[sortby, setSortby] = useState('input');
  
    let sortedItems;
  
    switch (sortby) {
      case 'name':
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'checked':
        sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
        break;
      default:
        sortedItems = items;
        break;
    }
  
    return (
      <>
        <div className="list">
          <ul>
            {sortedItems.map((item) => (
              <Item item={item} key={item.id} onDelItem={onDelItem} onToggleChecked={onToggleChecked}/>
            ))}
          </ul>
        </div>
        <div className="actions">
          <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
      </>
    );
  }