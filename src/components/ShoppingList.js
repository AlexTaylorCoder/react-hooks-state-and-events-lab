import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [allStates, allStatesFun] = useState(items)
  const [selectedCategory, selectedCategoryFun] = useState("All")


  const filtered = allStates.filter(item=> {
    if (selectedCategory ==="All") {
      return true;
    }
    else {
      return selectedCategory === item.category
    }
  })

  function changeState(e) {
    selectedCategoryFun(e.target.value)
  }

  

  console.log(filtered)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeState}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
