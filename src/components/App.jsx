import { useState } from "react";
import Header from './Header';
import Form from './Form';
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
{
  id : 1,
  name : 'Kopi',
  quantity : 4,
  checked : true,
},
{
  id : 2,
  name : 'Gula Pasir',
  quantity : 3,
  checked : false,
},
{
  id : 3,
  name : 'Air Mineral',
  quantity : 2,
  checked : false,
},
];

export default function App() {

  const[items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDelItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function handleClearItems(){
    setItems([]);
  }

  function handleToggleChecked(id) {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  }

  return (
    <div className="app">
    <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDelItem={handleDelItem} onClearItems={handleClearItems} onToggleChecked={handleToggleChecked}/>
      <Footer items={items}/>
    </div>
  );
}